import React, { Component } from 'react';
import img from '../../img/foto.png';
import './style.css';
import { FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

class SobreMim extends Component {
  render() {
    return (
      <div className="bodyContato">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Portifólio Renato Ribeiro</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/projetos'>Projetos</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/sobre-mim'>Sobre Mim</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to='/contato'>Contato</Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className="jumbotron text-center corSecundaria">
          <div>
            <div className="container-fluid">
              <h2 className="text-center titulosAzul" id="contato">Contato</h2>
              <h3 className="text-center titulosAzul" id="contato">Disponível para oportunidades.</h3>
              <a className="contato-email" href="mailto:renatodcr.99@gmail.com" target="_blank">
                <h4 className="text-center"><AiFillMail /> renatodcr.99@gmail.com</h4>
              </a>
              <h5 className="text-center">
                <a className="contato-whats" href="https://api.whatsapp.com/send?phone=5511944011960" target="_blank"><FaWhatsapp /> (11)94401-1960</a>
              </h5>
            </div>
          </div>
        </section>
        <footer className="text-center corPrimaria footer">
          <p className="textoBranco">Copyright 2020 Renato Ribeiro</p>
        </footer>
      </div>
    );
  }
}

export default SobreMim;