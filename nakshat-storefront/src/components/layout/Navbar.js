'use client'

import { useEffect, useRef, useState } from 'react' 
import Link from 'next/link'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { motion } from 'framer-motion'

export default function Navbar() {
  const direction = useScrollDirection();

  return (
    <motion.header 
      initial={false}
      animate={{ y: direction === 'down' ? '-110%' : '0%'}}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="border border-white/55"
    >
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        {/* Left box */}
        <div className="h-full border-r border-white/55">
          <nav className="flex h-full items-center gap-10 px-8 text-[22px] font-medium text-white/90">
            <Link className="hover:text-white transition" href="/shop">
              Shop
            </Link>
            <Link className="hover:text-white transition" href="/about">
              About
            </Link>
            <Link className="hover:text-white transition" href="/lookbook">
              Lookbook
            </Link>
          </nav>
        </div>

        {/* Center logo */}
        <div className="h-full border-r border-white/55 px-14 flex items-center justify-center">
          <Link
            href="/"
            className="brand-mark text-[34px] leading-none text-white/95"
          >
            NAKSHAT
          </Link>
        </div>


        {/* Right box */}
        <div className="h-full">
          <div className="flex h-full items-center justify-end gap-10 px-8 text-[22px] font-medium text-white/90">
            <Link className="hover:text-white transition" href="/cart">
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
