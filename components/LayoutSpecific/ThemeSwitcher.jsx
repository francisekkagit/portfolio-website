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

  const switchTheme = () => {
    // Toggle between light and dark themes
    const newTheme = theme === 'dark' ? 'light' : 'dark';
  
    // Remove the old theme class and add the new one
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  
    // Update the theme using next-themes setTheme function
    setTheme(newTheme);
  };

  if(!mounted) return <div className="bg-red-600 px-1">Not Mounted</div>

  return (
    <div className="flex flex-col gap-2">
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
                "rounded-lg bg-default-100 hover:bg-default-200 z-30",
              ],
            })}
            onClick={switchTheme}
          >
            {isSelected ? <p>Light</p> : <p>Dark</p>}
          </div>
      </Component>
    </div>
  )
}

export default ThemeSwitcher