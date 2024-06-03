// Home Page component

const Content = () => {
  return (
    
    
      <div className="contentContainer">
      <div className="relative">

        <video 
          src="/casaedificada.mp4" 
          autoPlay 
          loop 
          muted
          className="absolute w-full h-full object-cover"
        />

        <div className="relative z-10">
          {/* Conteúdo da página por cima do vídeo */}
      </div>

      </div>
      <img className="coverImage" src="/the-hunch-mobile.png" alt="" />
      <div className="dummyText">
        <p>
          <span>EM 2024</span>
        </p>
        <h1>CASA EDIFICADA</h1>
        <p>Venha e participe!</p>
      </div>
    </div>
  );
};

export default Content;
