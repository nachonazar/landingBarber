import { Link, NavLink } from 'react-router-dom';

// Imágenes temporales de Stitch: descargalas a /public o /src/assets antes de publicar
const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCIbAtdkso2___-PTz3LjGqy1laCG5tc0iV1yweBoovAYa9gXi-vrawr5OnrECB-eRHuyvHZkfhLRQjQnAAYvuFxQ4SNBMMLyYv1Pmy5WqXQd95bH6rLVIvbi3uJ8U25BuFUHgcOaOTG1faPjiLdVTWIPHjb-vDu9QQ9P0ctz2_5Y8XCBVIB-lACfrHeIPOrMKIp4eyQBE74d2I6z-bR3d_UToY4A0ofHwgTQ7MC24vXMFgaV2n7y6v';
const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBaMpd7iOQddiInQEfsNPVj-YzAX5uncBJ904YKob5-Qujpmtrf6Q37ROVdQgMtTEAvNMMh7ctMyN_NzzzrA8HzsLl-Je_8pGihMAWolR7LP6P8WZM73jsqWSJsoA5fJ4dHF5M01kUqQFgC9T53MVU8koZQhluQ-iI9VhJS5Gt49hKgbf638bR8nkdyV0aLl5y_3N3b0n-W53TqpN6YqEdpyvabeK1mXqkaJh5Qf8HMTrXszv1S7zUC';

// Ajustá las rutas a las que tengas definidas en App.jsx
const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/servicios', label: 'Servicios' },
  { to: '/galeria', label: 'Galería' },
  { to: '/reservar-turno', label: 'Reservar Turno' },
  { to: '/panel-barbero', label: 'Panel Barbero' },
];

const navLinkClass = ({ isActive }) =>
  `font-label-lg text-label-lg uppercase tracking-wider transition-colors ${
    isActive
      ? 'text-primary bg-surface-container-high px-space-md py-space-sm rounded-lg'
      : 'text-on-surface-variant hover:text-primary'
  }`;

const Menu = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra superior de información */}
      <div className="w-full bg-secondary-container text-on-secondary-container px-gutter py-space-xs">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-xs font-label-sm text-label-sm tracking-widest uppercase">
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              Martes a Sábado: 09:00 - 20:00 hs
            </span>
            <span className="hidden md:inline-block text-outline-variant">•</span>
            <span className="hidden md:flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              Calle Mayor 42, Casco Histórico
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="text-primary-fixed">Atención Exclusiva con Cita Previa</span>
            <span className="hidden sm:inline-block text-outline-variant">•</span>
            <span className="hidden sm:inline">+34 912 345 678</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="w-full bg-surface/90 backdrop-blur-xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.7)]">
        <div className="h-20 max-w-[1240px] mx-auto px-gutter flex items-center justify-between">
          <Link to="/" className="flex items-center gap-space-md group">
            <img alt="Logo Barbería Tradicional" className="h-10 w-auto object-contain" src={LOGO_URL} />
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-sm tracking-wide text-primary uppercase">
                La Barbería
              </span>
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant -mt-1">
                Tradicional • Est. 1928
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-space-lg">
            {links.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-space-md">
            <Link
              to="/reservar-turno"
              className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider font-bold rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-primary transition-colors"
            >
              Reservar Cita
            </Link>
            <Link
              to="/mi-cuenta"
              title="Cuenta de Cliente"
              className="flex items-center gap-space-xs p-space-xs rounded-full hover:bg-surface-container-high transition-colors"
            >
              <img
                alt="Perfil"
                className="w-9 h-9 rounded-full object-cover shadow-[0_0_0_2px_rgba(212,175,55,0.4)]"
                src={AVATAR_URL}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;