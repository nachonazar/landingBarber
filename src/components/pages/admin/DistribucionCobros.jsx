import { COBROS_HOY } from './adminData';

const TRAZO_CIRCULO = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831';

const DistribucionCobros = () => {
  const { total, mercadoPago, efectivo } = COBROS_HOY;

  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
        Distribución de Cobros (Hoy)
      </span>

      <div className="flex items-center justify-between pt-space-xs">
        <div className="flex flex-col">
          <span className="font-headline-md text-headline-md text-on-surface font-bold">{total}</span>
          <span className="font-body-sm text-body-sm text-primary">Recaudado hasta ahora</span>
        </div>

        <div className="w-14 h-14 relative flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
            <path
              className="text-surface-container-highest"
              d={TRAZO_CIRCULO}
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
            />
            <path
              className="text-primary"
              d={TRAZO_CIRCULO}
              fill="none"
              stroke="currentColor"
              strokeDasharray={`${mercadoPago}, 100`}
              strokeLinecap="round"
              strokeWidth="3.5"
            />
          </svg>
          <span className="absolute text-label-sm font-label-sm text-on-surface font-bold">{mercadoPago}%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>Mercado Pago: {mercadoPago}%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span>Efectivo local: {efectivo}%</span>
        </div>
      </div>
    </div>
  );
};

export default DistribucionCobros;