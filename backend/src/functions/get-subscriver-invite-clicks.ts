import { redis } from '../redis/client'

interface IGetSubscriberInviteClicksProps {
  subscriberId: string
}

export const getSubscriberInviteClicks = async ({
  subscriberId,
}: IGetSubscriberInviteClicksProps) => {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
