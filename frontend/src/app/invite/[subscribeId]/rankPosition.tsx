'use client'

import { ScoreAnimate } from '@/src/components/score-animate'
import { motion } from 'motion/react'
import Image from "next/image";
import MedalGold from "../../../assets/medal-1.svg";
import MedalSilver from "../../../assets/medal-2.svg";
import MedalCooper from "../../../assets/medal-3.svg";

interface IRankPositionProps {
  positionRank: number
  name: string
  score: number
}

export const RankPosition = ({ name, score, positionRank }: IRankPositionProps) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: positionRank * 0.3,
      }}
      className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
    >
      <span className="text-sm text-gray-300 leading-none">
        <span className="font-semibold">{positionRank}°</span> | {name}
      </span>

      <ScoreAnimate score={score} className="font-heading text-2xl font-semibold text-gray-200 leading-none" />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: -13, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: (positionRank * 0.3) + 0.4,
        }}
        className="absolute right-3 top-3 w-10 h-10"
      >

        {positionRank === 1 && <Image src={MedalGold} alt="medal-gold" className="absolute top-0 right-8" priority />}
        {positionRank === 2 && <Image src={MedalSilver} alt="medal-silver" className="absolute top-0 right-8" priority />}
        {positionRank === 3 && <Image src={MedalCooper} alt="medal-cooper" className="absolute top-0 right-8" priority />}
      </motion.div>
    </motion.div>
  )
}