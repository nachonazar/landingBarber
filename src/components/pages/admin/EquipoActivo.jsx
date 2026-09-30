import { BARBEROS_EQUIPO } from './adminData';

const EquipoActivo = () => {
  const ocupados = BARBEROS_EQUIPO.filter((b) => b.estado === 'ocupado').length;
  const libres = BARBEROS_EQUIPO.filter((b) => b.estado === 'libre').length;

  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-lg">content_cut</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Equipo en Turno Activo</h3>
        </div>
        <span className="font-label-sm text-label-sm text-outline">
          {ocupados} en sillón · {libres} libre{libres === 1 ? '' : 's'}
        </span>
      </div>

      <div className="flex flex-col gap-space-md">
        {BARBEROS_EQUIPO.map((barbero) => (
          <div
            key={barbero.id}
            className={`flex items-center justify-between gap-space-sm p-space-sm bg-surface-container rounded-lg ${
              barbero.estado === 'descanso' ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-center gap-space-sm">
              <div className="relative">
                {barbero.avatar ? (
                  <img alt={barbero.nombre} className="w-10 h-10 rounded-full object-cover" src={barbero.avatar} />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest text-outline flex items-center justify-center font-bold text-xs">
                    {barbero.iniciales}
                  </div>
                )}
                <span
                  className={`w-2.5 h-2.5 rounded-full absolute bottom-0 right-0 ring-2 ring-surface-container ${barbero.dot}`}
                ></span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-semibold leading-tight">
                  {barbero.nombre}
                </span>
                <span className="font-label-sm text-label-sm text-outline">{barbero.detalle}</span>
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              {barbero.badge && (
                <span
                  className={`px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold ${barbero.badgeClase}`}
                >
                  {barbero.badge}
                </span>
              )}
              <span className="font-body-sm text-body-sm text-outline">{barbero.nota}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipoActivo;