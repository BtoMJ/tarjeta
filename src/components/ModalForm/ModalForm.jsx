import Contact from '../Contact/Contact';
import './ModalForm.css'

const ModalForm = () => {

     function close(){
        document.getElementById("modal-form").style.display='none';
    }

    return(
        <div className='modal-form-container' id='modal-form' >

            <div className='form-content animate__animated animate__bounceIn'>

                <button onClick={close} className="close">&times;</button>
                <Contact />

            </div>

        </div>
    )
}

export default ModalForm;