import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/css/logo-meta.png';

import routes from 'routes.js';

class Header extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
    color: 'transparent'
  };
  sidebarToggle = React.createRef();
  toggle = () => {
    if (this.state.isOpen) {
      this.setState({
        color: 'transparent'
      });
    } else {
      this.setState({
        color: 'white'
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  dropdownToggle = e => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  getBrand = () => {
    var name;
    routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  };
  openSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    this.sidebarToggle.current.classList.toggle('toggled');
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: 'white'
      });
    } else {
      this.setState({
        color: 'transparent'
      });
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
      this.sidebarToggle.current.classList.toggle('toggled');
    }
  }
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-sm bg-light fixed-top navbar-light justify-content-end'>
          <a className='navbar-brand' href='index.html'>
            <img src={logo} />
          </a>
          <a className='btn btn-cursos d-none d-sm-block' href='aluno.html'>
            <button>Login</button>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse flex-grow-0'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav text-right mr-2'>
              <li className='nav-item active'>
                <a className='nav-link d-sm-none d-md-block' href='cursos.html'>
                  Cursos
                </a>
              </li>
              <li className='nav-item active d-sm-none d-md-block'>
                <a className='nav-link' href='matricule-se.html'>
                  Matricule-se
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
