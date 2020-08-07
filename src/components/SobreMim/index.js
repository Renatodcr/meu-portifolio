import React, { Component } from 'react';
import img from '../../img/foto.png';
import './style.css';
import { FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { Link } from 'react-router-dom';

class SobreMim extends Component {
  render() {
    return (
      <div className="bodySobreMim">
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

        <section className="jumbotron text-center corFundo">
          <div className="container">
            <h2 className="jumbotron-heading titulosBrancos " id="sobreMim">Sobre Mim</h2>
            <p className="lead textoBranco">Meu nome é Renato do Carmo Ribeiro, sou um Desenvolvedor Júnior Web/Mobile. As tecnologias que uso são: JavaScript, ReactJS, React Native, NodeJS e MongoDB.</p>
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