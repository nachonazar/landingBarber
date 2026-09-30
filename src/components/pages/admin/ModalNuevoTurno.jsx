import { useEffect, useState } from 'react';
import { BARBEROS_OPCIONES, SENA_MANUAL, SERVICIOS, formatoARS } from './adminData';

const FORM_INICIAL = {
  nombre: '',
  telefono: '',
  hora: '16:00',
  servicioId: SERVICIOS[0].id,
  barberoNombre: BARBEROS_OPCIONES[0].nombre,
  sena: 'cobrada',
};

const claseCampo =
  'w-full bg-surface-container-highest text-on-surface px-space-md py-2 rounded-lg font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary';
const claseLabel = 'block font-label-md text-label-md text-outline uppercase mb-1';

const ModalNuevoTurno = ({ abierto, onCerrar, onCrear }) => {
  const [form, setForm] = useState(FORM_INICIAL);

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!abierto) return undefined;
    const alPresionar = (e) => {
      if (e.key === 'Escape') onCerrar();
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  const actualizar = (campo) => (e) => setForm((prev) => ({ ...prev, [campo]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const servicio = SERVICIOS.find((s) => s.id === form.servicioId);
    const barbero = BARBEROS_OPCIONES.find((b) => b.nombre === form.barberoNombre);
    onCrear({ ...form, servicio, barbero });
    setForm(FORM_INICIAL);
  };

  return (
    <div
      className="fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-[60] flex items-center justify-center p-space-md"
      onClick={onCerrar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-modal-turno"
        className="bg-surface-container-low max-w-lg w-full max-h-full overflow-y-auto rounded-xl p-space-xl shadow-2xl relative flex flex-col gap-space-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-2xl">add_task</span>
            <h3 id="titulo-modal-turno" className="font-headline-sm text-headline-sm text-on-surface">
              Agendar Turno Manual
            </h3>
          </div>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="text-outline hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="turno-nombre" className={claseLabel}>
              Nombre Completo del Cliente
            </label>
            <input
              id="turno-nombre"
              type="text"
              required
              value={form.nombre}
              onChange={actualizar('nombre')}
              placeholder="Ej: Santiago Del Carril"
              className={claseCampo}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label htmlFor="turno-telefono" className={claseLabel}>
                Teléfono (WhatsApp)
              </label>
              <input
                id="turno-telefono"
                type="tel"
                required
                value={form.telefono}
                onChange={actualizar('telefono')}
                placeholder="+54 9 381 ..."
                className={claseCampo}
              />
            </div>
            <div>
              <label htmlFor="turno-hora" className={claseLabel}>
                Hora de Cita
              </label>
              <input
                id="turno-hora"
                type="time"
                required
                value={form.hora}
                onChange={actualizar('hora')}
                className={claseCampo}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label htmlFor="turno-servicio" className={claseLabel}>
                Servicio
              </label>
              <select
                id="turno-servicio"
                value={form.servicioId}
                onChange={actualizar('servicioId')}
                className={claseCampo}
              >
                {SERVICIOS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nombre} ({formatoARS(s.precio)})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="turno-barbero" className={claseLabel}>
                Barbero Asignado
              </label>
              <select
                id="turno-barbero"
                value={form.barberoNombre}
                onChange={actualizar('barberoNombre')}
                className={claseCampo}
              >
                {BARBEROS_OPCIONES.map((b) => (
                  <option key={b.nombre} value={b.nombre}>
                    {b.nombre} ({b.sillon})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <span className={claseLabel}>Estado de Seña</span>
            <div className="flex flex-wrap items-center gap-space-md pt-1">
              <label className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface cursor-pointer">
                <input
                  type="radio"
                  name="sena"
                  value="cobrada"
                  checked={form.sena === 'cobrada'}
                  onChange={actualizar('sena')}
                  className="accent-primary"
                />
                Seña Cobrada en Mano ({formatoARS(SENA_MANUAL)})
              </label>
              <label className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface cursor-pointer">
                <input
                  type="radio"
                  name="sena"
                  value="pendiente"
                  checked={form.sena === 'pendiente'}
                  onChange={actualizar('sena')}
                  className="accent-primary"
                />
                Pendiente Link MP
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-space-sm pt-space-md">
            <button
              type="button"
              onClick={onCerrar}
              className="px-space-lg py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-space-lg py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold shadow-lg hover:bg-primary-fixed-dim transition-all"
            >
              Confirmar e Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalNuevoTurno;