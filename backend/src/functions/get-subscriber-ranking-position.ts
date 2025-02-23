import { redis } from '../redis/client'

interface IGetSubscriberRankingPositionProps {
  subscriberId: string
}

export const getSubscriberRankingPosition = async ({
  subscriberId,
}: IGetSubscriberRankingPositionProps) => {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (!rank) return { position: null }

  return { position: rank + 1 }
}
