import './home.scss'
import React, { useState } from 'react'
import Datas from '../../datas/robinsebastien.json'
import { Link } from 'react-router-dom'
import Date from '../../components/date/Date.jsx'
import BottomPage from '../../layouts/footer/Footer.jsx'

export default function Presentation() {
  const datas = useState(Datas[0])
  const TitleMaster = datas[0].title
  const allCards = datas[0].alllink
  const linksArray = allCards.map((item) => item.link || null)
  const titlesArray = allCards.map((item) => item.title || null)
  const parafsArray = allCards.map((item) => item.paraf || null)
  const lastIndex = linksArray.length - 1

  const card = linksArray.map(
    (link, index) =>
      index > 0 && (
        <article className="oneCard" key={index}>
          {console.log(link)}
          {console.log(index)}
          <Link className="address" to={link}>
            <h2 className="btn">{titlesArray[index - 1]}</h2>
          </Link>
          <div>
            {parafsArray[index - 1].map((txt, paraIndex) => (
              <p key={paraIndex}>{txt}</p>
            ))}
          </div>
        </article>
      )
  )

  const lastCard = (
    <article className="oneCard" key={lastIndex}>
      <Link className="oneCard_title" to={linksArray[lastIndex]}>
        <h2>{titlesArray[lastIndex]}</h2>
      </Link>
      <div>{parafsArray[lastIndex]}</div>
    </article>
  )

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
          <div className="containerCenter_image_picture"></div>
          <div className="containerCenter_image_cardAnnex">{lastCard}</div>
        </figure>
      </section>
      <BottomPage></BottomPage>
    </main>
  )
}
