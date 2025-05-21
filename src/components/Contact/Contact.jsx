// import emailjs from '@emailjs/browser';
// import ApiKey from '../../ApiKey';
import 'animate.css';
import './Contact.css';

const Contact = () => {

    const enviarCorreo =(e) => {

        e.preventDefault();

        // emailjs.sendForm(ApiKey.SERVICE_ID,ApiKey.TEMPLATE_ID, '#my-form',ApiKey.USER_ID)
        // .then(function(response) {
        //   console.log('SUCCESS!', response.status, response.text);
        //   notify();
        //   document.getElementById('name').value = ''
        //   document.getElementById('tel').value = ''
        //   document.getElementById('email').value = ''
        //   document.getElementById('message').value = ''
        //   setTimeout(hideModal, 1500);
        
        // }, function(err) {
        //   console.log('FAILED...', err);
        //   notifyError();
        // });

    }

    const clean = () => {

        const inputName = document.getElementById('name');
        const inputTel = document.getElementById('tel');
        const inputEmail = document.getElementById('email');
        const message = document.getElementById('message');


        inputName.value = inputTel.value = inputEmail.value = message.value = '';
    }

    return(
        <div className='form-container'>

            <p>
                Si tienes dudas o comentarios, házmelo saber. Déjame tus datos
                y con gusto me comunico.
            </p>

            <form className='form' id="my-form" name="my-form" onSubmit = {enviarCorreo}>

                <input 
                    type="text" 
                    className='animate__animated animate__backInLeft' 
                    name="name" 
                    id="name" 
                    placeholder="Nombre" 
                    required
                />

                <input 
                    type="tel" 
                    className='animate__animated animate__backInRight' 
                    name="tel" 
                    id="tel" 
                    placeholder="Teléfono" 
                    maxlength="10" 
                    required
                />

                <input 
                    type="email" 
                    className='animate__animated animate__backInLeft' 
                    name="email" 
                    id="email" 
                    placeholder="E-mail" 
                    required
                />

                <textarea 
                    className='animate__animated animate__backInLeft' 
                    name="message" 
                    id="message" 
                    placeholder="Mensaje"
                    required
                >
                </textarea>

                <div className='form-btn-container'>

                    <button 
                        className='btn-send animate__animated animate__animated animate__zoomIn'>
                        enviar
                    </button>

                    <button 
                        onClick={clean}
                        className='btn-send animate__animated animate__animated animate__zoomIn'>
                        limpiar
                    </button>

                </div>


            </form>

        </div>
    )
}

export default Contact;