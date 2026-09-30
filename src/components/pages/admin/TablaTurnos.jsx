import { useState } from 'react';

// ---------- Estilos por estado ----------
const ESTADOS = {
  'en-sillon': {
    label: 'En Sillón',
    icono: 'play_arrow',
    iconoClase: '',
    badge: 'bg-secondary-container text-on-secondary-container font-semibold',
    fila: 'bg-surface-container/40',
    hora: 'text-primary',
  },
  confirmado: {
    label: 'Confirmado',
    icono: 'done_all',
    iconoClase: 'text-primary',
    badge: 'bg-surface-container-highest text-on-surface font-semibold',
    fila: 'bg-surface-container-low',
    hora: 'text-on-surface',
  },
  pendiente: {
    label: 'Pendiente Seña',
    icono: 'pending',
    iconoClase: '',
    badge: 'bg-on-primary-fixed-variant text-primary-fixed font-semibold',
    fila: 'bg-surface-container-low',
    hora: 'text-on-surface',
  },
  completado: {
    label: 'Completado',
    icono: 'task_alt',
    iconoClase: '',
    badge: 'bg-surface-container-highest text-outline font-medium',
    fila: 'bg-surface-container-low opacity-75',
    hora: 'text-outline',
  },
};

// ---------- Estilos por tipo de pago ----------
const PAGO_ESTILO = {
  sena: { icono: 'verified', clase: 'text-primary', detalleClase: 'text-outline' },
  'sin-pagar': { icono: 'cancel', clase: 'text-error', detalleClase: 'text-outline' },
  cobrado: { icono: null, clase: 'text-outline', detalleClase: 'text-on-surface-variant' },
};

// ---------- Acciones por estado ----------
const TONOS = {
  primario: 'text-primary hover:bg-surface-container-highest',
  secundario: 'text-secondary hover:bg-surface-container-highest',
  error: 'text-error hover:bg-surface-container-highest',
  neutro: 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest',
  sutil: 'text-outline hover:text-on-surface hover:bg-surface-container-highest',
};

const OPCIONES = { tipo: 'opciones', icono: 'more_vert', titulo: 'Opciones', tono: 'sutil' };

const ACCIONES_POR_ESTADO = {
  'en-sillon': [
    { tipo: 'cobrar', icono: 'point_of_sale', titulo: 'Cobrar Saldo', tono: 'primario' },
    { tipo: 'completar', icono: 'check_circle', titulo: 'Completar Servicio', tono: 'neutro' },
    OPCIONES,
  ],
  confirmado: [
    { tipo: 'sentar', icono: 'chair', titulo: 'Sentar en Sillón', tono: 'secundario' },
    { tipo: 'reprogramar', icono: 'update', titulo: 'Reprogramar', tono: 'neutro' },
    OPCIONES,
  ],
  pendiente: [
    { tipo: 'recordatorio', icono: 'send', titulo: 'Enviar recordatorio WhatsApp', tono: 'primario' },
    { tipo: 'cancelar', icono: 'block', titulo: 'Cancelar Turno', tono: 'error' },
    OPCIONES,
  ],
  completado: [{ tipo: 'recibo', icono: 'receipt_long', titulo: 'Ver Recibo / Ficha', tono: 'sutil' }],
};

const ENCABEZADOS = [
  { label: 'Hora', clase: 'px-space-lg' },
  { label: 'Cliente', clase: 'px-space-md' },
  { label: 'Servicio', clase: 'px-space-md' },
  { label: 'Barbero', clase: 'px-space-md' },
  { label: 'Estado', clase: 'px-space-md' },
  { label: 'Pago / Seña', clase: 'px-space-md' },
  { label: 'Acciones', clase: 'px-space-lg text-right' },
];

// ---------- Componente ----------
const TablaTurnos = ({ turnos, onAccion }) => {
  const [busqueda, setBusqueda] = useState('');

  const texto = busqueda.trim().toLowerCase();
  const turnosVisibles = texto
    ? turnos.filter((t) =>
        [t.cliente, t.telefono, t.servicio, t.detalle, t.barbero].join(' ').toLowerCase().includes(texto),
      )
    : turnos;

  return (
    <div className="lg:col-span-8 flex flex-col gap-space-md">
      {/* Cabecera de la tabla */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low px-space-lg py-space-md rounded-t-xl">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary">schedule</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Agenda Operativa de Hoy</h2>
          <span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-space-xs py-0.5 rounded ml-space-xs">
            {turnos.length} Turnos
          </span>
        </div>

        <div className="flex items-center gap-space-sm">
          <div className="relative">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar cliente o barbero..."
              aria-label="Buscar turnos"
              className="bg-surface-container-highest text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded-lg px-space-md py-1.5 pl-8 focus:outline-none focus:ring-1 focus:ring-primary w-52 sm:w-64"
            />
            <span className="material-symbols-outlined text-outline absolute left-2 top-2 text-sm">search</span>
          </div>
          <button
            type="button"
            title="Filtrar"
            className="p-1.5 text-on-surface-variant hover:text-primary transition-colors bg-surface-container-highest rounded-lg"
          >
            <span className="material-symbols-outlined text-base">tune</span>
          </button>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-surface-container-low rounded-b-xl shadow-xl overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-high/60 text-outline font-label-md text-label-md uppercase tracking-wider">
              {ENCABEZADOS.map(({ label, clase }) => (
                <th key={label} className={`py-space-md ${clase}`}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {turnosVisibles.length === 0 && (
              <tr>
                <td colSpan={ENCABEZADOS.length} className="py-space-xl px-space-lg text-center text-outline font-body-sm text-body-sm">
                  No hay turnos que coincidan con la búsqueda.
                </td>
              </tr>
            )}

            {turnosVisibles.map((turno) => {
              const estado = ESTADOS[turno.estado];
              const pago = PAGO_ESTILO[turno.pago.tipo];
              const acciones = ACCIONES_POR_ESTADO[turno.estado];

              return (
                <tr key={turno.id} className={`hover:bg-surface-container transition-colors group ${estado.fila}`}>
                  {/* Hora */}
                  <td className="py-space-md px-space-lg whitespace-nowrap">
                    <span className={`font-headline-sm text-headline-sm font-semibold ${estado.hora}`}>
                      {turno.hora}
                    </span>
                    <span className={`block font-label-sm text-label-sm ${turno.horaSubClase}`}>{turno.horaSub}</span>
                  </td>

                  {/* Cliente */}
                  <td className="py-space-md px-space-md whitespace-nowrap">
                    <div className="flex items-center gap-space-sm">
                      {turno.avatar ? (
                        <img
                          alt={turno.cliente}
                          src={turno.avatar}
                          className={`w-9 h-9 rounded-full object-cover ${turno.estado === 'completado' ? 'grayscale' : ''}`}
                        />
                      ) : (
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${turno.avatarClase}`}
                        >
                          {turno.iniciales}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                          {turno.cliente}
                        </span>
                        {turno.whatsapp ? (
                          <a
                            href={`https://wa.me/${turno.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="font-body-sm text-body-sm text-outline hover:text-primary flex items-center gap-0.5"
                          >
                            <span className="material-symbols-outlined text-xs text-primary">chat</span>
                            {turno.telefono}
                          </a>
                        ) : (
                          <span className="font-body-sm text-body-sm text-outline">{turno.telefono}</span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Servicio */}
                  <td className="py-space-md px-space-md whitespace-nowrap">
                    <span className="font-body-md text-body-md text-on-surface block font-medium">{turno.servicio}</span>
                    <span className="font-label-sm text-label-sm text-outline">{turno.detalle}</span>
                  </td>

                  {/* Barbero */}
                  <td className="py-space-md px-space-md whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${turno.barberoDot}`}></span>
                      <span className="font-body-sm text-body-sm text-on-surface">{turno.barbero}</span>
                    </div>
                  </td>

                  {/* Estado */}
                  <td className="py-space-md px-space-md whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-space-sm py-1 rounded-full font-label-sm text-label-sm ${estado.badge}`}
                    >
                      <span className={`material-symbols-outlined text-xs ${estado.iconoClase}`}>{estado.icono}</span>
                      {estado.label}
                    </span>
                  </td>

                  {/* Pago */}
                  <td className="py-space-md px-space-md whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className={`inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold ${pago.clase}`}>
                        {pago.icono && <span className="material-symbols-outlined text-xs">{pago.icono}</span>}
                        {turno.pago.titulo}
                      </span>
                      <span className={`font-body-sm text-body-sm ${pago.detalleClase}`}>{turno.pago.detalle}</span>
                    </div>
                  </td>

                  {/* Acciones */}
                  <td className="py-space-md px-space-lg whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-1">
                      {acciones.map(({ tipo, icono, titulo, tono }) => (
                        <button
                          key={tipo}
                          type="button"
                          title={titulo}
                          aria-label={titulo}
                          onClick={() => onAccion(tipo, turno)}
                          className={`p-1.5 rounded-lg transition-colors ${TONOS[tono]}`}
                        >
                          <span className="material-symbols-outlined text-base">{icono}</span>
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Resumen / paginación */}
      <div className="flex items-center justify-between px-space-md py-space-sm text-body-sm font-body-sm text-outline">
        <span>
          Mostrando {turnosVisibles.length} de {turnos.length} turnos registrados para hoy
        </span>
        <div className="flex items-center gap-space-xs">
          {/* TODO: conectar la paginación cuando los turnos vengan del backend */}
          <button
            type="button"
            disabled
            className="px-space-md py-1 bg-surface-container-low rounded font-label-md text-label-md text-on-surface-variant disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            type="button"
            disabled
            className="px-space-md py-1 bg-surface-container-highest rounded font-label-md text-label-md text-on-surface disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablaTurnos;