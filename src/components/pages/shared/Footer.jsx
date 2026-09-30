import { Link } from "react-router-dom";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIbAtdkso2___-PTz3LjGqy1laCG5tc0iV1yweBoovAYa9gXi-vrawr5OnrECB-eRHuyvHZkfhLRQjQnAAYvuFxQ4SNBMMLyYv1Pmy5WqXQd95bH6rLVIvbi3uJ8U25BuFUHgcOaOTG1faPjiLdVTWIPHjb-vDu9QQ9P0ctz2_5Y8XCBVIB-lACfrHeIPOrMKIp4eyQBE74d2I6z-bR3d_UToY4A0ofHwgTQ7MC24vXMFgaV2n7y6v";

// ENLACES ACTUALIZADOS
const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/#servicios", label: "Carta de Servicios & Precios" },
  { to: "/galeria", label: "Galería & Acabados" },
  { to: "/#contacto", label: "Ubicación & Contacto" },
  { to: "/reservar-turno", label: "Agenda tu Cita" }, // Apunta a la nueva ruta
];

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-space-2xl pb-space-xl shadow-[0_-4px_24px_rgba(0,0,0,0.8)]">
      <div className="max-w-[1240px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Logo Barbería Tradicional"
                className="h-8 w-auto object-contain"
                src={LOGO_URL}
              />
              <span className="font-headline-md text-headline-sm text-primary uppercase">
                La Barbería
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              El santuario del caballero contemporáneo. Ritos tradicionales de
              afeitado con navaja, paños calientes y corte de precisión
              artesanal en un entorno exclusivo de madera y cuero.
            </p>
            <div className="flex items-center gap-space-sm text-primary font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              Maestros Artesanos Titulados
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-wide uppercase">
              Navegación
            </span>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-wide uppercase">
              Horarios del Salón
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between py-space-xs">
                <span className="text-on-surface">Martes a Viernes</span>
                <span>09:30 - 20:30</span>
              </div>
              <div className="flex justify-between py-space-xs">
                <span className="text-on-surface">Sábados</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between py-space-xs">
                <span className="text-on-surface">Domingos y Lunes</span>
                <span className="text-primary-fixed">Cerrado (Descanso)</span>
              </div>
            </div>
            <div className="mt-space-sm">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-sm">
                  phone_in_talk
                </span>{" "}
                Recepción: 912 345 678
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-wide uppercase">
              Club de Caballeros
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Suscríbete al boletín artesanal para invitaciones privadas,
              cuidados de barba y turnos preferenciales.
            </p>
            <form
              className="flex flex-col gap-space-xs"
              onSubmit={handleSubscribe}
            >
              <div className="flex items-center bg-surface-container-high rounded p-space-xs">
                <input
                  className="bg-transparent w-full px-space-sm text-on-surface placeholder:text-outline focus:outline-none font-body-sm text-body-sm"
                  placeholder="Su correo electrónico..."
                  type="email"
                  required
                  aria-label="Correo electrónico"
                />
                <button
                  className="px-space-md py-space-xs bg-primary-container text-on-primary-container font-label-md text-label-md uppercase font-bold rounded hover:bg-primary transition-colors"
                  type="submit"
                >
                  Unirse
                </button>
              </div>
              <span className="font-label-sm text-label-sm text-outline">
                Respetamos su privacidad. Cero spam.
              </span>
            </form>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <p>
            © {new Date().getFullYear()} La Barbería Tradicional S.L. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-primary transition-colors" href="#">
              Privacidad
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Términos de Servicio
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Protocolo de Higiene
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
