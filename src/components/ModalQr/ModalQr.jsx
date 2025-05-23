import './ModalQr.css';

const ModalQr = () => {

     function close(){
        document.getElementById("modal-qr").style.display='none';
    }

    return(
        <div className='modal-qr-container' id='modal-qr' >

            <div className='content animate__animated animate__bounceIn'>

                <button onClick={close} className="close">&times;</button>
                <div className='qr'></div>
                <p>Escanea el QR por favor</p>

            </div>

        </div>
    )
}

export default ModalQr;