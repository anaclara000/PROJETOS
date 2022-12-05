import React, { useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTANDO ICONS
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

import Teste from "./js/script.js"

import "../../App.css";
import "./css/home.css"
import "./js/script.js"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


function Home() {

  // const [active, setMode] = useState(false);
  // const ToggleMode = () => {
  //   setMode(!active);
  // }


  return (
    <div className="App" >

      {/* <div className={active ? "icon iconActive" : "icon"} >
        <div className="hamburguer hamburguerIcon"></div>
      </div>

      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItems">
            <li>HOME</li>
            <li>TOPICOS</li>
            <li>TOPICOS</li>
            <li>TOPICOS</li>
          </ul>
        </div>
      </div> */}

      <header className="App-header">

        {/* <div id="header">
          <nav id="nav">
            <button aria-label="Abrir Menu" className="btnHamburger" id="btn-mobile" aria-haspopup="true" aria-controls="menu"
              aria-expanded="true">
              <span id="hamburger"></span>
            </button>
            <ul id="menu" role="menu">
              <li><i className="fa-solid fa-house-user"></i><a href="/">Home </a></li>
              <li><i className="fa-solid fa-address-card"></i><a href="/">Sobre Mim</a></li>
              <li><i className="fa-solid fa-diagram-project"></i><a href="/">Projetos</a></li>
              <li><i className="fa-solid fa-message"></i><a href="/">Entre em Contato</a></li>
            </ul>
          </nav>
        </div> */}



        <img src="https://images6.alphacoders.com/108/1082090.jpg" className="bannerLogo" alt="logo" />


        <Slider {...settings}>
          <div className="slide_Noticias">
            <h3>Ransomware disfarçado de arquivo para Minecraft!</h3>
            <img src="https://w.wallha.com/ws/13/wazWHeP1.jpg" />
            <p>De acordo com o relatório, o ransomware está disfarçado de um arquivo de texto contendo.... ver mais</p>
          </div>
          <div>
            <h3>2SSS</h3>
          </div>
          <div>
            <h3>3SS</h3>
          </div>
          <div>
            <h3>4SSS</h3>
          </div>
          <div>
            <h3>5SS</h3>
          </div>
          <div>
            <h3>6SS</h3>
          </div>
        </Slider>


        <div className="cont-title">
          <img src="http://127.0.0.1:5501/frontend/pages/Home/img/output-onlinepngtools.png" className="iconCreeper" alt="creeperIcone" />
          <h1>RENASCRAFT</h1>
          {/* <img src="http://127.0.0.1:5501/frontend/pages/Home/img/output-onlinepngtools.png" className="iconCreeper" alt="creeperIcone" /> */}

          <div className="cont-btn-NQuestion">
            <IoMdAdd className="btnNQuestion" />
          </div>
        </div>


      </header>


      <main className="conteudo">

        <div className="last-questions">

          {/* TITULO DA PÁGINA */}
          <div className="title">
            <h1>Ultimas Perguntas!</h1>
          </div>

          <div className="cont-card-questions">

            <div className="question">

              <div className="header-question">
                <img src="https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg" />

                <div className="cont-title-question">
                  <h2>fula ala Dinossauro - <span>12/12/2012</span></h2>
                  <p>Tema: <span>DICAS</span></p>
                </div>


              </div>

              <div className="main-question">

                <input type="text" placeholder="Insira sua Resposta teu cabaço" />

                <div className="cont-icon">

                  <div className="icons-save-curtir">
                    <BsBookmark className="icons" />
                    <AiOutlineHeart className="icons" />
                  </div>

                  <div>
                    <BsFillChatLeftDotsFill className="verRespostas" onClick={Teste} />
                  </div>

                </div>

              </div>


              <div className="answer model">

                <div className="cont-title-modal-answer">
                  <h2>RESPOSTAS</h2>

                  <hr />
                </div>

                <div className="answer-card">


                  <div className="cards">

                    <div className="head-answer-card">
                      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/160745e3-9f8c-46b9-a326-cc9efff1e5aa/d7kxdcf-094a44e7-d459-47b6-8bf8-689a3a84d106.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2MDc0NWUzLTlmOGMtNDZiOS1hMzI2LWNjOWVmZmYxZTVhYVwvZDdreGRjZi0wOTRhNDRlNy1kNDU5LTQ3YjYtOGJmOC02ODlhM2E4NGQxMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l8kabRud63qyIqTQtuZ-7PjI9yOxibEgYdsK2zaUHgc" />

                      <div className="head-answer-title">
                        <h3>asdadadsa</h3>
                        <p>12/12/1222</p>
                      </div>
                    </div>
                    <span className="resposta">Lorem Ipsum is simply dummy text ots co</span>

                  </div>


                </div>


              </div>
            </div>


          </div>


        </div>

        <div className="cont-topicos">

          <div className="title">
            <h1>Tópicos!</h1>
          </div>

          <div className="topicos">

            <div className="container-cards-topics">

              <img src="http://127.0.0.1:5501/frontend/pages/Home/img/1.png" />

              <div className="topicos-title">
                <p>CRAFTS</p>
                <button>CONFERIR</button>
              </div>

            </div>

            <div className="container-cards-topics">

              <img src="http://127.0.0.1:5501/frontend/pages/Home/img/2.png" />

              <div className="topicos-title">
                <p>CRAFTS</p>
                <button>CONFERIR</button>

              </div>

            </div>

            <div className="container-cards-topics">

              <img src="http://127.0.0.1:5501/frontend/pages/Home/img/4.png" />

              <div className="topicos-title">
                <p>CRAFTS</p>
                <button>CONFERIR</button>

              </div>

            </div>

            <div className="container-cards-topics">

              <img src="http://127.0.0.1:5501/frontend/pages/Home/img/3.png" />

              <div className="topicos-title">
                <p>CRAFTS</p>
                <button>CONFERIR</button>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}


export default Home;
