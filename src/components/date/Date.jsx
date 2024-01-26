import React from 'react'
import './date.scss'

export default function DateComponent() {
  const currentDate = new Date()
  const allDate = currentDate.toLocaleDateString()
  const heure = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const heureFormatee = `${heure < 10 ? '0' : ''}${heure} : ${
    minutes < 10 ? '0' : ''
  }${minutes}`

  return (
    <div className="day">
      <p>Today</p>
      <div className="time">{allDate}</div>
      <div className="time">{heureFormatee}</div>
    </div>
  )
}
