import './presentation.scss'
import React from 'react'
import Menu from '../../layouts/menu/Nav'
import BottomPage from '../../layouts/footer/Footer.jsx'

export default function Formulaire() {
  return (
    <main className="navFormulaire">
      <Menu></Menu>
      <h1>Mon Parcours</h1>
      <BottomPage></BottomPage>
    </main>
  )
}
