import { useState } from "react";

const BARBEROS = [
  {
    id: 1,
    nombre: "Mateo Gómez",
    apodo: "«El Filo»",
    experiencia: "Master Barber • 14 años exp.",
    especialidad: "Navaja & Rito Clásico",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdgaovGR5yJPEMxMyD4-fwUImUwFKJW3VwwNvMrww-3QiPYGVgR2sHKmpsKaA2nXiAvB2oxoHpxhQQjBAuSgDsqnbYFCtlSDktMFZhDZ-2CRmMRJfwT_me6GKIDLQYLULHWKz3e8K4nHTyGEuCEdqhudTWSkL87k_YqQ_xS8PRryS-LKsusSKr0_2lpG9GOeUd980FROFH_9gc1LpZtFOIsilko3oAxjG5sDaIeFK-x0_ONH3Tr4BF",
    isMaster: true,
  },
  {
    id: 2,
    nombre: "Lucas Benítez",
    apodo: "«Fade Master»",
    experiencia: "Especialista en Degradados",
    especialidad: "Texturas & Contornos",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIJLpYiHZZQv2aAJVV6_sJT2bqV9HRiM7B12N2sNnR0kxS3llR0Ba_ZpWGyX-aKoYsruGm6CbHpvSrmDyyIFAVhGcNFqP9mVtg4R_ob1hzR3o_LHblbAsYLVE_A0cZR6ScB0yUsI26uHYawpVtv4jqezDotdf7M1z_yiGpn0Yct0ycljyK1ws9lf7BZ7eHG4sjeurPkSk1vdp_z7e8HpCWGwQ3w7RkWA9WKNKHsKcUBMOJ8Rl2JdKU",
    isVerified: true,
  },
  {
    id: "any",
    nombre: "Primer Disponible",
    apodo: "Asignación Rápida",
    experiencia: "Cualquier Maestro de Turno",
    especialidad: "Máxima Flexibilidad",
    isAny: true,
  },
];

const HORARIOS = [
  { hora: "10:00 hs", estado: "libre" },
  { hora: "10:45 hs", estado: "libre" },
  { hora: "11:30 hs", estado: "libre" },
  { hora: "15:00 hs", estado: "ocupado" },
  { hora: "15:45 hs", estado: "libre" },
  { hora: "16:30 hs", estado: "libre" },
  { hora: "17:15 hs", estado: "libre" },
  { hora: "18:00 hs", estado: "libre" },
];

