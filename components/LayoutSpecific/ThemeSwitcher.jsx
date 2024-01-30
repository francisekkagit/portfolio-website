"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";

import React from 'react'


const ThemeSwitcher = (props) => {
  const {
    Component, 
    slots, 
    isSelected: initialIsSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = useState(initialIsSelected);

  useEffect(() => {
    // Set isSelected based on the current theme
    const newIsSelected = theme === 'dark';
    // Update the state only if it's different to avoid unnecessary re-renders
    if (isSelected !== newIsSelected) {
      setIsSelected(newIsSelected);
    }
  
    // Set mounted to true on component mount
    setMounted(true);
  }, [theme, isSelected]);

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
                "w-[26px] h-[26px] m-0",
                "flex items-center justify-center",
                "rounded-none p-0 bg-transparent group-data-[selected=true]:bg-transparent",
              ],
            })}
            onClick={switchTheme}
          >
            {isSelected ? 
            <div className="w-[26px] h-[26px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </div> 
            : 
            <div className="w-[26px] h-[26px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
}
          </div>
      </Component>
    </div>
  )
}

export default ThemeSwitcher