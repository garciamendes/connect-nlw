import { redis } from '../redis/client'

interface IGetSubscriberInviteCountProps {
  subscriberId: string
}

export const getSubscriberInviteCount = async ({
  subscriberId,
}: IGetSubscriberInviteCountProps) => {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
