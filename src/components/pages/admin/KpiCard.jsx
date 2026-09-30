const KpiCard = ({ kpi }) => {
  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between relative group hover:bg-surface-container transition-all">
      <div className="flex justify-between items-start mb-space-md">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">{kpi.titulo}</span>
          <div className="flex items-baseline gap-space-xs mt-space-xs">
            <span className={`${kpi.tamano} ${kpi.colorValor} font-bold leading-none`}>{kpi.valor}</span>
            {kpi.unidad && <span className="font-label-sm text-label-sm text-outline">{kpi.unidad}</span>}
          </div>
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${kpi.iconoBg} ${kpi.iconoColor}`}
        >
          <span className="material-symbols-outlined text-xl">{kpi.icono}</span>
        </div>
      </div>

      <div className="flex flex-col gap-space-xs pt-space-xs">
        <div className="flex justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          <span>{kpi.detalle}</span>
          <span className={`font-bold whitespace-nowrap ${kpi.variacionColor}`}>{kpi.variacion}</span>
        </div>
        <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${kpi.barra}`} style={{ width: `${kpi.progreso}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default KpiCard;