const ReservarTurno = () => {
  const [barberoSeleccionado, setBarberoSeleccionado] = useState(1);
  const [horaSeleccionada, setHoraSeleccionada] = useState("16:30 hs");

  // --- LÓGICA DE CALENDARIO DINÁMICO ---
  const [fechaActual] = useState(new Date()); // El día de hoy
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date()); // El día que elige el usuario
  const [mesVisible, setMesVisible] = useState(
    new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1),
  ); // Mes mostrado en el calendario

  const barberoActual = BARBEROS.find((b) => b.id === barberoSeleccionado);

  // Estados del cliente
  const [nombre, setNombre] = useState("Carlos E. Sarmiento");
  const [whatsapp, setWhatsapp] = useState("+54 9 11 5849-2041");
  const [email, setEmail] = useState("carlos.sarmiento@correo.com");

  // Helpers de formato de fechas (Capitalizando la primera letra)
  const formatMes = (date) => {
    const texto = date.toLocaleDateString("es-AR", {
      month: "long",
      year: "numeric",
    });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };

  const formatFechaCompleta = (date) => {
    const texto = date.toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };

  // Navegación de meses
  const irMesAnterior = () => {
    // No permitir ir a meses anteriores al actual
    if (
      mesVisible.getMonth() > fechaActual.getMonth() ||
      mesVisible.getFullYear() > fechaActual.getFullYear()
    ) {
      setMesVisible(
        new Date(mesVisible.getFullYear(), mesVisible.getMonth() - 1, 1),
      );
    }
  };
  const irMesSiguiente = () =>
    setMesVisible(
      new Date(mesVisible.getFullYear(), mesVisible.getMonth() + 1, 1),
    );

  // Generación de la grilla del mes
  const diasEnElMes = new Date(
    mesVisible.getFullYear(),
    mesVisible.getMonth() + 1,
    0,
  ).getDate();
  // Obtener qué día de la semana empieza el mes (0 = Domingo, 1 = Lunes). Ajustamos para que Lunes sea 0.
  const primerDiaSemana =
    (new Date(mesVisible.getFullYear(), mesVisible.getMonth(), 1).getDay() +
      6) %
    7;

  const diasDelMes = [];
  // Rellenar espacios vacíos al principio
  for (let i = 0; i < primerDiaSemana; i++) {
    diasDelMes.push(null);
  }
  // Rellenar con los días reales
  for (let i = 1; i <= diasEnElMes; i++) {
    diasDelMes.push(
      new Date(mesVisible.getFullYear(), mesVisible.getMonth(), i),
    );
  }

  return (
    <main className="w-full pt-20 bg-surface min-h-screen pb-space-2xl">
      <div className="flex flex-col w-full">
        <div className="w-full bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low pb-space-2xl px-gutter">
          <div className="max-w-[1240px] mx-auto flex flex-col gap-space-xl">
            {/* Header del Wizard */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">
                    workspace_premium
                  </span>
                  <span>Reserva de Experiencia Artesanal</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Agenda tu Rito & Silueta
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Selecciona tu artesano predilecto, define el momento idóneo y
                  confirma tu turno garantizado con anticipo protegido.
                </p>
              </div>
              <div className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-xs rounded-full self-start md:self-auto shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Disponibilidad en Tiempo Real
                </span>
              </div>
            </div>

            {/* Stepper Progress */}
            <div className="w-full bg-surface-container-high rounded-xl p-space-md md:p-space-lg shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md relative">
                <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-lowest/60">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-md">
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                      Paso 01 • Completado
                    </span>
                    <span className="font-title-md text-title-md text-on-surface truncate">
                      Servicio Exclusivo
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-secondary-container/30">
                  <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-md ring-2 ring-primary/40">
                    <span>2</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                      Paso 02 • En Curso
                    </span>
                    <span className="font-title-md text-title-md text-on-surface truncate">
                      Maestro Barbero
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-lowest/30 opacity-70">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                    <span>3</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                      Paso 03 • Próximo
                    </span>
                    <span className="font-title-md text-title-md text-on-surface-variant truncate">
                      Fecha, Turno & Checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido Principal (Dos Columnas) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Columna Izquierda: Pasos de Selección */}
              <div className="lg:col-span-7 flex flex-col gap-space-xl">
                {/* Paso 1: Servicio */}
                <div className="bg-surface-container rounded-xl p-space-lg shadow-lg flex flex-col gap-space-md transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        content_cut
                      </span>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">
                        Paso 1: Servicio Seleccionado
                      </span>
                    </div>
                    <button
                      className="text-primary hover:text-primary-fixed text-label-md font-label-md uppercase tracking-wider flex items-center gap-space-xs transition-colors"
                      type="button"
                    >
                      <span>Cambiar Servicio</span>
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </button>
                  </div>
                  <div className="p-space-md bg-surface-container-high rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-14 h-14 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0">
                        <span className="material-symbols-outlined text-3xl">
                          spa
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Ritual de Barba con Toalla Caliente
                          </h3>
                          <span className="bg-primary/20 text-primary text-label-sm font-label-sm px-space-xs py-0.5 rounded uppercase tracking-wider">
                            Insignia
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Aceites esenciales pre-afeitado, doble aplicación de
                          toalla humeante, navaja clásica de filo sueco y masaje
                          reconfortante de mandíbula.
                        </p>
                        <div className="flex items-center gap-space-md mt-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              schedule
                            </span>{" "}
                            35 Minutos
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              check_circle
                            </span>{" "}
                            Incluye Loción Artesanal
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right sm:self-center flex-shrink-0">
                      <span className="font-headline-md text-headline-md text-primary font-bold">
                        $14.000
                      </span>
                      <span className="block font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        ARS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Paso 2: Barbero */}
                <div className="bg-surface-container rounded-xl p-space-lg shadow-lg flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        person_outline
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        Paso 2: Elegir Maestro Barbero
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                      1/3 Seleccionado
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                    {BARBEROS.map((barbero) => (
                      <div
                        key={barbero.id}
                        onClick={() => setBarberoSeleccionado(barbero.id)}
                        className={`cursor-pointer p-space-md rounded-lg transition-all flex flex-col justify-between gap-space-md hover:translate-y-[-2px] ${
                          barberoSeleccionado === barbero.id
                            ? "bg-surface-container-high ring-2 ring-primary shadow-md"
                            : "bg-surface-container-low shadow-sm hover:bg-surface-container-high"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center gap-space-sm">
                          <div className="relative">
                            {barbero.isAny ? (
                              <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center text-outline-variant shadow-inner">
                                <span className="material-symbols-outlined text-4xl text-primary">
                                  groups_3
                                </span>
                              </div>
                            ) : (
                              <>
                                <img
                                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                                  alt={barbero.nombre}
                                  src={barbero.img}
                                />
                                {barbero.isMaster && (
                                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-xs">
                                      star
                                    </span>
                                  </div>
                                )}
                                {barbero.isVerified && (
                                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-xs">
                                      verified
                                    </span>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-title-md text-title-md text-on-surface font-bold">
                              {barbero.nombre}
                            </span>
                            <span
                              className={`font-label-sm text-label-sm uppercase tracking-widest mt-0.5 ${barbero.isAny ? "text-outline" : barbero.isMaster ? "text-primary" : "text-outline"}`}
                            >
                              {barbero.apodo}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                              {barbero.experiencia}
                            </span>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest/80 p-space-xs rounded text-center">
                          <span
                            className={`font-label-sm text-label-sm tracking-wider uppercase font-semibold ${barbero.isAny ? "text-primary-fixed" : barbero.isMaster ? "text-secondary" : "text-on-surface-variant"}`}
                          >
                            {barbero.especialidad}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Paso 3: Calendario Dinámico */}
                <div className="bg-surface-container rounded-xl p-space-lg shadow-lg flex flex-col gap-space-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        calendar_month
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        Paso 3: Fecha & Horario
                      </h3>
                    </div>
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                      <span className="material-symbols-outlined text-sm text-primary">
                        today
                      </span>
                      <span>{formatMes(mesVisible)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                    {/* Componente Calendario */}
                    <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-lg">
                      <div className="flex items-center justify-between pb-space-xs">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {formatMes(mesVisible)}
                        </span>
                        <div className="flex items-center gap-space-xs">
                          <button
                            type="button"
                            onClick={irMesAnterior}
                            disabled={
                              mesVisible.getMonth() ===
                                fechaActual.getMonth() &&
                              mesVisible.getFullYear() ===
                                fechaActual.getFullYear()
                            }
                            className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <span className="material-symbols-outlined text-sm">
                              chevron_left
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={irMesSiguiente}
                            className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">
                              chevron_right
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm text-outline uppercase tracking-wider py-space-xs">
                        <span>Lu</span>
                        <span>Ma</span>
                        <span>Mi</span>
                        <span>Ju</span>
                        <span>Vi</span>
                        <span>Sá</span>
                        <span>Do</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm">
                        {diasDelMes.map((fecha, i) => {
                          // Si es null, es un relleno del inicio del mes
                          if (!fecha) {
                            return (
                              <span key={`empty-${i}`} className="p-2"></span>
                            );
                          }

                          const dia = fecha.getDate();
                          const esPasado =
                            fecha.setHours(0, 0, 0, 0) <
                            fechaActual.setHours(0, 0, 0, 0);
                          const esSeleccionado =
                            fecha.getTime() === fechaSeleccionada.getTime();

                          if (esPasado) {
                            return (
                              <button
                                key={i}
                                type="button"
                                className="p-2 rounded text-outline-variant opacity-30 cursor-not-allowed"
                                disabled
                              >
                                {dia}
                              </button>
                            );
                          }

                          if (esSeleccionado) {
                            return (
                              <button
                                key={i}
                                type="button"
                                className="p-2 rounded bg-primary text-on-primary font-bold shadow-md ring-2 ring-primary/60 scale-105"
                              >
                                {dia}
                              </button>
                            );
                          }

                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setFechaSeleccionada(fecha)}
                              className="p-2 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors"
                            >
                              {dia}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Horarios List */}
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider font-semibold">
                          Horarios
                        </span>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                          {formatFechaCompleta(fechaSeleccionada)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-xs max-h-[260px] overflow-y-auto pr-1">
                        {HORARIOS.map((h, i) => {
                          if (h.estado === "ocupado") {
                            return (
                              <button
                                key={i}
                                type="button"
                                disabled
                                className="px-space-md py-space-sm rounded bg-surface-container-highest text-outline opacity-40 cursor-not-allowed font-body-sm text-body-sm flex items-center justify-between"
                              >
                                <span className="line-through">{h.hora}</span>
                                <span className="text-xs">Ocupado</span>
                              </button>
                            );
                          }
                          const isSelected = horaSeleccionada === h.hora;
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setHoraSeleccionada(h.hora)}
                              className={`px-space-md py-space-sm rounded font-body-sm text-body-sm flex items-center justify-between transition-colors ${
                                isSelected
                                  ? "bg-primary text-on-primary font-bold shadow-md ring-2 ring-primary/70"
                                  : "bg-surface-container-low text-on-surface hover:bg-surface-container-high"
                              }`}
                            >
                              <span>{h.hora}</span>
                              {isSelected ? (
                                <span className="material-symbols-outlined text-sm">
                                  done
                                </span>
                              ) : (
                                <span className="text-xs text-outline">
                                  Libre
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Checkout & Resumen (Sticky) */}
              <div className="lg:col-span-5 flex flex-col gap-space-lg lg:sticky lg:top-36">
                <div className="relative bg-surface-container-high rounded-xl overflow-hidden shadow-2xl flex flex-col">
                  <div className="h-2 w-full bg-gradient-to-r from-error via-inverse-surface to-secondary-container"></div>
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                          Folio de Turno N° #8492
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">
                          Resumen de Reserva
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-inner">
                        <span className="material-symbols-outlined">
                          receipt_long
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-md rounded-lg shadow-inner">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md text-on-surface font-semibold">
                            Ritual de Barba con Toalla Caliente
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            35 minutos de servicio completo
                          </span>
                        </div>
                        <span className="font-title-md text-title-md text-on-surface font-bold">
                          $14.000
                        </span>
                      </div>
                      <div className="pt-space-xs flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">
                          badge
                        </span>
                        <span>
                          Barbero: {barberoActual?.nombre}{" "}
                          {barberoActual?.apodo}
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">
                          event_available
                        </span>
                        <span>
                          {formatFechaCompleta(fechaSeleccionada)} •{" "}
                          {horaSeleccionada}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs py-space-xs">
                      <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                        <span>Precio Total del Servicio</span>
                        <span className="text-on-surface font-medium">
                          $14.000 ARS
                        </span>
                      </div>
                      <div className="flex justify-between font-body-sm text-body-sm text-primary font-semibold">
                        <span className="flex items-center gap-1">
                          <span>Seña para Confirmar (30%)</span>
                        </span>
                        <span>$4.200 ARS</span>
                      </div>
                      <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                        <span>Saldo Restante en Sillón</span>
                        <span className="text-on-surface">$9.800 ARS</span>
                      </div>
                      <div className="pt-space-xs flex justify-between font-headline-sm text-headline-sm text-on-surface font-bold border-t border-outline-variant/30">
                        <span>Abonar Ahora:</span>
                        <span className="text-primary">$4.200 ARS</span>
                      </div>
                    </div>

                    {/* Formulario Cliente */}
                    <div className="flex flex-col gap-space-sm pt-space-xs">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                        Datos del Cliente
                      </span>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          className="bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-sm text-body-sm focus:outline-none ring-1 ring-outline-variant/50 focus:ring-primary transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                        <div className="flex flex-col gap-space-xs">
                          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            className="bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-sm text-body-sm focus:outline-none ring-1 ring-outline-variant/50 focus:ring-primary transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-space-xs">
                          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Correo Electrónico
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-sm text-body-sm focus:outline-none ring-1 ring-outline-variant/50 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Checkout Btn */}
                    <div className="flex flex-col gap-space-xs pt-space-sm">
                      <button
                        className="w-full py-space-md px-space-lg bg-[#009EE3] hover:bg-[#0082ba] text-white rounded font-label-lg text-label-lg font-bold uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                        type="button"
                      >
                        <svg
                          className="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.88V19h-2v-2.12c-1.74-.29-3-1.63-3-3.38h2c0 .94.75 1.5 1.75 1.5 1 0 1.75-.56 1.75-1.5 0-1-.62-1.38-1.88-1.75-1.75-.5-3.12-1.25-3.12-2.75 0-1.62 1.25-2.88 2.5-3.25V4h2v1.88c1.5.25 2.62 1.38 2.75 2.87h-2c-.13-.75-.62-1.25-1.5-1.25s-1.5.5-1.5 1.25c0 .75.5 1.12 1.62 1.5 1.75.5 3.38 1.13 3.38 3 0 1.63-1.12 3-2.75 3.38z"></path>
                        </svg>
                        <span>Pagar seña con Mercado Pago ($4.200)</span>
                      </button>
                    </div>

                    <div className="p-space-sm bg-surface-container-lowest/80 rounded border-l-2 border-primary flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">
                        verified_user
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        <strong className="text-on-surface font-medium">
                          Garantía de Caballero:
                        </strong>{" "}
                        Puedes reprogramar o cancelar tu turno sin costo alguno
                        hasta{" "}
                        <span className="text-primary font-bold">
                          3 horas antes
                        </span>{" "}
                        del horario pactado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservarTurno;
