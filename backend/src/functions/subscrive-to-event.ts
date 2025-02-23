import { db } from '../drizzle/client'
import { subcriptions } from '../drizzle/schemas/subscriptions'

interface ISubscribeToEventProps {
  name: string
  email: string
}

export const subscribeToEvent = async ({
  name,
  email,
}: ISubscribeToEventProps) => {
  const result = await db
    .insert(subcriptions)
    .values({ name, email })
    .returning()

  const subscriber = result[0]
  return {
    subscriberId: subscriber.id,
  }
}
