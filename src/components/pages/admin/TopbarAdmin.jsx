import { LOGO_URL, PERFIL_URL } from './adminData';

const TopbarAdmin = ({ onAbrirMenu }) => {
  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl z-40 px-gutter flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-space-md">
        <button
          type="button"
          className="lg:hidden p-space-xs text-on-surface-variant hover:text-primary transition-colors"
          onClick={onAbrirMenu}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <img alt="Logo Barbería Tradicional" className="h-6 w-auto object-contain" src={LOGO_URL} />
        <span className="hidden sm:inline font-label-lg text-label-lg uppercase tracking-wider text-outline">
          Panel Operativo
        </span>
      </div>

      <div className="flex items-center gap-space-md">
        <button
          type="button"
          title="Notificaciones"
          className="p-space-xs text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button
          type="button"
          title="Configuración"
          className="p-space-xs text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        <img alt="Perfil" className="w-8 h-8 rounded-full object-cover" src={PERFIL_URL} />
      </div>
    </header>
  );
};

export default TopbarAdmin;