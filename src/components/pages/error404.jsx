import { Link } from 'react-router-dom';

const error404 = () => {
  return (
    <main className="relative min-h-screen bg-surface text-on-surface flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden selection:bg-primary selection:text-on-primary font-sans">
      
      {/* Patrón de líneas sutiles y resplandor atmosférico */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

      {/* Contenedor central estilizado */}
      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        
        {/* Isotipo / Poste de Barbero Tradicional Clásico en miniatura */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full bg-surface-container-low border border-primary/30 shadow-2xl flex items-center justify-center p-3">
            <span className="material-symbols-outlined text-3xl text-primary">
              content_cut
            </span>
          </div>
          {/* Badge del poste tradicional de barbero */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-red-700 via-neutral-100 to-blue-700 opacity-80 rotate-45 transform scale-150" />
          </div>
        </div>

        {/* Número 404 monumental */}
        <div className="relative select-none my-1">
          <h1 className="font-headline-xl text-8xl sm:text-9xl lg:text-[11rem] font-bold tracking-tight text-on-surface leading-none">
            4<span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-fixed via-primary to-secondary-container">0</span>4
          </h1>
          {/* Sutil halo tipográfico de fondo */}
          <span 
            aria-hidden="true" 
            className="absolute inset-0 font-headline-xl text-8xl sm:text-9xl lg:text-[11rem] font-bold tracking-tight text-primary/10 blur-xl leading-none -z-10"
          >
            404
          </span>
        </div>

        {/* Separador de navaja ornamental */}
        <div className="flex items-center justify-center gap-3 w-48 my-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary text-xs font-headline-sm tracking-widest uppercase">Est. 1928</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Titular y Metáfora */}
        <h2 className="font-headline-sm text-2xl sm:text-3xl text-on-surface font-normal mt-2 tracking-normal">
          Sillón Desocupado o <span className="italic text-primary">Corte Fuera de Lugar</span>
        </h2>

        {/* Mensaje sobrio */}
        <p className="mt-4 text-sm sm:text-base text-on-surface-variant max-w-lg leading-relaxed font-light">
          La página que busca ha sido retirada de nuestra agenda o nunca existió en el registro de la casa. Permítanos conducirlo nuevamente a un servicio impecable.
        </p>

        {/* Ficha de ayuda contextual rápida */}
        <div className="mt-6 px-4 py-2.5 rounded-lg bg-surface-container-low/80 border border-outline-variant/50 text-xs text-on-surface-variant flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">info</span>
          <span>Código de incidencia: <strong className="text-on-surface font-mono">ERR_TURNO_INEXISTENTE</strong></span>
        </div>

        {/* Botones de acción principales */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-highest border border-outline-variant/80 text-on-surface font-medium text-sm transition-all duration-200 shadow-md group"
          >
            <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            <span>Volver al Inicio</span>
          </Link>

          <Link
            to="/reservar-turno"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-container hover:from-primary-fixed hover:to-primary text-on-primary-fixed font-semibold text-sm tracking-wide shadow-lg shadow-primary/20 transition-all duration-300 transform active:scale-[0.99] group"
          >
            <span className="material-symbols-outlined text-base text-on-primary-fixed">
              calendar_month
            </span>
            <span>Agendar Turno</span>
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              north_east
            </span>
          </Link>

        </div>

        {/* Enlace discreto de asistencia directa */}
        <div className="mt-10 pt-6 border-t border-outline-variant/30 w-full flex items-center justify-center gap-1.5 text-xs text-outline">
          <span>¿Necesita asistencia personal?</span>
          <Link 
            to="/#contacto" 
            className="text-primary hover:underline font-medium"
          >
            Contactar al Santuario
          </Link>
        </div>

      </div>
    </main>
  );
};

export default error404;