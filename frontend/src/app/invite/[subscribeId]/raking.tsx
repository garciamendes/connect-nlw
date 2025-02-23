import Image from "next/image";
import MedalGold from "../../../assets/medal-1.svg";
import MedalSilver from "../../../assets/medal-2.svg";
import MedalCooper from "../../../assets/medal-3.svg";

interface IRankingProps {
  subscribeId: string;
}

export const Ranking = async ({ subscribeId }: IRankingProps) => {
  // const accessCount = await getSub

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Matheus Garcia
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1024
          </span>

          <Image
            src={MedalGold}
            alt="medal-gold"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Matheus Garcia
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1024
          </span>

          <Image
            src={MedalSilver}
            alt="medal-silver"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Matheus Garcia
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1024
          </span>

          <Image
            src={MedalCooper}
            alt="medal-cooper"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
};
