import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconLoader from './IconLoader';

const Portfolio: React.FC = () => {
  useEffect(() => {
    // Aquí puedes agregar cualquier lógica de inicialización si es necesaria
  }, []);

  return (
    <div id="wrapper">
      <IconLoader />
      <div id="main">
        <div className="inner">
          {/* TITLE PROFILE */}
          <div id="container01" className="centered container default">
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger="1">
                <div id="image04" className="profile-picture image">
                  <span className="frame">
                    <img src="/img/foto-perfil.webp" alt="Julian Aguirre" />
                  </span>
                </div>
                <h1 id="text01" className="heading-primary">Julian Aguirre</h1>
                <p id="text16" className="text-description">Game Developer | Game Designer</p>
                <ul id="icons02" className="navigation icons">
                  <li>
                    <a className="n01" href="#start" role="button">
                      <svg aria-labelledby="icons02-icon-1-title">
                        <title id="icons02-icon-1-title">Chevron Down</title>
                        <use xlinkHref="#icon-ecbd7520f72820fb3c1bfce19d8ed9ce"></use>
                      </svg>
                      <span className="label">Chevron Down</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECT 1 - Thuk Thay */}
          <hr id="divider02" className="style1" />
          <div 
            id="container03" 
            data-scroll-id="start" 
            data-scroll-behavior="center" 
            data-scroll-offset="0" 
            data-scroll-speed="3" 
            data-scroll-invisible="1" 
            className="project-section container columns"
          >
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger="1" data-reorder="1,0">
                <div>
                  <p id="text02" className="label-small">Mobile Game</p>
                  <h2 id="text03" className="heading-gradient">Thuk Thay</h2>
                  <p id="text_development_date" className="label-small">June 2023 - September 2024</p>
                  <p id="text05" className="text-description">
                    A digital adaptation of the fast-paced Laotian shedding card game. As a freelance project, 
                    I handled all aspects from programming to UI/UX design, creating an engaging multiplayer card game experience.
                  </p>
                  <ul id="buttons02" className="primary buttons">
                    <li>
                      <Link to="/thuk-thay" className="button n01" role="button">
                        <svg aria-labelledby="buttons02-icon-1-title">
                          <title id="buttons02-icon-1-title">Chevron Right (Light)</title>
                          <use xlinkHref="#icon-80dc50be409b6c0a58c1f62335c07e7d"></use>
                        </svg>
                        <span className="label">Details</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div id="image01" className="project-thumbnail image" data-position="center">
                    <span className="frame">
                      <img src="/img/IconThukThay(iOS)256x256.webp" alt="Thuk Thay Screenshot" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 2 - World Traveler */}
          <hr id="divider01" className="style1" />
          <div id="container04" className="project-section container columns">
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger="1" data-reorder="0,1">
                <div>
                  <div id="image02" className="project-thumbnail image" data-position="center">
                    <span className="frame">
                      <img src="/img/world-traveler-preview.png" alt="World Traveler Screenshot" />
                    </span>
                  </div>
                </div>
                <div>
                  <p id="text06" className="label-small">Mobile Game</p>
                  <h2 id="text07" className="heading-gradient">World Traveler</h2>
                  <p id="text_dev_date_2" className="label-small">January 2024 - April 2024</p>
                  <p id="text08" className="text-description">
                    A simple hypercasual voxel art game for Android. Players control a plane that flies forward automatically, 
                    tapping the screen to change directions. Features include shop system, character skins, leaderboard, and achievements.
                  </p>
                  <ul id="buttons03" className="primary buttons">
                    <li>
                      <Link to="/world-traveler" className="button n01" role="button">
                        <svg aria-labelledby="buttons03-icon-1-title">
                          <title id="buttons03-icon-1-title">Chevron Right (Light)</title>
                          <use xlinkHref="#icon-80dc50be409b6c0a58c1f62335c07e7d"></use>
                        </svg>
                        <span className="label">Details</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 3 - stem.mies */}
          <hr id="divider03" className="style1" />
          <div id="container05" className="project-section container columns">
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger="1" data-reorder="1,0">
                <div>
                  <p id="text09" className="label-small">Mobile Game</p>
                  <h2 id="text10" className="heading-gradient">stem.mies</h2>
                  <p id="text_dev_date_3" className="label-small">2024 - Present</p>
                  <p id="text11" className="text-description">
                    A rhythm game inspired by Geometry Dash but with a more accessible approach and rich visual accompaniment 
                    similar to Mario Maker. Features 2D visual style designed for expansion and future iPhone release.
                  </p>
                  <ul id="buttons04" className="primary buttons">
                    <li>
                      <Link to="/stem-mies" className="button n01" role="button">
                        <svg aria-labelledby="buttons04-icon-1-title">
                          <title id="buttons04-icon-1-title">Chevron Right (Light)</title>
                          <use xlinkHref="#icon-80dc50be409b6c0a58c1f62335c07e7d"></use>
                        </svg>
                        <span className="label">Details</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div id="image05" className="project-thumbnail image" data-position="center">
                    <span className="frame">
                      <img src="/img/stemmiesNewLogo.png" alt="stem.mies Screenshot" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* goodbye */}
          <hr id="divider05" className="style1" />
          <div id="container06" className="centered container default">
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger="1">
                <h2 id="text04" className="heading-gradient">That's it!</h2>
                <p id="text20" className="text-description">
                  Thanks for checking out my portfolio. Feel free to reach out, I'd love to connect!
                </p>
                {/* Icons list */}
                <ul id="icons01" className="social icons">
                  <li>
                    <a className="n01" href="https://www.linkedin.com/in/juliMAB/" role="button">
                      <svg aria-labelledby="icons01-icon-1-title">
                        <title id="icons01-icon-1-title">LinkedIn</title>
                        <use xlinkHref="#icon-bf393d6ea48a4e69e1ed58a3563b94a5"></use>
                      </svg>
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="credits" className="icc-credits">
            <span>
              <a href="https://carrd.co/build?ref=auto">Made by myself using templates from Carrd</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;