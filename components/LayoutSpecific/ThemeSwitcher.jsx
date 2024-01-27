"use client"
import {useTheme} from "next-themes";
import React, { useEffect, useState } from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";

const ThemeSwitcher = (props) => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return( 
        <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <p>hi</p> : <p>bye</p>}
          </div>
      </Component>
      <p className="text-default-500 select-none">Lights: {isSelected ? "on" : "off"}</p>
    </div>
    )
  }
    return (
    <div className="bg-red-500">
     <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <p>hi</p> : <p>bye</p>}
          </div>
      </Component>
      <p className="text-default-500 select-none">Lights: {isSelected ? "on" : "off"}</p>
    </div>
    </div>
  )
}

export default ThemeSwitcher