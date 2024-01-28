"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

import React from 'react'


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return <div className="bg-red-600 px-1">Not Mounted</div>

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')} className="border-2 rounded-xl mx-1">Light Mode</button>
      <button onClick={() => setTheme('dark')} className="border-2 rounded-xl mx-1">Dark Mode</button>
    </div>
  )
}

export default ThemeSwitcher