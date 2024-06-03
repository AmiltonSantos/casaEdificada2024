import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pix = () => {
  
  const numeroPix = '';

  const toastSuccess = () => toast.success('Pix cópiado com sucesso!');

  return (
    <div className="pixContainer">

            <h3></h3>
            <br></br>
            <div className="divPix" onClick={toastSuccess}>
              <p>Cópiar pix...</p>
              <ContentCopyIcon className="corIconPix" onClick={() => { navigator.clipboard.writeText(numeroPix) }} />
            </div>
            <h3> Pix E-mail: <span style={{color: 'red'}}></span></h3> 
            <h3>Banco </h3>
            <br></br>
            <hr />
            <img src="/taxaInscricao.png" className="pixTaxa" alt="" />
            
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

export default Pix;

