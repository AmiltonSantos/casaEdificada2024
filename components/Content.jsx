// Home Page component

const Content = () => {
  return (
    <div className="static">
      <video
        src="/casaedificada.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      <div className="relative z-10">
        {/* Conteúdo da página por cima do vídeo */}
      </div>
    </div>
  );
};

export default Content;
