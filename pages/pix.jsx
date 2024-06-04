import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pix = () => {

  const numeroPagamento = '00020101021126650014br.gov.bcb.pix0114+556299608300402251* - Lote Casa Edificada 5204000053039865406100.005802BR5925ALEXSANDRA RODRIGUES FREI6009SAO PAULO622905251HWT4R5A4ARYXTBWMHK9SW6A4630414C6';

  const toastSuccess = () => toast.success('Pix cópiado com sucesso!');

  return (
    <div className="pixContainer">
      <div className="divPix" onClick={toastSuccess}>
        <p>Pix Copia e Cola: <b>(62) 99608-3004</b></p>
        <ContentCopyIcon className="corIconPix" onClick={() => { navigator.clipboard.writeText(numeroPagamento) }} />
      </div>
      <br></br>
      <textarea
        id="name"
        style={{
          width: '95%',
          height: '100px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          textAlign: 'center',
          padding: '3px'
        }}
        defaultValue='00020101021126650014br.gov.bcb.pix0114+556299608300402251* - Lote Casa Edificada 5204000053039865406100.005802BR5925ALEXSANDRA RODRIGUES FREI6009SAO PAULO622905251HWT4R5A4ARYXTBWMHK9SW6A4630414C6'
      />
      <br></br>
      <h4> ALESSANDRA RODRIGUES FREITAS ANDRADE <span style={{ color: 'red' }}></span></h4>
      <h4>BCO  C6 S.A </h4>
      <br></br>
      <hr />
      <img src="/taxaInscricao.jpg" className="pixTaxa" alt="" />
      
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
