import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIbAtdkso2___-PTz3LjGqy1laCG5tc0iV1yweBoovAYa9gXi-vrawr5OnrECB-eRHuyvHZkfhLRQjQnAAYvuFxQ4SNBMMLyYv1Pmy5WqXQd95bH6rLVIvbi3uJ8U25BuFUHgcOaOTG1faPjiLdVTWIPHjb-vDu9QQ9P0ctz2_5Y8XCBVIB-lACfrHeIPOrMKIp4eyQBE74d2I6z-bR3d_UToY4A0ofHwgTQ7MC24vXMFgaV2n7y6v";

const Login = () => {
  const navigate = useNavigate();
  // Estados para la interfaz
  const [activeTab, setActiveTab] = useState("login"); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [showStaffModal, setShowStaffModal] = useState(false);

  // Estados para los campos de los formularios
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [staffPin, setStaffPin] = useState("");

  // Manejadores de envío (Para futura integración con el backend)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Intentando iniciar sesión con:", {
      loginEmail,
      loginPassword,
    });
    // Aquí iría la lógica de autenticación
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Intentando registrar usuario:", {
      regName,
      regEmail,
      regPassword,
    });
    // Aquí iría la lógica de registro
  };

  const handleStaffPinSubmit = (e) => {
    e.preventDefault();
    console.log("Validando PIN de Maestro:", staffPin);
    // Como tu panel actualmente no está protegido, simplemente cerramos el modal y navegamos
    setShowStaffModal(false);
    navigate("/panel-barbero");
  };

  return (
    <main className="w-full min-h-[calc(100vh-80px)] mt-20 pt-space-xl pb-space-2xl bg-surface flex items-center justify-center px-gutter">
      <div className="w-full max-w-xl flex flex-col">
        <div className="relative w-full overflow-hidden bg-surface-container-low rounded-xl shadow-2xl">
          {/* Micro-acento de poste de barbería vintage */}
          <div className="h-1 w-full bg-gradient-to-r from-on-tertiary-fixed-variant via-surface-container-highest to-secondary-container"></div>

          <div className="p-space-lg sm:p-space-xl flex flex-col items-center">
            {/* Cabecera de Marca & Emblema */}
            <div className="relative flex flex-col items-center mb-space-lg">
              <Link to="/" className="relative group cursor-pointer block">
                <div className="w-28 h-28 rounded-full bg-surface-container-highest p-1 flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    alt="La Barbería Tradicional Emblema"
                    className="w-full h-full object-contain rounded-full"
                    src={LOGO_URL}
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase px-space-sm py-0.5 rounded-full shadow-md tracking-widest">
                    Est. 1928
                  </span>
                </div>
              </Link>
              <div className="text-center mt-space-md">
                <h1 className="font-headline-md text-headline-md text-primary tracking-wide">
                  La Barbería Tradicional
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Gremio de caballeros • Cuidado y precisión artesanal
                </p>
              </div>
            </div>

            {/* Selector de Pestañas (Login / Registro) */}
            <div className="w-full bg-surface-container-lowest p-1 rounded-lg flex items-center mb-space-lg shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-space-sm text-center font-label-md text-label-md rounded-DEFAULT transition-all duration-200 ${
                  activeTab === "login"
                    ? "bg-surface-container text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`flex-1 py-space-sm text-center font-label-md text-label-md rounded-DEFAULT transition-all duration-200 ${
                  activeTab === "register"
                    ? "bg-surface-container text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Crear Cuenta
              </button>
            </div>

            {/* FORMULARIO 1: Iniciar Sesión */}
            {activeTab === "login" && (
              <form
                onSubmit={handleLoginSubmit}
                className="w-full flex flex-col space-y-space-md animate-in fade-in duration-300"
              >
                {/* Correo Electrónico */}
                <div className="flex flex-col space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Credencial / Correo Electrónico
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                      mail
                    </span>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="caballero@tradicionshop.com"
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container transition-colors placeholder:text-outline-variant"
                    />
                  </div>
                </div>

                {/* Contraseña */}
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Contraseña Secreta
                    </label>
                  </div>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                      lock
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-10 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container transition-colors placeholder:text-outline-variant"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Alternar visibilidad de contraseña"
                      className="absolute right-3 text-outline hover:text-primary transition-colors flex items-center justify-center p-1"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Fila de Estado: Recordar & Olvido */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-surface-container-lowest text-primary accent-primary focus:ring-0 cursor-pointer"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Recordar este dispositivo
                    </span>
                  </label>
                  <a
                    href="#"
                    className="font-label-sm text-label-sm text-primary hover:underline transition-all"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                {/* Botón Principal */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider font-bold rounded-lg shadow-lg hover:bg-primary-fixed-dim transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    chair
                  </span>
                  <span>Acceder a mi Cuenta</span>
                </button>
              </form>
            )}

            {/* FORMULARIO 2: Crear Cuenta */}
            {activeTab === "register" && (
              <form
                onSubmit={handleRegisterSubmit}
                className="w-full flex flex-col space-y-space-md animate-in fade-in duration-300"
              >
                <div className="flex flex-col space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Nombre Completo
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                      person
                    </span>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="Lord Henry Montgomery"
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container transition-colors placeholder:text-outline-variant"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Correo Electrónico
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                      mail
                    </span>
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="cliente@gremio.com"
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container transition-colors placeholder:text-outline-variant"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Contraseña Nueva
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
                      key
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={8}
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="Mínimo 8 caracteres"
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-10 py-2.5 rounded-lg focus:outline-none focus:bg-surface-container transition-colors placeholder:text-outline-variant"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Alternar visibilidad"
                      className="absolute right-3 text-outline hover:text-primary transition-colors flex items-center justify-center p-1"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <p className="font-body-sm text-body-sm text-outline">
                  Al registrarte aceptas las normas de cortesía, puntualidad y
                  reserva del club.
                </p>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider font-bold rounded-lg shadow-lg hover:bg-primary-fixed-dim transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    verified
                  </span>
                  <span>Registrar Membresía</span>
                </button>
              </form>
            )}

            {/* Divisor Vintage */}
            <div className="w-full flex items-center my-space-lg">
              <div className="flex-1 h-px bg-surface-container-highest"></div>
              <span className="px-space-sm font-label-sm text-label-sm text-outline uppercase tracking-widest">
                o ingresa con
              </span>
              <div className="flex-1 h-px bg-surface-container-highest"></div>
            </div>

            {/* Accesos Rápidos Sociales */}
            <div className="w-full grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current text-primary"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
                </svg>
                <span className="font-label-md text-label-md">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface shadow-sm"
              >
                <svg
                  className="w-4 h-4 fill-current text-on-surface"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.03.63-2.68 1.4-.57.65-1.08 1.74-.94 2.81 1.05.08 2.06-.52 2.68-1.28z"></path>
                </svg>
                <span className="font-label-md text-label-md">Apple</span>
              </button>
            </div>

            {/* Beneficios de la Cuenta / Club Privado */}
            <div className="w-full mt-space-lg pt-space-md bg-surface-container rounded-lg p-space-md flex flex-col space-y-space-sm shadow-md">
              <div className="flex items-center space-x-2 text-primary">
                <span className="material-symbols-outlined text-base">
                  military_tech
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">
                  Beneficios del Miembro Titular
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2 pt-1">
                <div className="flex items-start space-x-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-sm text-secondary mt-0.5">
                    history_edu
                  </span>
                  <span>
                    Bitácora personalizada de estilos, cortes y productos
                    preferidos.
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-sm text-secondary mt-0.5">
                    loyalty
                  </span>
                  <span>
                    Programa de sellos de lealtad: 5to servicio con afeitado
                    tradicional de cortesía.
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-sm text-secondary mt-0.5">
                    speed
                  </span>
                  <span>
                    Reserva expedita de sillón con tu maestro barbero sin
                    rellenar datos.
                  </span>
                </div>
              </div>
            </div>

            {/* Acceso Staff / Barberos */}
            <div className="w-full mt-space-md flex items-center justify-between px-space-xs pt-space-xs">
              <div className="flex items-center space-x-1.5 text-outline">
                <span className="material-symbols-outlined text-base">
                  badge
                </span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  Portal de Barberos
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowStaffModal(true)}
                className="flex items-center space-x-1 font-label-sm text-label-sm text-secondary hover:text-primary transition-colors py-1 px-2.5 rounded bg-surface-container hover:bg-surface-container-high"
              >
                <span>Acceso Personal</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Rápido de Validación Staff */}
      {showStaffModal && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-surface-container-low rounded-xl p-space-lg shadow-2xl flex flex-col space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-primary">
                <span className="material-symbols-outlined">content_cut</span>
                <h2 className="font-headline-sm text-headline-sm">
                  Gremio de Maestros
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowStaffModal(false)}
                className="text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Ingreso exclusivo para sillón activo, control de caja y comisiones
              de barbero.
            </p>

            <form
              onSubmit={handleStaffPinSubmit}
              className="flex flex-col space-y-4"
            >
              <div className="flex flex-col space-y-2">
                <label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Código de Maestro
                </label>
                <input
                  type="password"
                  maxLength={6}
                  required
                  value={staffPin}
                  onChange={(e) => setStaffPin(e.target.value)}
                  placeholder="PIN de 6 dígitos"
                  className="w-full bg-surface-container-lowest text-center tracking-[0.5em] text-primary font-headline-sm text-headline-sm py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md uppercase tracking-wider transition-colors"
              >
                Validar Estación
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
