import React, { useState, useContext, useEffect } from 'react'
import { SharedStateContext } from '../../components/props/Props.jsx'
import datas from '../../datas/robinsebastien.json'
import matete01 from '../../assets/matete01.jpg'
import './curriculum.scss'
import Menu from '../../layouts/menu/Nav'
import Footer from '../../layouts/footer/Footer.jsx'

export default function Curriculum() {
  // definit l'utilisation de la langue francais ou anglais selon l'utilisateur
  const [langue, setLangue] = useState(datas[0].langue)
  const dataLangue = datas.find((x) => x.langue === langue)
  const { headerProps, setHeaderProps } = useContext(SharedStateContext)
  const result = datas.find((data) => data.id === headerProps)

  const Email = result.contacts[0]
  const Linkedin = result.contacts[1]
  const GitHub = result.contacts[2]

  useEffect(() => {
    if (headerProps !== null) {
      const initialLangue =
        datas.find((x) => x.id === headerProps)?.langue || ''
      setLangue(initialLangue)
    }
  }, [headerProps])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const selectedLangue = e.target.value
    setLangue(selectedLangue)
    const selectedId =
      datas.find((x) => x.langue === selectedLangue)?.id || null
    setHeaderProps(selectedId)
  }

  return (
    <main className="main">
      <Menu></Menu>
      <div className="curriculum">
        {/* ---side left of curricukum---*/}
        <div className="frame">
          <img className="head_img" src={matete01} alt="Auteur" />
          <div className="contact">
            <h2>Contact</h2>
            <div className="contact_bloc">
              <ul className="contact_bloc_list">
                <li className="contact_bloc_list_li">{Email}</li>
                <li className="contact_bloc_list_li">{Linkedin}</li>
                <li className="contact_bloc_list_li">{GitHub}</li>
              </ul>
            </div>
          </div>
          <div className="language">
            <h2>Langues</h2>
            <ul className="language_list">
              <li>{result.competences.langues[0]}</li>
              <li>{result.competences.langues[1]}</li>
              <li>{result.competences.langues[2]}</li>
            </ul>
          </div>
          <div className="hobbies">
            <h2>Centres d'Intérêt</h2>
            <p className="hobbies_list">{result.interet}</p>
          </div>
          <div className="skills">
            <h2>Compétences</h2>
            <ul className="skills_list">
              <li>
                <h4>Informatique</h4>
                <p>{result.competences.informatique}</p>
              </li>
              <li>
                <h4>Language Informatique</h4>
                <p>{result.competences.languages}</p>
              </li>
              <li>
                <h4>Frameworks</h4>
                <p>{result.competences.frameworks}</p>
              </li>
              <li>
                <h4>Outils</h4>
                <p>{result.competences.outils}</p>
              </li>
            </ul>
          </div>
        </div>
        {/* --- side right of curricukum ---*/}
        <div>
          <div className="header">
            <div className="header_auteur">
              <h1>
                {dataLangue.nom} {dataLangue?.prenom}
              </h1>
              <h2>{dataLangue.titre}</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="langue">Langue :</label>
                <select id="langue" value={langue} onChange={handleChange}>
                  {datas.map((x) => (
                    <option key={x.langue} value={x.langue}>
                      {x.langue}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>

          <div className="main_support">
            <article className="main_second">
              <div>
                <h3>About Me</h3>
                <p>{result.profile}</p>
              </div>
            </article>
            <article className="main_first">
              <div className="main_first_Education">
                <h3>Formations</h3>
                <ul>
                  <li>{result.projets[0]}</li>
                  <li>{result.projets[1]}</li>
                  <li>{result.projets[2]}</li>
                  <li>{result.projets[3]}</li>
                  <li>{result.projets[4]}</li>
                </ul>
              </div>
              <div className="main_Projets">
                <h3>Projets</h3>
                <ul>
                  <li>{result.experiences[0]}</li>
                  <li>{result.experiences[1]}</li>
                  <li>{result.experiences[2]}</li>
                  <li>{result.experiences[3]}</li>
                  <li>{result.experiences[4]}</li>
                  <li>{result.experiences[5]}</li>
                  <li>{result.experiences[6]}</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}
