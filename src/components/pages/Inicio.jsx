import React, { useEffect } from 'react';

const Inicio = () => {
  // Funciones interactivas que antes estaban en un script al final del HTML
  const selectService = (serviceName) => {
    const select = document.getElementById('servicios-select');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(serviceName)) {
          select.selectedIndex = i;
          break;
        } 
      }
    }
    const target = document.getElementById('reservar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectSlot = (e) => {
    const allSlots = document.querySelectorAll('.slot-btn');
    allSlots.forEach(slot => {
      slot.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold', 'shadow');
      slot.classList.add('bg-surface-container', 'text-on-surface');
    });
    const button = e.target;
    button.classList.remove('bg-surface-container', 'text-on-surface');
    button.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold', 'shadow');
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const feedback = document.getElementById('booking-feedback');
    if (feedback) {
      feedback.classList.remove('hidden');
      setTimeout(() => {
        feedback.classList.add('hidden');
      }, 5000);
    }
  };

  // Pre-fill today's date in input on component mount
  useEffect(() => {
    const dateInput = document.getElementById('fecha-input');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }
  }, []);

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
              data-alt="Moody cinematic interior of an authentic 1920s barbershop." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUZ7yf7iOdLzy6yxCnZFLZzwlvgGBhZxavi3uEkYI3u7FfbjbkgwFztbeWwZoG8mGBCw_kbyeXPUJwaajoZeCiXMX4oMnrp_FF56sHkTdqKcSd2m70crx5I65yVzYVdb6K568IYiK1Eq5ge2k8f6_UmcKF_UgzxStnqeabdbGMxcJ2eTYs0_ZatzPCcDlBapL7lJwDQoO2OG02laLKIBGbhWv9Fm2m0hmlqAc6MXnOKLKFOfFOthi_')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1240px] mx-auto px-gutter py-space-2xl flex flex-col items-start gap-space-lg">
            {/* Vintage Crest Pill */}
            <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/90 shadow-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">Desde 1928 • Tradición, Precisión & Nobleza</span>
            </div>
            <div className="max-w-3xl flex flex-col gap-space-md">
              <h1 className="font-display-lg text-display-lg tracking-tight text-on-surface font-semibold">
                El Arte del <span className="text-primary italic font-normal">Afeitado</span> & Corte Clásico
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Recupere el ritual pausado de la barbería tradicional. Tratamientos con paños al vapor aromático, navajas japonesas de filo impecable y cortes arquitectónicos en el refugio del caballero contemporáneo.
              </p>
            </div>
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider font-bold rounded shadow-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5" href="#reservar">
                <span className="material-symbols-outlined text-xl">content_cut</span>
                Reservar Turno Ahora
              </a>
              <a className="inline-flex items-center gap-space-sm px-space-lg py-space-md bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wider rounded hover:bg-surface-bright transition-colors shadow-sm" href="#servicios">
                <span className="material-symbols-outlined text-xl text-primary">menu_book</span>
                Ver Servicios & Precios
              </a>
            </div>
            {/* Trust Bar Elements */}
            <div className="w-full pt-space-xl grid grid-cols-2 md:grid-cols-4 gap-space-md">
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">4.9 / 5.0</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Más de 2.400 Reseñas</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">96 Años</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Legado Artesanal</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-primary text-2xl">local_cafe</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">Cortesía Club</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Whisky & Café Espresso</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low/70">
                <span className="material-symbols-outlined text-secondary text-2xl">timer</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-on-surface">Sin Esperas</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Turno Puntual y Rito Individual</span>
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
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Nuestra Carta Selecta</span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">Servicios Artesanales</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Cada servicio se ejecuta con instrumental esterilizado al autoclave, aceites de botánica pura y la calma requerida para una terminación pulcra.
              </p>
            </div>
            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Card 1: Corte Clásico Tradicional */}
              <div className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 shadow-md">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-highest text-primary">
                      <span className="material-symbols-outlined text-2xl">cut</span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary uppercase tracking-widest">
                      45 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Corte Clásico Tradicional</h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$18.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">/ sesión</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Técnica clásica con tijera y máquina según morfología craneal. Incluye lavado capilar estimulante, masaje con loción de menta y peinado final con pomada al agua artesanal.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Lavado tónico purificante
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Masaje cervical relajante
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Acabado con fijación mate o brillante
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <button className="w-full py-space-sm px-space-md rounded bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors text-center" onClick={() => selectService('Corte Clásico Tradicional')}>
                    Elegir & Reservar
                  </button>
                </div>
              </div>
              {/* Card 2: Ritual de Barba con Toalla Caliente */}
              <div className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 shadow-md">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-highest text-primary">
                      <span className="material-symbols-outlined text-2xl">spa</span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary uppercase tracking-widest">
                      35 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ritual de Barba Toalla Caliente</h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$14.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">/ sesión</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    El rito histórico por excelencia. Doble toalla caliente con esencias de cedro y eucalipto para abrir poros, afeitado a navaja japonesa feather y sellado en frío con alumbre.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Espumado en cuenco de cerámica
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Aceite hidratante de jojoba & bergamota
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Masaje facial de descongestión
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <button className="w-full py-space-sm px-space-md rounded bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors text-center" onClick={() => selectService('Ritual de Barba con Toalla Caliente')}>
                    Elegir & Reservar
                  </button>
                </div>
              </div>
              {/* Card 3: Perfilado de Barba & Contornos */}
              <div className="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-container transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 shadow-md">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="p-space-xs rounded bg-surface-container-highest text-primary">
                      <span className="material-symbols-outlined text-2xl">straighten</span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary uppercase tracking-widest">
                      20 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Perfilado & Contornos</h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$9.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">/ sesión</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Para quienes mantienen su barba pero exigen una geometría impecable en mejillas y cuello. Limpieza de vello disperso y definición milimétrica sin reducir longitud.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Marcación de líneas con gel transparente
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Recorte de volumen y simetría
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      Loción calmante anti-irritación
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <button className="w-full py-space-sm px-space-md rounded bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors text-center" onClick={() => selectService('Perfilado de Barba & Contornos')}>
                    Elegir & Reservar
                  </button>
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
                      <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                    </span>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-lowest text-primary uppercase tracking-widest font-semibold">
                      75 Minutos
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Experiencia Completa El Patrón</h3>
                    <div className="flex items-baseline gap-space-xs text-primary font-headline-md text-headline-md font-bold">
                      <span>$28.000</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">/ sesión</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    El homenaje definitivo a la relajación masculina. Corte integral de autor, afeitado ceremonial con toalla tibia, mascarilla de arcilla volcánica y copa de licor de bienvenida.
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">verified</span>
                      Corte completo + Ritual de barba
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">verified</span>
                      Tratamiento exfoliante y purificante
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-sm">verified</span>
                      Single Malt Whisky o Café de Especialidad
                    </li>
                  </ul>
                </div>
                <div className="pt-space-lg">
                  <button className="w-full py-space-sm px-space-md rounded bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider font-bold hover:bg-primary transition-colors text-center shadow-md" onClick={() => selectService('Experiencia Completa El Patrón')}>
                    Elegir & Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Por Qué Elegirnos (4 Pilares) */}
        <section className="w-full py-space-2xl bg-surface-container-low">
          <div className="max-w-[1240px] mx-auto px-gutter flex flex-col gap-space-xl">
            <div className="flex flex-col items-center text-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Nuestra Filosofía</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">El Compromiso con la Maestría</h2>
              <div className="w-16 h-0.5 bg-primary/40 mt-space-xs"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Feature 1 */}
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-primary">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">Navaja Clásica Japonesa</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Nuestros barberos están instruidos en el afeitado manual de tradición centenaria. Cada pasada se realiza con ángulo milimétrico evitando rojeces o cortes.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-3xl">eco</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">Formulación Orgánica Propia</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Aceites emolientes macerados en madera, ceras y bálsamos elaborados con cera de abeja, almendra dulce y esencias naturales sin parabenos ni sulfatos.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-primary">
                  <span className="material-symbols-outlined text-3xl">chair</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">Club de Caballeros</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Un refugio acústicamente aislado con música jazz y blues a volumen sobrio, butacas de cuero capitoné y luz envolvente libre del estrés urbano.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container">
                <div className="w-12 h-12 rounded flex items-center justify-center bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-3xl">wine_bar</span>
                </div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">Bebidas de Cortesía</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Al cruzar la puerta el cliente es agasajado con café espresso recién molido o una copa de single malt escocés seleccionado especialmente por nuestro club.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Asymmetrical Editorial / Craft Gallery Focus */}
        <section className="w-full py-space-2xl bg-surface">
          <div className="max-w-[1240px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Detalles & Espacio</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">Un Templo Para la Calma</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                No somos un salón con prisas ni una cadena masificada. Cada sillón Belmont de hierro forjado de 1954 ha sido restaurado para brindar la máxima postura ergonómica durante su momento de descanso.
              </p>
              <div className="flex flex-col gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-base">brush</span>
                  Brochas de pelo de tejón silvestre de alta suavidad
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-base">hot_tub</span>
                  Vaporizadores con extractos botánicos de aromaterapia
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-base">inventory_2</span>
                  Venta de frascos y kits de cuidado domiciliario
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-space-md">
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <img className="w-full h-full object-cover" data-alt="Close-up photograph of a skilled master barber..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ie8KFQ0xSN3LzMaA4E987psXhlcaO4XoQ0ycO5EobYZxNRPXkiw2ikC_ave9u5hbKesgvyG1GBPElZATqI3v3xu7anYw2BiSMAf69RJsGmDEcKzfJd1L8yfExfq-lzjBEWtscN13qPvuz9ZcBFWmWDBAmC3BGBudXbHNsF6Q5s8m6NrRVlmr4_FIkjm4mU5xIdYBtwQa4gRlK7PDcYRiyAwPwvpo69uFswXDiCXagud1BF836RZw" alt="Barbería Tradicional" />
                </div>
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">100%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Navajas esterilizadas y filos descartables de un solo uso por protocolo higiénico estricto.</span>
                </div>
              </div>
              <div className="flex flex-col gap-space-md pt-space-xl">
                <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs">
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary">4 Maestros</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Con más de 12 años promedio de experiencia en corte y navaja de afeitar europea.</span>
                </div>
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <img className="w-full h-full object-cover" data-alt="Artistic macro detail photo of a vintage Japanese straight razor..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwa6fWBHflWoBJTgFPSZiw4dLcO6AB4PV-wBHUnfF3Qz2e0X6W3HlFxLf9aewF1JhHbkDzsKxjg-2YvLLRitGi_4dC_fbyio1cAaJxewDxuhZBhvAtojWyUQQdECHRFoO0UiK72QEFxFyF25FyPrY7MPp4Ufbe4drHitO2xnDbbqu4qyUbbCeyS6Sp8DVVC53GGFK8zMVo_cJfTMutkJJk1DZRKHO1yohOgd9k25b7Rdtxk2ugDyGW" alt="Navaja Japonesa" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Testimonios de Clientes */}
        <section className="w-full py-space-2xl bg-surface-container-lowest">
          <div className="max-w-[1240px] mx-auto px-gutter flex flex-col gap-space-xl">
            <div className="flex flex-col items-center text-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Palabra de Honor</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold">Testimonios de Clientes Fieles</h2>
              <div className="w-16 h-0.5 bg-primary/40 mt-space-xs"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {/* Testimonial 1 */}
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    "Llevo 4 años viniendo cada 15 días para el ritual de barba. El trato de los maestros, la toalla al vapor y el silencio respetuoso hacen que sea mi momento preferido del mes."
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                    MG
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-on-surface">Martín G.</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Cliente desde 2020</span>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    "La experiencia 'El Patrón' superó cualquier estándar. Me sirvieron un whisky excelente mientras me afeitaban con una precisión que jamás vi. No vuelvo a pisar otra peluquería."
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold">
                    RA
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-on-surface">Rodrigo Alarcón</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Cliente desde 2022</span>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md shadow-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    "Puntualidad suiza. Llegué a las 11:00 y a las 11:01 ya estaba en el sillón. El corte a tijera es una obra de arte y sus aceites de sándalo dejan la piel perfecta."
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                    EM
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-semibold text-on-surface">Esteban Morales</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Cliente desde 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Booking & Promo Banner Section */}
        <section className="w-full py-space-2xl bg-surface" id="reservar">
          <div className="max-w-[1240px] mx-auto px-gutter">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-surface-container to-surface-container-high shadow-2xl p-space-lg md:p-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Promo Info */}
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-secondary-container text-on-secondary-container w-fit">
                    <span className="material-symbols-outlined text-sm">loyalty</span>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Cortesía de Bienvenida</span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold leading-tight">
                    15% OFF en su Primer Servicio
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Descubra por qué caballeros de toda la ciudad confían su apariencia a nuestros maestros. Reserve en línea en menos de dos minutos y disfrute del descuento automático en caja.
                  </p>
                  <div className="flex items-center gap-space-lg pt-space-xs">
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md font-bold text-primary">CITA PREVIA</span>
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Confirmación Inmediata</span>
                    </div>
                    <div className="w-px h-10 bg-outline-variant"></div>
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md font-bold text-secondary">CANCELACIÓN LIBRE</span>
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Hasta 3 hs antes</span>
                    </div>
                  </div>
                </div>
                {/* Interactive Fast Appointment Form */}
                <div className="lg:col-span-6 rounded-xl bg-surface-container-lowest p-space-lg shadow-inner">
                  <form className="flex flex-col gap-space-md" id="booking-form" onSubmit={handleReservation}>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Agendar Turno Rápido</span>
                    {/* Service Dropdown */}
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="servicios-select">Servicio Seleccionado</label>
                      <select className="w-full bg-surface-container px-space-md py-space-sm text-on-surface rounded font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high transition-colors" id="servicios-select">
                        <option value="Corte Clásico Tradicional ($18.000)">Corte Clásico Tradicional - $18.000</option>
                        <option value="Ritual de Barba con Toalla Caliente ($14.000)">Ritual de Barba con Toalla Caliente - $14.000</option>
                        <option value="Perfilado de Barba & Contornos ($9.000)">Perfilado de Barba & Contornos - $9.000</option>
                        <option value="Experiencia Completa El Patrón ($28.000)">Experiencia Completa El Patrón - $28.000</option>
                      </select>
                    </div>
                    {/* Barbero Select & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="barbero-select">Barbero Preferido</label>
                        <select className="w-full bg-surface-container px-space-md py-space-sm text-on-surface rounded font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high transition-colors" id="barbero-select">
                          <option value="Cualquier Maestro Disponible">Cualquier Maestro</option>
                          <option value="Mateo Fernández (Master Senior)">Mateo Fernández (Master Senior)</option>
                          <option value="Ignacio Rossi (Especialista Navaja)">Ignacio Rossi (Navaja)</option>
                          <option value="Luciano Vega (Corte Clásico)">Luciano Vega (Clásico)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="fecha-input">Fecha Deseada</label>
                        <input className="w-full bg-surface-container px-space-md py-space-sm text-on-surface rounded font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high transition-colors" id="fecha-input" required type="date" />
                      </div>
                    </div>
                    {/* Contact Field */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="nombre-input">Nombre y Apellido</label>
                        <input className="w-full bg-surface-container px-space-md py-space-sm text-on-surface placeholder:text-outline rounded font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high transition-colors" id="nombre-input" placeholder="Su nombre..." required type="text" />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant" htmlFor="telefono-input">Teléfono Móvil</label>
                        <input className="w-full bg-surface-container px-space-md py-space-sm text-on-surface placeholder:text-outline rounded font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high transition-colors" id="telefono-input" placeholder="+34 600 000 000" required type="tel" />
                      </div>
                    </div>
                    {/* Time Matrix Slot Buttons */}
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Horarios Disponibles para Hoy / Mañana</span>
                      <div className="grid grid-cols-4 gap-space-xs">
                        <button className="slot-btn py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" onClick={selectSlot} type="button">10:00</button>
                        <button className="slot-btn py-space-xs rounded bg-primary-container text-on-primary-container font-bold font-label-sm text-label-sm shadow" onClick={selectSlot} type="button">11:30</button>
                        <button className="slot-btn py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" onClick={selectSlot} type="button">15:00</button>
                        <button className="slot-btn py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" onClick={selectSlot} type="button">17:15</button>
                      </div>
                    </div>
                    {/* Submit */}
                    <button className="w-full mt-space-xs py-space-md rounded bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold uppercase tracking-wider hover:bg-primary transition-colors flex items-center justify-center gap-space-xs shadow-md" type="submit">
                      <span className="material-symbols-outlined text-lg">calendar_month</span>
                      Confirmar Solicitud con 15% Descuento
                    </button>
                    <div className="hidden p-space-sm rounded bg-primary-container/20 text-primary font-body-sm text-body-sm text-center" id="booking-feedback">
                      ¡Turno pre-reservado con éxito! Recibirá la confirmación por WhatsApp en unos minutos.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Inicio;