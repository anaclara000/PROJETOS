// import logo from './logo.svg';
import './css/login.css';

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


function App() {

    var btnLogar = document.querySelector('.button-login')
    

    return (
        <div className="container">

            <div id="container">

                <div className="login-cont">

                    <div className="cont-login">
                        <img className="img-logo" src="http://127.0.0.1:5501/frontend/Login/img/IMAGES/Minecraft-2-icon.png" alt="" />

                            <div className="cont-title">
                                <h1>Login Fórum</h1>

                            </div>
                            <form>

                                <div className="single-input">
                                    <input type="text" className="input" id="user" required />
                                    <label for="user">Usuario</label>
                                </div>
                                <div className="single-input">
                                    <input type="password" className="input" id="senha" required />
                                    <label for="senha">Senha</label>
                                </div>

                                <p className="erros modal">Credenciais inválidas</p>
                            </form>



                            <div className="esquece-cont">
                                <a href="">Esqueceu a Senha?</a>
                            </div>

                            <div className="cont-btn-logar">
                                <button className="button-login">Logar
                                    <img className="img-btn" src="http://127.0.0.1:5501/frontend/Login/img/creeper%20face.png" alt="" />
                                </button>
                            </div>


                            <div className="outros-meios-cadastros">

                                <div>

                                    <p>ou Faça Login com:</p>
                                </div>

                                <div className="cont-icons">
                                    <FcGoogle className='icons'/>

                                    <BsFacebook className='icons'/>

                                    <BsTwitter className='icons'/>
                                </div>


                            </div>


                            <div className="cadastrar-cont">
                                <a href="">Cadastrar Agora!</a>
                            </div>

                    </div>
                </div>

                <div className="cont-img-banner">
                    <img src="img/IMAGES/sla-removebg-preview.png" alt="" />

                </div>
            </div>


        </div>
    );
}



export default App;
