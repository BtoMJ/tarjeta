import { MdEmail, MdPhoneForwarded } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook, FaBehance , FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ModalForm from "../ModalForm/ModalForm";
import './Social.css';

const Social = () => {

    const visible = () => {
        const form = document.getElementById('modal-form');
        form.style.display = 'flex';
    }

    return(
        <nav className='social-container'>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href="tel:+524761037311" target='blank'>
                    <MdPhoneForwarded className="social-icon"/>
                </a>
            </button>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a>
                    <MdEmail className="social-icon" onClick={visible}/>
                </a>
            </button>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href='https://wa.me/524761037311' target='blank'>
                    <FaWhatsapp className="social-icon"/>
                </a>
            </button>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href='https://www.behance.net/danielMena17' target='blank'>
                    <FaBehance  className="social-icon"/>
                </a>
            </button>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href='https://www.linkedin.com/in/daniel-mena-jaime/' target='blank'>
                    <FaLinkedinIn className="social-icon"/>
                </a>
            </button>
            
            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href='https://www.facebook.com/profile.php?id=61553164706670' target='blank'>
                    <FaFacebook className="social-icon"/>
                </a>
            </button>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href='https://www.instagram.com/danielo_mena/' target='blank'>
                    <FaInstagram className="social-icon"/>
                </a>
            </button>

            <button className="btn-social-icon animate__animated animate__fadeInUp">
                <a  href='https://twitter.com/DanielO1384' target='blank'>
                    <FaXTwitter className="social-icon"/>
                </a>
            </button>

            <ModalForm />

        </nav>
    )
}

export default Social;