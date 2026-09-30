import { NavLink } from 'react-router-dom';
import { ENLACES_ADMIN, LOGO_URL, PERFIL_URL } from './adminData';

const claseEnlace = ({ isActive }) =>
  `flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-all ${
    isActive
      ? 'bg-primary-container text-on-primary-container font-bold'
      : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
  }`;

const SidebarAdmin = ({ abierto, onCerrar }) => {
  return (
    <>
      {/* Fondo oscuro para cerrar el menú en mobile */}
      {abierto && (
        <div
          className="fixed inset-0 bg-surface-container-lowest/70 z-[45] lg:hidden"
          onClick={onCerrar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between py-space-lg px-space-md shadow-[4px_0_24px_rgba(0,0,0,0.6)] transition-transform duration-300 lg:translate-x-0 ${
          abierto ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-space-xl">
          <div className="flex items-center gap-space-md px-space-sm">
            <img alt="Logo Barbería Tradicional" className="h-8 w-auto object-contain" src={LOGO_URL} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary uppercase leading-tight">
                La Barbería
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                Panel de Control
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-space-xs">
            {ENLACES_ADMIN.map(({ to, icono, label, end }) => (
              <NavLink key={to} to={to} end={end} className={claseEnlace} onClick={onCerrar}>
                <span className="material-symbols-outlined text-lg">{icono}</span>
                <span className="font-label-lg text-label-lg">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md">
          <img
            alt="Perfil del barbero"
            className="w-10 h-10 rounded-full object-cover shadow-[0_0_0_2px_rgba(212,175,55,0.4)]"
            src={PERFIL_URL}
          />
          <div className="flex flex-col overflow-hidden">
            <span className="font-title-md text-title-md text-on-surface truncate">Maestro Barbero</span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">En Servicio</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarAdmin;