import React, { Component } from 'react';
import img from '../../img/foto.png';
import siteCabelo from '../../img/sitecabelo.png';
import nodeApi from '../../img/nodeapi.png';
import fundo from '../../img/fundo1.png';
import dev from '../../img/dev.png';
import arc from '../../img/arc11.png';
import git from '../../img/git.png';
import extintores from '../../img/extintores.png';
import './style.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

class PaginaInicial extends Component {
  render() {
    return (
      <>
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

        <section class="jumbotron text-center corPrimaria">
          <div class="container">
            <img className="foto-perfil" src={img} alt="" />
            <h1 class="jumbotron-heading textoBranco">Renato Ribeiro</h1>
            <p class="lead textoBranco">Desenvolvedor Web - Mobile - Júnior</p>
            <p>
              <a href="#contato" class="btn btn-dark my-2">Contato</a>
            </p>
            <a className="textoBranco icone" href="https://github.com/Renatodcr" target="_blank"><FaGithub /></a>
            <a className="icones textoBranco icone" href="https://www.linkedin.com/in/renato-ribeiro-5a5707191/" target="_blank"><FaLinkedin /></a>

          </div>
        </section>

        <section>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class=""></li>
              <li data-target="#myCarousel" data-slide-to="1" class=""></li>
              <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item">
              <img class="first-slide projetos" src={fundo} alt="First-slide" />
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2 className="jumbotron-heading text-center titulosAzul" id="projeto">Projetos</h2>
                    <div class="row">
                      
                      <div class="col-md-6 cards">
                        <div class="card mb-4 sombra">
                          <img className="foto" src={extintores} alt="" />
                          <div class="card-body">
                            <p class="card-text">Site desenvolvido para uma loja de extintores.</p>
                            <ul className="listas">
                              <li>ReactJS</li>
                              <li>CSS</li>
                              <li>HTML</li>                  
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="https://extintoresnovedejulho.netlify.app/" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-success btnProjeto">Ver Projeto</button>
                                </a>
                                <a href="https://github.com/Renatodcr/loja-extintores" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-primary btnCodigo">Código</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <img class="first-slide projetos" src={fundo} alt="First-slide" />
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2 className="jumbotron-heading text-center titulosAzul" id="projeto">Projetos</h2>
                    <div class="row">
                      
                      <div class="col-md-6 cards">
                        <div class="card mb-4 sombra">
                          <img className="foto" src={dev} alt="" />
                          <div class="card-body">
                            <p class="card-text">Aplicativo Cadastrar Dev é um projeto que visa cadastrar e deletar desenvolvedores, utilizando API do github, localização e as tecnologias que trabalha.</p>
                            <ul className="listas">
                              <li>ReactJS</li>
                              <li>CSS</li>
                              <li>API-REST</li>                  
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="https://github.com/Renatodcr/cadastrar-dev" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-success btnProjeto">Ver Projeto</button>
                                </a>
                                <a href="https://github.com/Renatodcr/cadastrar-dev/tree/master/src" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-primary btnCodigo">Código</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <img class="first-slide projetos" src={fundo} alt="First-slide" />
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2 className="jumbotron-heading text-center titulosAzul" id="projeto">Projetos</h2>
                    <div class="row">
                      
                      <div class="col-md-6 cards">
                        <div class="card mb-4 sombra">
                          <img className="foto" src={arc} alt="" />
                          <div class="card-body">
                            <p class="card-text">Projeto que integra backend e frontend web e mobile, foram utilizados as tecnologias NodeJS, ReactJS, React Native e Expo.</p>
                            <ul className="listas">
                              <li>ReactJS</li>
                              <li>React Native</li>
                              <li>React Node.js</li>                
                              <li>API-REST</li>                  
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="https://github.com/Renatodcr/projeto-web-mobile" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-success btnProjeto">Ver Projeto</button>
                                </a>
                                <a href="https://github.com/Renatodcr/projeto-web-mobile" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-primary btnCodigo">Código</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <img class="first-slide projetos" src={fundo} alt="First-slide" />
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2 className="jumbotron-heading text-center titulosAzul" id="projeto">Projetos</h2>
                    <div class="row">
                      
                      <div class="col-md-6 cards">
                        <div class="card mb-4 sombra">
                          <img className="foto" src={git} alt="" />
                          <div class="card-body">
                            <p class="card-text">Projeto para buscar um úsuario no Github.</p>
                            <ul className="listas">
                              <li>ReactJS</li>
                              <li>JavaScript</li>
                              <li>CSS</li>                
                              <li>API-REST</li>                  
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="https://pedantic-lovelace-341a76.netlify.app/" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-success btnProjeto">Ver Projeto</button>
                                </a>
                                <a href="https://github.com/Renatodcr/buscar-usuario-github" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-primary btnCodigo">Código</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <img class="second-slide projetos" src={fundo} alt="second-slide" />
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2 className="jumbotron-heading text-center titulosAzul" id="projetos">Projetos</h2>
                    <div class="row">
                      <div class="col-md-6 cards">
                        <div class="card mb-4 sombra">
                          <img className="foto" src={nodeApi} alt="" />
                          <div class="card-body">
                            <p class="card-text">Esse é um projeto feito para a criação de uma API-REST, para buscar um título, uma descrição, um url e a data. Feito com NodeJS, JavaScript e MongoDB.</p>
                            <ul className="listas">
                              <li>NodeJS</li>
                              <li>JavaScript</li>
                              <li>MongoDb</li>
                              <li>Insomnia</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="https://github.com/Renatodcr/API-REST-nodeJS" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-success btnProjeto">Ver Projeto</button>
                                </a>
                                <a href="https://github.com/Renatodcr/API-REST-nodeJS/blob/master/server.js" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-primary btnCodigo">Código</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <img class="third-slide projetos" src={fundo} alt="Third-slide" />
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2 className="jumbotron-heading text-center titulosAzul" id="projetos">Projetos</h2>
                    <div class="row">
                      
                      <div class="col-md-6 cards">
                        <div class="card mb-4 sombra">
                          <img className="foto" src={siteCabelo} alt="" />
                          <div class="card-body">
                            <p class="card-text">Esse é um projeto de um site de cabeleireiro para as pessoas conhecerem melhor o salão, com quatro páginas: home, equipe, news e contato. </p>
                            <ul className="listas">
                              <li>HTML5</li>
                              <li>CSS</li>
                              <li>JavaScript</li>
                              <li>JQuery</li>
                            </ul>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <a href="https://musing-wing-8034d9.netlify.app/" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-success btnProjeto">Ver Projeto</button>
                                </a>
                                <a href="https://github.com/Renatodcr/site-cabeleireiro" target="_blank">
                                  <button type="button" class="btn btn-sm btn-outline-primary btnCodigo">Código</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>

        <section className="jumbotron text-center corPrimaria">
          <div className="container">
            <h2 className="jumbotron-heading titulosBrancos " id="sobreMim">Sobre Mim</h2>
            <p className="lead textoBranco">Meu nome é Renato do Carmo Ribeiro, sou um Desenvolvedor Júnior Web/Mobile. As tecnologias que uso são: JavaScript, ReactJS, React Native, NodeJS e MongoDB.</p>
          </div>
        </section>

        <section className="jumbotron text-center corSecundaria">
          <div>
            <div className="container-fluid">
              <h2 className="text-center titulosAzul" id="contato">Contato</h2>
              <h4 className="text-center titulosAzul" id="contato">Disponível para oportunidades.</h4>
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
      </>
    );
  }
}

export default PaginaInicial;
