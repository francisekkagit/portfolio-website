"use client"
import {useTheme} from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return <div>Not Mounted</div>
  }
    return (
    <div className="bg-red-500">
     Current Theme: {theme}
     <button onClick={() => setTheme('light')} className="border-2 border-black mx-1">Light Mode</button>
        <button onClick={() => setTheme('dark')} className="border-2 border-black mx-1">Dark Mode</button>
    </div>
  )
}

export default ThemeSwitcher