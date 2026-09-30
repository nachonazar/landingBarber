import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Inicio = () => {
  const { hash } = useLocation();

  // Scroll suave automático al hacer clic en los enlaces del menú (ej. /#servicios)
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <main className="w-full pt-32 bg-surface min-h-[calc(100vh-380px)]">
      <div className="flex flex-col w-full">
        {/* Accent Barber Pole Ribbon Micro-strip */}
        <div className="w-full h-1 bg-gradient-to-r from-[#9E2A2B] via-[#E5E2E1] to-[#1E3A5F]"></div>

        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 z-0 opacity-25">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUZ7yf7iOdLzy6yxCnZFLZzwlvgGBhZxavi3uEkYI3u7FfbjbkgwFztbeWwZoG8mGBCw_kbyeXPUJwaajoZeCiXMX4oMnrp_FF56sHkTdqKcSd2m70crx5I65yVzYVdb6K568IYiK1Eq5ge2k8f6_UmcKF_UgzxStnqeabdbGMxcJ2eTYs0_ZatzPCcDlBapL7lJwDQoO2OG02laLKIBGbhWv9Fm2m0hmlqAc6MXnOKLKFOfFOthi_')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1240px] mx-auto px-gutter py-space-2xl flex flex-col items-start gap-space-lg">
            <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/90 shadow-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                Desde 1928 • Tradición, Precisión & Nobleza
              </span>
            </div>
            <div className="max-w-3xl flex flex-col gap-space-md">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight text-on-surface font-semibold">
                El Arte del{" "}
                <span className="text-primary italic font-normal">
                  Afeitado
                </span>{" "}
                & Corte Clásico
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Recupere el ritual pausado de la barbería tradicional.
                Tratamientos con paños al vapor aromático, navajas japonesas de
                filo impecable y cortes arquitectónicos en el refugio del
                caballero contemporáneo.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Link
                to="/reservar-turno"
                className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider font-bold rounded shadow-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-xl">
                  content_cut
                </span>
                Reservar Turno Ahora
              </Link>
              <a
                className="inline-flex items-center gap-space-sm px-space-lg py-space-md bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wider rounded hover:bg-surface-bright transition-colors shadow-sm"
                href="#servicios"
              >
                <span className="material-symbols-outlined text-xl text-primary">
                  menu_book
                </span>
                Ver Servicios & Precios
              </a>
            </div>
            <div className="w-full pt-space-xl grid grid-cols-2 md:grid-cols-4 gap-space-md">
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">
                    4.9 / 5.0
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Más de 2.400 Reseñas
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  verified
                </span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">
                    96 Años
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Legado Artesanal
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-primary text-2xl">
                  local_cafe
                </span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">
                    Cortesía Club
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Whisky & Café Espresso
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  timer
                </span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">
                    Sin Esperas
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Turno Puntual y Rito Individual
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Servicios de Maestros Barberos */}
        <section className="w-full py-space-2xl bg-surface" id="servicios">
          <div className="max-w-[1240px] mx-auto px-gutter flex flex-col gap-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Nuestra Carta Selecta
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">
                  Servicios Artesanales
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Cada servicio se ejecuta con instrumental esterilizado al
                autoclave, aceites de botánica pura y la calma requerida para
                una terminación pulcra.
              </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Card 1: Corte Clásico Tradicional */}
              <div className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 shadow-md">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-highest text-primary">
                      <span className="material-symbols-outlined text-2xl">
                        cut
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary uppercase tracking-widest">
                      45 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Corte Clásico Tradicional
                    </h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$18.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                        / sesión
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Técnica clásica con tijera y máquina según morfología
                    craneal. Incluye lavado capilar estimulante, masaje con
                    loción de menta y peinado final con pomada al agua
                    artesanal.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Lavado tónico purificante
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Masaje cervical relajante
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Acabado con fijación mate o brillante
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <Link
                    to="/reservar-turno"
                    className="block w-full py-space-sm px-space-md rounded bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors text-center"
                  >
                    Elegir & Reservar
                  </Link>
                </div>
              </div>

              {/* Card 2: Ritual de Barba con Toalla Caliente */}
              <div className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 shadow-md">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-highest text-primary">
                      <span className="material-symbols-outlined text-2xl">
                        spa
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary uppercase tracking-widest">
                      35 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Ritual de Barba Toalla Caliente
                    </h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$14.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                        / sesión
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    El rito histórico por excelencia. Doble toalla caliente con
                    esencias de cedro y eucalipto para abrir poros, afeitado a
                    navaja japonesa feather y sellado en frío con alumbre.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Espumado en cuenco de cerámica
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Aceite hidratante de jojoba & bergamota
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Masaje facial de descongestión
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <Link
                    to="/reservar-turno"
                    className="block w-full py-space-sm px-space-md rounded bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors text-center"
                  >
                    Elegir & Reservar
                  </Link>
                </div>
              </div>

              {/* Card 3: Perfilado de Barba & Contornos */}
              <div className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 shadow-md">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-highest text-primary">
                      <span className="material-symbols-outlined text-2xl">
                        straighten
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary uppercase tracking-widest">
                      20 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Perfilado & Contornos
                    </h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$9.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                        / sesión
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Para quienes mantienen su barba pero exigen una geometría
                    impecable en mejillas y cuello. Limpieza de vello disperso y
                    definición milimétrica sin reducir longitud.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Marcación de líneas con gel transparente
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Recorte de volumen y simetría
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Loción calmante anti-irritación
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <Link
                    to="/reservar-turno"
                    className="block w-full py-space-sm px-space-md rounded bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors text-center"
                  >
                    Elegir & Reservar
                  </Link>
                </div>
              </div>

              {/* Card 4: Experiencia Completa El Patrón (Destacada) */}
              <div className="group relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-high transition-all duration-300 hover:bg-surface-bright hover:-translate-y-1 shadow-xl">
                <div className="absolute -top-3 right-6 px-space-sm py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider shadow">
                  Experiencia Insignia
                </div>
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-lowest text-primary">
                      <span className="material-symbols-outlined text-2xl">
                        workspace_premium
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-lowest text-primary uppercase tracking-widest font-semibold">
                      75 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Experiencia Completa El Patrón
                    </h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$28.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                        / sesión
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    El homenaje definitivo a la relajación masculina. Corte
                    integral de autor, afeitado ceremonial con toalla tibia,
                    mascarilla de arcilla volcánica y copa de licor de
                    bienvenida.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        verified
                      </span>
                      Corte completo + Ritual de barba
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        verified
                      </span>
                      Tratamiento exfoliante y purificante
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">
                        verified
                      </span>
                      Single Malt Whisky o Café de Especialidad
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <Link
                    to="/reservar-turno"
                    className="block w-full py-space-sm px-space-md rounded bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider font-bold hover:bg-primary transition-colors text-center shadow-md"
                  >
                    Elegir & Reservar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Por Qué Elegirnos (4 Pilares) */}
        <section className="w-full py-space-2xl bg-surface-container-low">
          <div className="max-w-[1240px] mx-auto px-gutter flex flex-col gap-space-xl">
            <div className="flex flex-col items-center text-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                Nuestra Filosofía
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">
                El Compromiso con la Maestría
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mt-space-xs"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    precision_manufacturing
                  </span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Navaja Clásica Japonesa
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Nuestros barberos están instruidos en el afeitado manual de
                  tradición centenaria. Cada pasada se realiza con ángulo
                  milimétrico evitando rojeces o cortes.
                </p>
              </div>
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-3xl">
                    eco
                  </span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Formulación Orgánica Propia
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Aceites emolientes macerados en madera, ceras y bálsamos
                  elaborados con cera de abeja, almendra dulce y esencias
                  naturales sin parabenos ni sulfatos.
                </p>
              </div>
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    chair
                  </span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Club de Caballeros
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Un refugio acústicamente aislado con música jazz y blues a
                  volumen sobrio, butacas de cuero capitoné y luz envolvente
                  libre del estrés urbano.
                </p>
              </div>
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-3xl">
                    wine_bar
                  </span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Bebidas de Cortesía
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Al cruzar la puerta el cliente es agasajado con café espresso
                  recién molido o una copa de single malt escocés seleccionado
                  especialmente por nuestro club.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Testimonios de Clientes */}
        <section className="w-full py-space-2xl bg-surface-container-lowest">
          <div className="max-w-[1240px] mx-auto px-gutter flex flex-col gap-space-xl">
            <div className="flex flex-col items-center text-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Palabra de Honor
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">
                Testimonios de Clientes Fieles
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mt-space-xs"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex text-primary">
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    "Llevo 4 años viniendo cada 15 días para el ritual de barba.
                    El trato de los maestros, la toalla al vapor y el silencio
                    respetuoso hacen que sea mi momento preferido del mes."
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                    MG
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-on-surface">
                      Martín G.
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Cliente desde 2020
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex text-primary">
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    "La experiencia 'El Patrón' superó cualquier estándar. Me
                    sirvieron un whisky excelente mientras me afeitaban con una
                    precisión que jamás vi. No vuelvo a pisar otra peluquería."
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold">
                    RA
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-on-surface">
                      Rodrigo Alarcón
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Cliente desde 2022
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex text-primary">
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    "Puntualidad suiza. Llegué a las 11:00 y a las 11:01 ya
                    estaba en el sillón. El corte a tijera es una obra de arte y
                    sus aceites de sándalo dejan la piel perfecta."
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                    EM
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-on-surface">
                      Esteban Morales
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Cliente desde 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contacto & Ubicación */}
        <section
          id="contacto"
          className="relative py-24 bg-surface border-t border-outline-variant/30 overflow-hidden text-on-surface"
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-gutter relative z-10">
            {/* Cabecera de Sección */}
            <div className="mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Sede Principal & Casco Histórico
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-medium tracking-tight">
                Encuentra el{" "}
                <span className="italic text-primary font-normal">
                  Santuario
                </span>
              </h2>
              <p className="mt-3 text-on-surface-variant text-sm sm:text-base max-w-xl font-light">
                Un refugio silencioso de madera noble, navaja y toalla caliente
                en el corazón de la ciudad.
              </p>
            </div>

            {/* Estructura responsiva en 2 columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Columna 1: Información y Canales Directos */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-surface-container-low/90 border border-outline-variant/40 rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/60 flex items-center justify-center text-primary shrink-0 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">
                        pin_drop
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-outline font-medium">
                        Ubicación
                      </h4>
                      <p className="text-base sm:text-lg font-medium text-on-surface mt-0.5">
                        Calle Mayor 42, Casco Histórico
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        Frente a la Plaza de los Artesanos • Estacionamiento de
                        cortesía
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/60 flex items-center justify-center text-primary shrink-0 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">
                        schedule
                      </span>
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className="text-xs uppercase tracking-wider text-outline font-medium">
                        Horarios de Salón
                      </h4>
                      <div className="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-1.5 pt-1">
                        <span className="text-on-surface-variant">
                          Martes a Viernes
                        </span>
                        <span className="font-semibold text-on-surface">
                          09:30 – 20:30 hs
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-1.5 pt-1">
                        <span className="text-on-surface-variant">
                          Sábados de Ritual
                        </span>
                        <span className="font-semibold text-on-surface">
                          09:00 – 18:00 hs
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-outline pt-1">
                        <span>Domingos y Lunes</span>
                        <span className="text-secondary font-medium uppercase tracking-wide">
                          Cerrado por descanso
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/60 flex items-center justify-center text-primary shrink-0 shadow-inner">
                      <span className="material-symbols-outlined text-2xl">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-outline font-medium">
                        Recepción Telefónica
                      </h4>
                      <a
                        href="tel:+34912345678"
                        className="text-base sm:text-lg font-medium text-on-surface hover:text-primary transition-colors mt-0.5 inline-block"
                      >
                        +34 912 345 678
                      </a>
                      <p className="text-xs text-outline mt-0.5">
                        Línea rotativa disponible en horarios de atención
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/30">
                  <a
                    href="https://wa.me/34912345678?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20La%20Barber%C3%ADa%20Tradicional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-neutral-950 font-semibold text-sm sm:text-base tracking-wide shadow-lg transition-all duration-300 transform active:scale-[0.99]"
                  >
                    <svg
                      className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.491 1.199.534 1.287.043.088.072.19.014.306-.058.115-.087.19-.174.289-.087.101-.184.225-.262.303-.09.088-.184.185-.079.365.105.18.468.772 1.004 1.249.69.614 1.271.805 1.452.894.18.089.288.076.395-.048.107-.124.462-.538.585-.724.123-.186.246-.156.411-.095.166.061 1.054.497 1.235.587.18.09.301.135.346.212.045.077.045.446-.099.851z" />
                    </svg>
                    <span>Contactar por WhatsApp</span>
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Columna 2: Mockup Estilizado de Mapa */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="relative w-full h-[460px] lg:h-full min-h-[420px] rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-2 shadow-2xl overflow-hidden group">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface-container">
                    {/* Textura Cartográfica SVG */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-35"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="grid-pattern"
                          width="48"
                          height="48"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 48 0 L 0 0 0 48"
                            fill="none"
                            stroke="#2b2b2b"
                            strokeWidth="0.8"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#grid-pattern)"
                      />
                      <path
                        d="M-50,220 C180,240 320,160 550,290 C700,370 850,300 1100,340"
                        fill="none"
                        stroke="#333333"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                      <path
                        d="M-50,220 C180,240 320,160 550,290 C700,370 850,300 1100,340"
                        fill="none"
                        stroke="#212121"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M420,-40 C440,180 430,300 480,550"
                        fill="none"
                        stroke="#383838"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M420,-40 C440,180 430,300 480,550"
                        fill="none"
                        stroke="#1f1f1f"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M120,400 L780,80"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        opacity="0.4"
                      />
                    </svg>

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-surface/40 to-surface/90 pointer-events-none" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                      <div className="mb-2 px-3.5 py-1.5 rounded-lg bg-surface-container-low/95 border border-primary/60 shadow-2xl backdrop-blur-md flex items-center gap-2 transform -translate-y-1 group-hover:scale-105 transition-transform duration-300">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-headline-sm font-semibold text-on-surface tracking-wide">
                          La Barbería Tradicional
                        </span>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary-container p-0.5 shadow-2xl shadow-primary/30 flex items-center justify-center">
                          <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-lg">
                              content_cut
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-4 h-1.5 bg-black/80 rounded-full blur-[1px] mt-1" />
                    </div>

                    <div className="absolute top-[28%] left-[24%] flex items-center gap-1.5 opacity-60">
                      <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest border border-outline" />
                      <span className="text-[11px] text-outline font-mono tracking-tight">
                        Plaza Mayor
                      </span>
                    </div>
                    <div className="absolute bottom-[22%] right-[20%] flex items-center gap-1.5 opacity-60">
                      <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest border border-outline" />
                      <span className="text-[11px] text-outline font-mono tracking-tight">
                        Parking Central
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-10">
                      <button
                        aria-label="Acercar mapa"
                        className="w-8 h-8 rounded-lg bg-surface-container-low/90 border border-outline-variant/50 text-on-surface-variant hover:text-primary flex items-center justify-center text-sm shadow-md transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">
                          add
                        </span>
                      </button>
                      <button
                        aria-label="Alejar mapa"
                        className="w-8 h-8 rounded-lg bg-surface-container-low/90 border border-outline-variant/50 text-on-surface-variant hover:text-primary flex items-center justify-center text-sm shadow-md transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">
                          remove
                        </span>
                      </button>
                      <button
                        aria-label="Mi ubicación"
                        className="w-8 h-8 rounded-lg bg-surface-container-low/90 border border-outline-variant/50 text-on-surface-variant hover:text-primary flex items-center justify-center text-sm shadow-md transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">
                          my_location
                        </span>
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low/90 hover:bg-surface-container-highest border border-outline-variant/50 text-xs font-medium text-on-surface transition-colors shadow-lg backdrop-blur-md"
                      >
                        <span className="material-symbols-outlined text-sm text-primary">
                          open_in_new
                        </span>
                        Abrir en Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modern Call to Action (Reemplaza el viejo formulario) */}
        <section className="w-full py-space-2xl bg-surface-container-lowest border-t border-outline/20">
          <div className="max-w-4xl mx-auto px-gutter text-center flex flex-col items-center gap-space-lg">
            <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-3xl">
                event_available
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Asegura tu Lugar en el Sillón
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Experimenta el verdadero rito del cuidado masculino. Elige a tu
              maestro, el horario perfecto y asegura tu lugar con anticipación a
              través de nuestra agenda digital.
            </p>
            <Link
              to="/reservar-turno"
              className="px-space-xl py-space-md bg-primary text-on-primary font-label-lg text-label-lg font-bold uppercase tracking-wider rounded shadow-lg hover:bg-primary-fixed-dim transition-all"
            >
              Iniciar Proceso de Reserva
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Inicio;
