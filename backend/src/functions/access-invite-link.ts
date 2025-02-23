import { redis } from '../redis/client'

interface IAccessInviteLinkProps {
  subscriberId: string
}

export const accessInviteLink = async ({
  subscriberId,
}: IAccessInviteLinkProps) => {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
