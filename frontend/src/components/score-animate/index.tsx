"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

interface IScoreAnimateProps {
  score: number
  className?: string
}

export const ScoreAnimate = ({ score, className }: IScoreAnimateProps) => {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, score, { duration: 2 })
    return () => controls.stop()
  }, [])

  return <motion.pre className={className}>{rounded}</motion.pre>
}