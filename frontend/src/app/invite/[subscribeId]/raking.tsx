import Image from "next/image";
import MedalGold from "../../../assets/medal-1.svg";
import MedalSilver from "../../../assets/medal-2.svg";
import MedalCooper from "../../../assets/medal-3.svg";
import { getRanking } from "@/src/http/api";
import { ScoreAnimate } from "@/src/components/score-animate";
import { RankPosition } from "./rankPosition";

interface IRankingProps {
  subscribeId: string;
}

export const Ranking = async ({ subscribeId }: IRankingProps) => {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const positionRank = index + 1

          return <RankPosition key={rank.id} name={rank.name} score={rank.score} positionRank={positionRank} />
        })}
      </div>
    </div>
  );
};
