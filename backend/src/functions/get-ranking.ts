import { inArray } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subcriptions } from '../drizzle/schemas/subscriptions'
import { redis } from '../redis/client'

export const getRanking = async () => {
  const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')

  const subscriberIdAndScore: Record<string, number> = {}

  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1])
  }

  const subscribers = await db
    .select()
    .from(subcriptions)
    .where(inArray(subcriptions.id, Object.keys(subscriberIdAndScore)))

  const rankingWithScore = subscribers
    .map(sub => {
      return {
        id: sub.id,
        name: sub.name,
        score: subscriberIdAndScore[sub.id],
      }
    })
    .sort((a, b) => {
      return b.score - a.score
    })

  return { rankingWithScore }
}
