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
    <div className="flex flex-col gap-2 border-none">
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
                "rounded-lg bg-default-100 hover:bg-default-200 border-none",
              ],
            })}
            onClick={switchTheme}
          >
            {isSelected ? <p className="bg-red-500 w-full m-0">Dark</p> : <p className="bg-green-500 w-full m-0">Light</p>}
          </div>
      </Component>
    </div>
  )
}

export default ThemeSwitcher