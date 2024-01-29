"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";

import React from 'react'


const ThemeSwitcher = (props) => {
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return <div className="bg-red-600 px-1">Not Mounted</div>

  return (
    <div className="flex flex-col gap-2 relative">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-[80px] h-[27px]",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <button className="absolute border-2 border-red-500 top-0 z-10" onClick={() => setTheme('light')}>Light Mode</button> : <button className="absolute border-2 border-red-500 top-0" onClick={() => setTheme('dark')}>Dark Mode</button>}
          </div>
      </Component>
    </div>
  )
}

export default ThemeSwitcher