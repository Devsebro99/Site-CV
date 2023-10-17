import React, { useState, useContext, useEffect } from 'react'
import { SharedStateContext } from '../../components/Props'
import datas from '../../datas/robinsebastien.json'
import matete01 from '../../assets/matete01.jpg'
import './curriculum.css'
import Menu from '../../layouts/menu/Nav'

function Curriculum() {
  console.log(datas)

  const [langue, setLangue] = useState(datas[0].langue)
  const dataLangue = datas.find((x) => x.langue === langue)
  const { headerProps, setHeaderProps } = useContext(SharedStateContext)
  const result = datas.find((data) => data.id === headerProps)

  console.log(result)
  const phone = result.contacts[0]
  const Email = result.contacts[1]
  const Linkedin = result.contacts[2]
  const GitHub = result.contacts[3]

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
        {/* ---Coté gauche du curricukum---*/}
        <div className="partie_">
          <img className="header_img" src={matete01} alt="Auteur" />
          <div>
            <h2>Contact</h2>
            <div className="footer_list">
              <ul>
                <li>{phone}</li>
                <li>{Email}</li>
                <li>{Linkedin}</li>
                <li>{GitHub}</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Langues</h4>
            <ul>
              <li>{result.competences.langues[0]}</li>
              <li>{result.competences.langues[1]}</li>
              <li>{result.competences.langues[2]}</li>
            </ul>
          </div>
          <div>
            <h3>Centres d'Intérêt</h3>
            <p>{result.interet}</p>
          </div>
          <div>
            <h3>Skills</h3>
            <ul>
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
        {/* ---Coté droit du curricukum---*/}
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
    </main>
  )
}

export default Curriculum
