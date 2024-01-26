import './home.scss'
import React, { useState } from 'react'
import Datas from '../../datas/robinsebastien.json'
import { Link } from 'react-router-dom'
import Date from '../../components/date/Date.jsx'
import BottomPage from '../../layouts/footer/Footer.jsx'

export default function Presentation() {
  const datas = useState(Datas[0])
  const TitleMaster = datas[0].title
  const allSections = datas[0].alllink
  const linksArray = allSections.map((item) => item.link || null)
  const titlesArray = allSections.map((item) => item.title || null)
  const parafsArray = allSections.map((item) => item.paraf)

  const sections = linksArray.map((link, index) => (
    <section key={index}>
      <Link className="address" to={link}>
        <h2 className="btn">{titlesArray[index]}</h2>
      </Link>
      <article>
        {parafsArray[index].map((txt, paraIndex) => (
          <p key={paraIndex}>{txt}</p>
        ))}
      </article>
    </section>
  ))
  return (
    <main id="siteMain">
      <div className="banner">
        <h1 className="bannerTitle">
          {TitleMaster[0]} <br />
          {TitleMaster[1]}
        </h1>
        <Date></Date>
      </div>

      <section className="containerCenter">
        <nav className="containerCenterTextNav">{sections}</nav>
        <article className="containerCenterImage"></article>
      </section>
      <BottomPage></BottomPage>
    </main>
  )
}
