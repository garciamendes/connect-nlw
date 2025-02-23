import { ScoreAnimate } from "@/src/components/score-animate";
import { getSubscribersSubscriberIdRankingClicks, getSubscribersSubscriberIdRankingCount, getSubscribersSubscriberIdRankingPosition } from "@/src/http/api";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

interface IStatsProps {
  subscribeId: string;
}

export const Stats = async ({ subscribeId }: IStatsProps) => {
  const { count: accessCount } = await getSubscribersSubscriberIdRankingClicks(subscribeId)
  const { count: invitesCount } = await getSubscribersSubscriberIdRankingCount(subscribeId)
  const { position } = await getSubscribersSubscriberIdRankingPosition(subscribeId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          <ScoreAnimate score={accessCount} />
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          <ScoreAnimate score={invitesCount} />
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {position ? `${<ScoreAnimate score={position} />}°` : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <Medal className="absolute top-3 left-3 size-5 text-purple" />
      </div>
    </div>
  );
};
