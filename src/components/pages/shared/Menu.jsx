import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Imágenes temporales de Stitch
const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIbAtdkso2___-PTz3LjGqy1laCG5tc0iV1yweBoovAYa9gXi-vrawr5OnrECB-eRHuyvHZkfhLRQjQnAAYvuFxQ4SNBMMLyYv1Pmy5WqXQd95bH6rLVIvbi3uJ8U25BuFUHgcOaOTG1faPjiLdVTWIPHjb-vDu9QQ9P0ctz2_5Y8XCBVIB-lACfrHeIPOrMKIp4eyQBE74d2I6z-bR3d_UToY4A0ofHwgTQ7MC24vXMFgaV2n7y6v";
const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBaMpd7iOQddiInQEfsNPVj-YzAX5uncBJ904YKob5-Qujpmtrf6Q37ROVdQgMtTEAvNMMh7ctMyN_NzzzrA8HzsLl-Je_8pGihMAWolR7LP6P8WZM73jsqWSJsoA5fJ4dHF5M01kUqQFgC9T53MVU8koZQhluQ-iI9VhJS5Gt49hKgbf638bR8nkdyV0aLl5y_3N3b0n-W53TqpN6YqEdpyvabeK1mXqkaJh5Qf8HMTrXszv1S7zUC";

// ENLACES ACTUALIZADOS: Apuntan a rutas reales, no a hashes
const links = [
  { to: "/", label: "Inicio" },
  { to: "/#servicios", label: "Servicios" }, // Servicios sigue en Inicio.jsx
  { to: "/galeria", label: "Galería" },
  { to: "/#contacto", label: "Contacto" },
  { to: "/reservar-turno", label: "Reservar Turno" }, // Apunta a la nueva ruta
  { to: "/panel-barbero", label: "Panel Barbero" },
];

const Menu = () => {
  const { pathname, hash } = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    setMenuAbierto(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuAbierto]);

  const getLinkClass = (path, isMobile = false) => {
    const isHashLink = path.includes("#");
    let isActive = false;

    if (isHashLink) {
      isActive = pathname === "/" && hash === path.substring(1);
    } else {
      if (path === "/" && pathname === "/" && hash === "") {
        isActive = true;
      } else {
        isActive = pathname === path && hash === "";
      }
    }

    return `font-label-lg text-label-lg uppercase tracking-wider transition-colors ${
      isActive
        ? "text-primary bg-surface-container-high px-space-md py-space-sm rounded-lg"
        : `text-on-surface-variant hover:text-primary ${isMobile ? "block py-space-sm" : ""}`
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden sm:block w-full bg-secondary-container text-on-secondary-container px-gutter py-space-xs">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-xs font-label-sm text-label-sm tracking-widest uppercase">
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-sm">
                schedule
              </span>
              Martes a Sábado: 09:00 - 20:00 hs
            </span>
            <span className="hidden md:inline-block text-outline-variant">
              •
            </span>
            <span className="hidden md:flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-sm">
                location_on
              </span>
              Calle Mayor 42, Casco Histórico
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="text-primary-fixed">Atención Exclusiva</span>
            <span className="hidden md:inline-block text-outline-variant">
              •
            </span>
            <span className="hidden md:inline">+34 912 345 678</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-surface/90 backdrop-blur-xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.7)] relative z-50">
        <div className="h-20 max-w-[1240px] mx-auto px-gutter flex items-center justify-between">
          <Link to="/" className="flex items-center gap-space-md group">
            <img
              alt="Logo Barbería Tradicional"
              className="h-10 w-auto object-contain"
              src={LOGO_URL}
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-sm tracking-wide text-primary uppercase">
                La Barbería
              </span>
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant -mt-1">
                Est. 1928
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-space-lg">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} className={getLinkClass(to)}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-space-md">
            {/* BOTÓN ACTUALIZADO A LA NUEVA RUTA */}
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

            <button
              className="lg:hidden p-space-xs text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-3xl">
                {menuAbierto ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-surface-container-low shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          menuAbierto ? "max-h-[500px] border-b border-outline/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col py-space-md px-gutter gap-space-sm">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={getLinkClass(to, true)}>
              {label}
            </Link>
          ))}
          {/* BOTÓN MÓVIL ACTUALIZADO A LA NUEVA RUTA */}
          <Link
            to="/reservar-turno"
            className="sm:hidden mt-space-sm flex items-center justify-center px-space-md py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider font-bold rounded shadow-md"
          >
            Reservar Cita Ahora
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
