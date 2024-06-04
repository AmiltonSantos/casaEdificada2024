import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Grupowhatsapp = () => {

  const toastSuccess = () => toast.info('Url cópiada com sucesso!');

  const numeroGrupo = 'https://chat.whatsapp.com/I2zf1tiBoxmDednWb7rFi2';

  function toggleModal() {
    document.location.href = 'https://chat.whatsapp.com/I2zf1tiBoxmDednWb7rFi2';
  }

  return (
    <div className="whatsappContainer">
      <br></br>

      <h3>ENTRE NO GRUPO DO WHATSAPP DO CASA EDIFICADA 2024</h3>

      <br></br>
      <hr />
      <p className="newCustomer">
        Clique no botão abaixo...
      </p>

      <button className="ctaButtonTaxa" onClick={toggleModal}>Entre no Grupo do WhatsApp</button>

      <br></br>
      <br></br>
      
      <p className="newCustomer">
        Cópie e cole no navegador do seu celular...
      </p>

      <div className="input-wrapper" onClick={toastSuccess}>
        <input
          type="text"
          id="name"
          style={{
            width: '85%', 
            height: '30px', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            textAlign: 'center'
          }} 
          value='https://chat.whatsapp.com/I2zf1tiBoxmDednWb7rFi2'
        />
         <ContentCopyIcon className="corIconPix" onClick={() => { navigator.clipboard.writeText(numeroGrupo) }} />
      </div>


      <br></br>
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
};

export default Grupowhatsapp;

