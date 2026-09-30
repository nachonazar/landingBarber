import { useEffect, useState } from 'react';
import { FILTROS_PERIODO } from './adminData';

const capitalizar = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);

const formatearFecha = (fecha) => {
  const dia = fecha.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const hora = fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false });
  return `${capitalizar(dia)} · ${hora}`;
};

const EncabezadoPanel = ({ filtro, onCambiarFiltro, onNuevoTurno }) => {
  const [ahora, setAhora] = useState(() => new Date());

  // Actualiza la fecha y la hora cada minuto
  useEffect(() => {
    const id = setInterval(() => setAhora(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg bg-surface-container-low p-space-lg rounded-xl shadow-md relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col gap-space-xs z-10">
        <div className="flex items-center gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            Operación en Vivo
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-outline">Sede Central Recoleta</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Panel de Control · Barbería Central
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-sm text-outline">calendar_today</span>
          <span>{formatearFecha(ahora)}</span>
        </p>
      </div>

      {/* Controles rápidos */}
      <div className="flex flex-wrap items-center gap-space-md z-10">
        <div className="flex bg-surface-container-highest p-space-xs rounded-lg" role="tablist">
          {FILTROS_PERIODO.map((opcion) => {
            const activo = opcion === filtro;
            return (
              <button
                key={opcion}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => onCambiarFiltro(opcion)}
                className={`px-space-md py-1.5 rounded-md font-label-md text-label-md transition-all ${
                  activo
                    ? 'bg-primary-container text-on-primary-container shadow-sm font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {opcion}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNuevoTurno}
          className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-2.5 rounded-lg font-label-lg text-label-lg font-bold shadow-lg hover:bg-primary-fixed-dim transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
          <span>Nuevo Turno Manual</span>
        </button>
      </div>
    </div>
  );
};

export default EncabezadoPanel;