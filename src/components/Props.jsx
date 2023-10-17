import React, { createContext, useState } from 'react'
import datas from '../datas/robinsebastien.json'

export const SharedStateContext = createContext()

export const SharedStateProvider = ({ children }) => {
  const [headerProps, setHeaderProps] = useState(datas[0].id)

  return (
    <SharedStateContext.Provider value={{ headerProps, setHeaderProps }}>
      {children}
    </SharedStateContext.Provider>
  )
}
