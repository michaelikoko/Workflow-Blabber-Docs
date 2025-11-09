'use client'
import { MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <>
      <div className="hero bg-base-300 flex-1 h-[90svh] sm:h-[85svh]">
        <div className="hero-content text-center flex flex-col justify-center items-center w-11/12 sm:w-10/12 md:w-8/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-start">
                Notify your team across{' '}
                <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text ">
                  multiple platforms
                </span>{' '}
                from a single GitHub Action
              </h1>
              <p className="py-6 text-base-content/65 w-12/12 text-start">
                Stop managing multiple notification actions. Workflow Blabber
                sends beautiful, formatted alerts to Discord, Telegram, Slack
                and Email with one simple configuration.
              </p>
              <Link href={'/docs/quick-start'}>
                <button className="btn btn-accent animate-bounce transition delay-150 duration-300 ease-in-out hover:scale-105">
                  <span>Get Started</span>
                  <MoveRight />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
