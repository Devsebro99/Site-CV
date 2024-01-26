import './test.scss'
import React from 'react'
import Menu from '../../layouts/menu/Nav.jsx'
import BottomPage from '../../layouts/footer/Footer.jsx'

export default function Presentation() {
  return (
    <main id="siteMain">
      <Menu></Menu>
      <div>Test</div>
      <BottomPage></BottomPage>
    </main>
  )
}
