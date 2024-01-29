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

  const card = linksArray.map((link, index) => (
    <article className="oneCard" key={index}>
      <Link className="address" to={link}>
        <h2 className="btn">{titlesArray[index]}</h2>
      </Link>
      <div>
        {parafsArray[index].map((txt, paraIndex) => (
          <p key={paraIndex}>{txt}</p>
        ))}
      </div>
    </article>
  ))
  return (
    <main id="siteMain">
      <div className="banner">
        <h1 className="banner_title">
          {TitleMaster[0]} <br />
          {TitleMaster[1]}
        </h1>
        <Date></Date>
      </div>
      <section className="containerCenter">
        <nav className="containerCenter_multiCard">{card}</nav>
        <figure className="containerCenter_image">
          <div className="containerCenter_imageChildren"></div>
        </figure>
      </section>
      <BottomPage></BottomPage>
    </main>
  )
}
