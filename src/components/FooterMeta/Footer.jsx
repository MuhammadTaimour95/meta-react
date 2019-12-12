import React from 'react';
import { Container } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import {
  Youtube,
  Twitter,
  Instagram,
  Whatsapp,
  TelephoneSymbolButton
} from '../../assets/index';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer>
          <div className='container'>
            <router-link className='logo-font'>conduit</router-link>
            <span className='attribution'>
              An interactive learning project from
              <a
                rel='noopener noreferrer'
                target='blank'
                href='https://thinkster.io'
              >
                Thinkster
              </a>
              . Code &amp; design licensed under MIT.
            </span>
          </div>
        </footer>

        <footer className='page-footer font-small blue pt-4'>
          <div className='container-fluid text-center text-md-left'>
            <div className='row'>
              <div className='col-md-4 mt-md-0 mt-3'>
                <h4 className='text-uppercase text-center'>CURSO META</h4>
                <h5 className='text-center'>Nossa Meta é o seu futuro!</h5>
                <h6 className='text-center mb-5'>
                  CNPJ: 05.774.865/0001-29
                  <br />
                  <br />
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.9042504093118!2d-48.944984184666616!3d-16.32783594065199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea4672b2c2293%3A0x5794a076536d6a1c!2sAv.%20Profa.%20Zenaide%20Roriz%2C%2045%20-%20Jundia%C3%AD%2C%20An%C3%A1polis%20-%20GO%2C%2075110-790!5e0!3m2!1spt-PT!2sbr!4v1575248036266!5m2!1spt-PT!2sbr'
                    width='300'
                    height='225'
                    frameBorder='0'
                    className='mapa'
                    style={{ border: '0' }}
                    allowFullScreen
                  ></iframe>
                  <br />
                </h6>
              </div>

              <hr className='clearfix w-100 d-md-none pb-3' />

              <div className='col-md-4 mb-md-0 mb-4'>
                <h5 className='text-uppercase text-center'>Nossos Numeros</h5>
                <ul className='list-unstyled'>
                  <li>
                    <h5 className='text-center'>7093 Alunos</h5>
                  </li>
                  <li>
                    <h5 className='text-center'>11 Cursos</h5>
                  </li>
                  <li>
                    <h5 className='text-center'>1483 Aulas</h5>
                  </li>
                  <li>
                    <h5 className='text-center'>1835 Horas Aula</h5>
                  </li>
                  <br />
                  <br />
                  <li>
                    <h3 className='text-center'>
                      "O melhor ensino para sua aprovação!
                      <br />
                      ~Guilherme Diniz"
                    </h3>
                  </li>
                </ul>
              </div>

              <hr className='clearfix w-100 d-md-none pb-3' />

              <div className='col-md-4 mb-md-0 mb-4'>
                <h5 className='text-uppercase text-center'>Contato</h5>
                <ul className='list-unstyled'>
                  <li>
                    <h5 className='text-center'>
                      <a>
                        <img
                          src={TelephoneSymbolButton}
                          className='img-responsive phone text-center'
                        />
                      </a>
                      (62) 3317-4753
                    </h5>
                  </li>
                  <li>
                    <h5 className='text-center'>
                      <a>
                        <img
                          src={Whatsapp}
                          className='img-responsive wpp text-center'
                        />
                      </a>
                      (62) 99169-2145
                    </h5>
                  </li>
                  <br />
                  <li>
                    <h5 className='text-center h2-txt'>
                      cursometa@gmail.com
                      <br />
                      <a href='https://www.instagram.com/meta.educacional/'>
                        <img
                          src={Instagram}
                          className='img-responsive ig-logo-ft text-right'
                        />
                      </a>
                      <a href='https://twitter.com/professorwlima'>
                        <img
                          src={Twitter}
                          className='img-responsive tt-logo-ft text-right'
                        />
                      </a>
                      <a href='https://www.youtube.com/channel/UC_3bp8uvpd7QWdVkNtVCTPQ/featured'>
                        <img
                          src={Youtube}
                          className='img-responsive yt-logo-ft text-right'
                        />
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className='clearfix w-100 d-md-none pb-3' />

          <div className='footer-copyright text-center py-3'>
            © 2019 Copyright:
            <a href='https://cursometa.com'>Eduacional Meta</a>
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
