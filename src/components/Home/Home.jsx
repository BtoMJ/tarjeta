import { FaShareAlt, FaQrcode } from "react-icons/fa";
import Social from '../Social/Social';
import logo from '../../assets/Logo.png';
import 'animate.css';
import './Home.css';

const Home = () => {

    const nativeShare = function() {

        if (navigator.share) {

            navigator.share({ 
                title: "Tarjeta Digital", 
                text: "Comparte tu tarjeta", 
                url: "daniel-dev.tunegocio.pro" 
            })
        }

        return false;
    } 

    return(
        <section className="home-container">

            <header className='header-container'>

                <div className="share-container">
                    <FaShareAlt className="icon-share" onClick={nativeShare}/>
                    <FaQrcode className="icon-share"/>
                </div>

                <div className="header-name">
                    <h1>Daniel Mena</h1>
                    <h4>desarrollador web</h4>
                </div>

            </header>
            
            <main className='main-container'>

                <div className='logo-container'>
                    <img src={logo} alt='logo' />
                </div>

                <Social />

                <a 
                    className='animate__animated animate__rubberBand' 
                    href='https://portfolio-snowy-mu-62.vercel.app/' 
                    target="blank">
                    www.portafolio.com
                </a>

                <p 
                    className='animate__animated animate__flash'>
                    da click para verlo
                </p>

            </main>

        </section>
    )
}

export default Home;