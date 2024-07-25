import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';
import { IMaskInput } from "react-imask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ openModal, closeModal, modalIsOpen }) => {
  // set state to open/close modal
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    if (isOpen === true) {
      //Link do grupo do whatsapp
      document.location.href = '';
    }
  }

  const toastSuccess = () => toast.success('Pix cópiado com sucesso!');

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  `

  function LoadingComponent() {
    return <Container className="App">
      <h1>Enviando...</h1>
      <BeatLoader loading={setLoading} size={60} color={"#36d7b7"} />
    </Container>
  }

  const numeroPagamento = '00020101021126650014br.gov.bcb.pix0114+556299608300402251* - Lote Casa Edificada 5204000053039865406100.005802BR5925ALEXSANDRA RODRIGUES FREI6009SAO PAULO622905251HWT4R5A4ARYXTBWMHK9SW6A4630414C6';

  // set state to form data
  const [homem, setHomem] = useState("");
  const [mulher, setMulher] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [igreja, setIgreja] = useState("");

  // Success message
  const [successMessage, setSuccessMessage] = useState(null);
  const [registerMessage, setregisterMessage] = useState(null);

  // Error
  const [error, setError] = useState("");

  // Post request to local api which is then sent to the provided api on the server side

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar Whatsa
    if (whatsapp.length < 14) {
      setError("Erro! São 11 números o WhatsApp");
      setWhatsapp("");
      return;
    }

    setError("");
    setLoading(true);

    try {
      /* Usando o -> https://sheetdb.io */
      // const response = await fetch("https://sheetdb.io/api/v1/9i0ongodfdtta", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     data: [
      //       {
      //         id: "=ROW()-1",
      //         name,
      //         idade,
      //         whatsapp,
      //         igreja,
      //         datainscricao: (new Date().toLocaleString()).toString().replace(',', '')
      //       },
      //     ],
      //   }),
      // });

      /* Usando o -> https://sheet.best/api/sheets  
      https://sheet.best/api/sheets/240f5049-3487-451b-97fb-809f1bdbb80d
      */
      const response = await fetch("https://sheetdb.io/api/v1/6hwujluxee6pr", {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "=ROW()-1",
          homem,
          mulher,
          whatsapp,
          igreja,
          datainscricao: (new Date().toLocaleString()).toString().replace(',', '')
        }),
      });

      setLoading(false);

      const data = await response.json();

      if (response.ok) {

        setSuccessMessage(`${data.created === 1 ? 'Cadastrado com sucesso' : 'Error ao cadastrar'}`); //usado no https://sheetdb.io
        //setSuccessMessage(data[0].name + ' Cadastrado com sucesso!'); //usado no https://sheet.best/api/sheets 
        setregisterMessage(
          `Cadastrado com sucesso!`
        );

        setTimeout(() => closeModal(), setTimeout(() => toggleModal(), 200));

      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }

    // clearing input data
    setHomem("");
    setMulher("");
    setWhatsapp("");
    setIgreja("");

  };

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <Link href="/">
          <img src="/logo.png" className="logo" alt="" />
        </Link>
      </div>
      <div className="CTA">
        <button className="signup" onClick={openModal}>
          Inscreva-se
        </button>
        <Modal
          className="modal"
          overlayClassName="Overlay"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {loading && <LoadingComponent />}
          <div className="modalContainer">
            <h3 className="loginHeader">Inscreva-se para o Evento</h3>
            <p className="newCustomer">
              Em 2024 aguarde...!
            </p>
            <hr />
            <form className="loginForm" onSubmit={handleSubmit}>
              <label>Casal</label> <br />
              <input
                type="text"
                id="homem"
                value={homem}
                placeholder="Homem..."
                required
                onChange={(e) => setHomem(e.target.value)}
              />
              <input
                type="text"
                id="mulher"
                value={mulher}
                placeholder="Mulher..."
                required
                onChange={(e) => setMulher(e.target.value)}
              />
              <label>Whatsapp</label> <br />
              <IMaskInput
                mask="(00) 00000-0000"
                value={whatsapp}
                placeholder="(00) 00000-0000"
                onChange={(e) => setWhatsapp(e.target.value)}
              />

              <br />
              <label>Igreja / Congregação</label> <br />
              <input
                type="text"
                id="igreja"
                value={igreja}
                placeholder="Onde congrega"
                required
                onChange={(e) => setIgreja(e.target.value)}
              />
              <button type="submit">Enviar</button>
            </form>
            <div className="closeModal" onClick={closeModal}>
              &#x2715;
            </div>
            {registerMessage && (
              <p className="welcomeMessage">{registerMessage}</p>
            )}

            {error && <p className="errorMessage">{error}</p>}
            {successMessage && (
              <p className="welcomeMessage">{successMessage}</p>
            )}
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={isOpen}
          onRequestClose={toggleModal}
          ariaHideApp={false}
        >
          <div className="modalContainer">
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
        </Modal>
      </div>
    </div>
  );
};

export default Header;
