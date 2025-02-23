import { eq } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subcriptions } from "../drizzle/schemas/subscriptions";
import { redis } from "../redis/client";

interface ISubscribeToEventProps {
  name: string;
  email: string;
  referrerId?: string | null;
}

export const subscribeToEvent = async ({
  name,
  email,
  referrerId,
}: ISubscribeToEventProps) => {
  const subscribers = await db
    .select()
    .from(subcriptions)
    .where(eq(subcriptions.email, email));

  if (subscribers.length) {
    return {
      subscriberId: subscribers[0].id,
    };
  }

  const result = await db
    .insert(subcriptions)
    .values({ name, email })
    .returning();

  const subscriber = result[0];

  if (referrerId) {
    console.log(referrerId);
    await redis.zincrby("referral:ranking", 1, referrerId);
  }

  return {
    subscriberId: subscriber.id,
  };
};
