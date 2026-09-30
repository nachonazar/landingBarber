import { TURNO_INMINENTE } from './adminData';

const TurnoInminente = () => {
  const turno = TURNO_INMINENTE;

  // TODO: conectar estos botones con tu backend / notificaciones
  const llamarASillon = () => alert(`Notificación enviada a ${turno.cliente}: ¡Tu sillón está listo!`);
  const posponer = () => alert('Turno pospuesto 10 minutos');

  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary-container"></div>

      <div className="flex items-center justify-between mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary animate-bounce text-xl">notifications_active</span>
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
            Turno Inminente
          </span>
        </div>
        <span className="bg-primary/10 text-primary px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold">
          {turno.hora}
        </span>
      </div>

      <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <img alt={turno.cliente} className="w-11 h-11 rounded-full object-cover" src={turno.avatar} />
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-on-surface font-semibold">{turno.cliente}</span>
              <span className="font-body-sm text-body-sm text-outline">{turno.descripcion}</span>
            </div>
          </div>
          <a
            href={`https://wa.me/${turno.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            title="Avisar por WhatsApp"
            className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
          </a>
        </div>

        <div className="flex flex-col gap-1 pt-space-xs">
          <div className="flex justify-between font-body-sm text-body-sm">
            <span className="text-outline">Servicio:</span>
            <span className="text-on-surface font-medium">{turno.servicio}</span>
          </div>
          <div className="flex justify-between font-body-sm text-body-sm">
            <span className="text-outline">Barbero:</span>
            <span className="text-primary font-medium">{turno.barbero}</span>
          </div>
          <div className="flex justify-between font-body-sm text-body-sm">
            <span className="text-outline">Estado Saldo:</span>
            <span className="text-secondary font-semibold">{turno.saldo}</span>
          </div>
        </div>
      </div>

      <div className="mt-space-md flex gap-space-sm">
        <button
          type="button"
          onClick={llamarASillon}
          className="flex-1 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold text-center hover:bg-primary-fixed-dim transition-all shadow-md"
        >
          Llamar a Sillón
        </button>
        <button
          type="button"
          onClick={posponer}
          className="px-space-md py-2 bg-surface-container-highest text-on-surface-variant hover:text-on-surface rounded-lg font-label-md text-label-md transition-all"
        >
          +10 min
        </button>
      </div>
    </div>
  );
};

export default TurnoInminente;