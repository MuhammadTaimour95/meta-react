import React from 'react';
import logo from '../assets/css/logo-meta.png';

import '../assets/css/styles.css';
import { BANNERbZero1, one, twoA, threeA, fourA } from '../assets/index';

class FullScreenMap extends React.Component {
  render() {
    return (
      <>
        <div class='home-page'>
          <div
            id='carouselExampleControls'
            class='carousel slide'
            data-ride='carousel'
          >
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img
                  class='d-block w-100'
                  src={BANNERbZero1}
                  alt='First slide'
                />
              </div>
              <div class='carousel-item'>
                <img
                  class='d-block w-100'
                  src={BANNERbZero1}
                  alt='Second slide'
                />
              </div>
              <div class='carousel-item'>
                <img
                  class='d-block w-100'
                  src={BANNERbZero1}
                  alt='Third slide'
                />
              </div>
            </div>
            <a
              class='carousel-control-prev'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Previous</span>
            </a>
            <a
              class='carousel-control-next'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='sr-only'>Next</span>
            </a>
          </div>
          <section id='team'>
            <div class='container my-3 py-5 text-center'>
              <div class='row mb-5'>
                <div class='col'>
                  <div class='row'>
                    <div class='col-lg-3 col-md-6'>
                      <a href='aprovados.html' class='box-txt'>
                        <img src={one} class='boxes' />
                      </a>
                    </div>
                    <div class='col-lg-3 col-md-6'>
                      <a href='aprovados.html' class='box-txt'>
                        <img src={twoA} class='boxes' />
                      </a>
                    </div>
                    <div class='col-lg-3 col-md-6'>
                      <a href='aprovados.html' class='box-txt'>
                        <img src={threeA} class='boxes' />
                      </a>
                    </div>
                    <div class='col-lg-3 col-md-6'>
                      <a href='aprovados.html' class='box-txt'>
                        <img src={fourA} class='boxes' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <br />
          <div class='container'>
            <div class='row'>
              <div class='col-xs-6 col-md-4'>
                <img
                  src='./styles/Wellington.png'
                  width='310'
                  height='310'
                  class='mb-3'
                />
                <br />
                <a href='https://www.instagram.com/professorwlima/' title>
                  <img
                    src='./styles/instagram.png'
                    class='img-responsive ig-logo'
                  />
                </a>
                <a href='https://twitter.com/ProfessorWLima' title>
                  <img
                    src='./styles/twitter.png'
                    class='img-responsive tt-logo'
                  />
                </a>
                <a
                  href='https://www.youtube.com/channel/UC_3bp8uvpd7QWdVkNtVCTPQ/featured'
                  title
                >
                  <img
                    src='./styles/youtube.png'
                    class='img-responsive yt-logo'
                  />
                </a>
              </div>
              <div class='col-xs-8 col-md-8 mt-8'>
                <h4 class='text-left'>Seja Bem Vindo(a),</h4>
                <h2 class='bold text-left'>ao Curso Meta</h2>
                <br />
                <br />
                <br />
                <h1 class='text-center'>
                  "Nossa Meta é o seu futuro,
                  <br />
                  Sonhamos juntos com você!"
                </h1>
                <br />
                <h4 class='text-right'>~Wellington Lima.</h4>
              </div>
            </div>
          </div>

          <div class='container-fluid'>
            <div class='row'>
              <div class='offset-xs-2 offset-md-2'></div>
              <div class='col-sm-8 col-md-8'>
                <a href='carreiras-militares.html'>
                  <header class='carreiras-militares-lg' href='cursos.html'>
                    <div class='container'>
                      <div class='cm-text'></div>
                    </div>
                  </header>
                </a>
              </div>
              <div class='offset-xs-2 offset-md-2'></div>

              <div class='offset-xs-2 offset-md-2'></div>
              <div class='col-xs-8 col-md-8 cp-text text-center'>
                <h2>Você sonha em ser um militar?</h2>
                <p>Melhor conteúdo para sua aprovação certa!</p>
                <a class='btn btn-primary' href='carreiras-militares.html'>
                  <button>Clique para saber mais</button>
                </a>
              </div>

              <div class='offset-xs-2 offset-md-2'></div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div class='container-fluid'>
            <div class='row'>
              <div class='offset-xs-2 offset-md-2'></div>
              <div class='col-sm-8 col-md-8'>
                <a href='carreirias-policiais.html'>
                  <header class='carreiras-policiais-lg' href='cursos.html'>
                    <div class='container'>
                      <div class='cm-text'></div>
                    </div>
                  </header>
                </a>
              </div>
              <div class='offset-xs-2 offset-md-2'></div>

              <div class='offset-xs-2 offset-md-2'></div>
              <div class='col-xs-8 col-md-8 cp-text text-center'>
                <h2>Quer se tornar um policial?</h2>
                <p>Conquistes seus sonhos no Meta!</p>
                <a class='btn btn-primary' href='carreirias-policiais.html'>
                  <button>Clique para saber mais</button>
                </a>
              </div>
              <div class='offset-xs-2 offset-md-2'></div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div class='container-fluid'>
            <div class='row'>
              <div class='offset-xs-2 offset-md-2'></div>
              <div class='col-sm-8 col-md-8'>
                <a href='cursos-diversos.html'>
                  <header class='cursos-diversos-lg'>
                    <div class='container'>
                      <div class='cm-text'></div>
                    </div>
                  </header>
                </a>
              </div>
              <div class='offset-xs-2 offset-md-2'></div>

              <div class='offset-xs-2 offset-md-2'></div>
              <div class='col-xs-8 col-md-8 cp-text text-center'>
                <h2>Qual curso você deseja ser aprovado?</h2>
                <p>Nos te ajudamos a realizar seus sonhos.</p>
                <a class='btn btn-primary' href='cursos-diversos.html'>
                  <button>Clique para saber mais</button>
                </a>
              </div>
              <div class='offset-xs-2 offset-md-2'></div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div class='container'>
            <div class='row'>
              <div class='col-xs-6 col-md-6'>
                <br />
                <br />
                <br />
                <span>
                  <img src='./styles/data 1.png' class='calendario' />
                </span>
                <h2 class='clnd text-center'>Aulão "Os Pedagógicos"</h2>
                <br />
                <span>
                  <img src='./styles/data 2.png' class='calendario' />
                </span>
                <h2 class='clnd text-center'>Aulão "Os Pedagógicos"</h2>
                <br />
                <br />
              </div>
              <div class='col-xs-6 col-md-6'>
                <iframe
                  width='420'
                  height='260'
                  src='https://www.youtube.com/embed/8IRoqQFUx2A'
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FullScreenMap;
