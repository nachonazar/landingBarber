import { useState } from "react";
import { Link } from "react-router-dom";

// Datos de la galería (En el futuro, estos podrían venir de una API)
const GALLERY_ITEMS = [
  {
    id: 1,
    category: "fades",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA_sK3JRQi8Vu7UNbSp9H-SxRhbebHQgDLLGJOcLe3otZK6nG30fyaqbY0PXGnuDas-_vXdIl_stubUHsi3V8YaH90OfALhNmz43V-1Wa8UWWRh7mp5skYFWyV8blgzY8i2sAW_jtTl6VL6FqLwS5zkluB21QqXHsDt7EFhFSYSMpujjDzg0zG12F79c8rMlbgbfq-vFnpP1p7oq1wwqe4r96YIb362RPldV86wCe0uiT0Ie4sKPMs",
    alt: "Fade Ejecutivo",
    badge: "Fade Ejecutivo",
    title: "Executive Razor Fade",
    time: "45 min",
    barber: "Mtro. Diego R.",
    description:
      "Raya trazada a bisturí con degradado medio-bajo pulido a máquina cóncava y acabado en fijación brillante.",
    spanClass: "md:row-span-2",
  },
  {
    id: 2,
    category: "barbas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9qWYe74XEJiUR8-AMnhN_GOzKRWjPnNpzFD0Yg3oTG6Jfakf19t_XsrjV6fvC_fkyDu6F-xPsrSu1BE4SjYSbUkTVK9im7u1FgICEAD8epukdAk0BjtzBAOB19Dr70Fd4JKDSxZseJNLL4d50fwViNJIlmDDGZMziSFpK3hozX1v7Uep5mmdY-7rd2vM4mehHVLCIrQ5KUFhH42iZ6-GOQ7UKUZfB4w3xUkRx0t0-uoms7aolFr8N",
    alt: "Ritual Clásico",
    badge: "Ritual Clásico",
    badgeColor: "text-secondary",
    title: "Afeitado Imperial con Paños Calientes",
    time: "50 min",
    barber: "Mtro. Alfonso V.",
    highlight: "Navaja Solingen",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    category: "barbas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFzJYyYrnkvsm472cBbghj-CCNLWf_IrVTm1pzLfWfy4JD_SYvUaATiHXq9aDIvzouJTJZw3-DskmnO_l3HuljwvKIP8o7heNxg3ow6-ggpuOwf9yOhB0_IIU_vJ_6CHGIp6NZqMLr_r_zhARt8A5elKf6N-aNGVOmApt5J9el6uaNzpRl1ETXyTMALlHLfrHGR-LDUbLd8e4vJxiHccl_VMXvqH-ssj5ZErEitNjBZRdegDfbCDKR",
    alt: "Barba Vikinga Esculpida",
    badge: "Barba Completa",
    title: "Esculpido Nórdico",
    time: "35 min",
    barber: "Mtro. Diego R.",
    isCompact: true,
  },
  {
    id: 4,
    category: "local",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBE3vvTMZIbP3J9t7WzdVB5eJz9Rt2VlQCJg-Aud6nGIz4xPRTBf1yCkAxvCF_aSFFwwr9YH6Q9NxQ4TzgN4fwrohHCl4BcqTLK1YdMVqN9RwK_pMwRtk_ro92XOsQSbeKidXaQAz7nSkXfQs7BQ-kR_6ry-DkXziGP0i4FTk2ayK4v-4weLIV0wyyDYAN1wTTn7XROrRqyi0fNbbD4SGGIz_ljwQYs7aN1QinfQL3FG0GtBhO-i8T",
    alt: "Vista General del Salón",
    title: "El Santuario del Caballero",
    description:
      "Sillones Belmont de 1954 restaurados a mano, espejos tallados en pan de oro y el aroma inconfundible a sándalo, café tostado y cuero añejo.",
    spanClass: "md:col-span-2 md:row-span-2",
    isSpecial: true,
  },
  {
    id: 5,
    category: "cortes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmsCk1E6Y4LZNra-J3QqrVCp68XotEC4uW-KXwP_WqXraBXC8pgJ5gVJmicZwVM-_X-L7HXdNBhhBCh3lgB4-WrCZdoqk-SVKLtIzoSvuM-fJgPJOq30AjTQjrDJjXJtvBu_RuExeBRl0J8GFMXmKKIRG0pkg_PQk2iZ-Ih-arDQcQM9SwrD5avUmaHqm1JRNd-xqmy0hCHD7F-ccRYEzWaZgJ5hbxIutPAZ5qSIvMK-853c0C2vpr",
    alt: "Corte Contemporáneo Pompadour",
    badge: "Corte Clásico",
    title: "Pompadour con Volumen",
    time: "40 min",
    barber: "Mtro. Javier M.",
    description:
      "Estructurado con secado a contrapelo, cera mate orgánica y definición en nuca inglesa.",
    spanClass: "md:row-span-2",
  },
  {
    id: 6,
    category: "local",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_8dKoM0og1LpB_WT0THOlCiVN2X_D0axD9fmwappYN8OBWEDjYonHrsYmr71lshppNUsYt7jMClN8Ij-6cdDbvT2TJZ2dZWcwB9CFvIskq6wppmp9-TAsqroexSe1uaQXwb_LYcUI7S_qnqdIs_vEtAPeqEzJKek5c_D7vFLC4a29iu1m01l8ouxJaUPo9iPKZsokCXjxwthp3Ugw6_ZssLeld1cpcKEmSgr09_eRqO4E0qxIqyGn",
    alt: "Estantería de Elixires",
    badge: "Boticario Propio",
    badgeColor: "text-secondary",
    title: "Ungüentos & Elixires",
    description: "Fórmulas botánicas destiladas para barba y cuero cabelludo",
    isMinimal: true,
  },
  {
    id: 7,
    category: "barbas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQodnaSbHTgEuUajbm0udCjPcWVCVyuN22BIfe98WFT-tZzixGrU_jGlap2Yyx-INV02IFVufqD3zJQJOvw7SDkST8s1WjEfDSHKENKMcC5Wdgl4ZdYUHO-4A4PDVfJqiEkFWrKuvrjKqk5UEv0ZxOJU2wQbq3ZOpKTMOaUrWRvRbBeyr9kdml1uHUvUKqeUkDfNGwEEiPYVG8hIS_eDz0fYwqCm3_juZ2maZMrNzbPZa4oY0Ze0b3",
    alt: "Perfilado Milimétrico",
    badge: "Precisión Quirúrgica",
    title: "Perfilado Navaja Libre",
    time: "25 min",
    barber: "Mtro. Alfonso V.",
    isCompact: true,
  },
  {
    id: 8,
    category: "cortes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKNw-_S7EU4sDFeg7iGb8kwoQyz-BfZjpUSUqzjU8RubDxStjVkN9zZ3SFIhzCZSktyUlM7LxVkCp5Adc9ct4S4bC_etLzeFd5ve0kedchiPE51EKls5k5bZ7SPdD5rCM2GxG-BfSY9yIfnSPE26moOO0gdsNiHLIIe9i1NlsJfQVFtFgtEMcK_KTZqYqrMNJgkF85Q2OirxPoyNh91zHP5-qEH9wr5YBecuesjhJKYu4k_PK2iZz1",
    alt: "Maestro Barbero Afilando Navaja",
    badge: "El Gremio",
    badgeColor: "text-secondary",
    title: "Asentado en Cuero Vacuno",
    barber: "Mtro. Maestro Mayor",
    highlight: "Tradición",
    highlightIcon: "workspace_premium",
    spanClass: "md:col-span-2 lg:col-span-1",
    isCompact: true,
  },
];

const IG_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsD81gQvYOB4ZmqbF3PqDZ23hXhAFTpzKxPdhlbvwsgTsoPAn0zscR_844Ry-m9fPZgYhN72ne9jFJzkmyIMCOjPGYAlKC2lxpusTA4fcyel5FC7dkNmihN-PbnmVPGo2_Xrq8AkAjYcavcx3JrC8A7LT-ohVXXwhIu4-qSOKixvPtuMvLyBuYmTKfQpfUxRg2oE8MPWZzUFML9Ipq52nE-8mVSbdmAE6iL1s1EN9DqjXTxGuQydo7",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA32DLSaOBgify64qY88LenyiYYwsD6705K1JoXi-MNBK0g5A-PJvSAMtYQAXNvVe4ae5HKn-57U3ykBf2ekgFrRfD2lOGGNe6Z9EdcfRX_8OCH9daLEkD-LHpFoYb4ZhZGC5zQQzOFxbL24q6nuRkoplZ50vXzrqRiBBONkpZyanWKPznjn6EfF1EvqP1BuVFoqFuDwO7inoBbfTKdho1EnFUAf0CLUOB32Mel-z3OdLK6T3zQdzTP",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDyfhyMg7j10EVe_-0jMhd7fuJh4bIqbmcwGwWVsdPO-VruFEIcJrYCxCCJ3eN27VOhTp8TqQiaId3IAtlIehYqb3mnQarF95dNf6U0mFYifbyuAa2yRXkX3g7YmTwT9nEPkWlRNESc7wT2LIAP24tfmj4GvqwYMd7bZbdhz_sYWRvpvoIAEoyb6SsZdKTqCXlL-P4RNTUb6QvrefI5o3tXu9x-2mD9_MdDDMHacZZRQDSki-W75n5k",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXFZ42mPjvVuEVqnzzLoKanDKUgs1-jkbOLNRpGy-922iX9qvuMplNHZnmTeBV6niBV7WYJr7PamBfEC_8ecu6hAJUs1OdVRX83dFMJROfziJ3R343_fKMVFQ67jP-DrL0tHgQQgqp4hHMAXlRfDVX-k7a2lQ8cOS6zGWBrCF8c3uI7KrWMPeYpJm2E4k5EhZgbWmYa9tnKNbU4EoaeLwPADd4SJEfe_tCCFLpiHMWA9aRKPmGIdhK",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvZreC5_7zLKVr7YqNsYR8BUNTajzEF3T_aZuXH7jgI2NQisX8SdL_WA3iVSM8WTmH1_eblTmlEGsPybtktD5_DDr0SbrlhO14i2Ipeli6m0YzJ6gfU9cCrAmI_-M6L2v7EkOZlqC8dj5gjI8jI9klDOuyJV0mSd8koemJhPLmhpRApL6rSf0pO4j04ALW6tlJAG4eUTZ96rJCTe_r7KW5joZ7CsExPIhHfsKw3R5Vyc5Pym2A7Fpw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJvqKHna_5lrcd5m1SBlaQcYNQnyjaQRNSEXnwSEAIlCisJId8lMhUTwIBNDkVxopdEWAucm2GYc6O2alCvJbjmkrn83Td9s8M4RTb6J37163UaDHPD5mefegkn2ztz_YVWB2S-KH9fYAkjMEitaBInLIvA0Sd3q4r8lQsDCAsVSTn2WMiTAYGYGs7A8TwK8gEZP4onEcSmV30u9cnyT3YY1jIf87qvaUlx4O02IEguq3bSUIQw58E",
];

const FILTERS = [
  { id: "all", label: `Todos (${GALLERY_ITEMS.length})` },
  { id: "cortes", label: "Cortes Clásicos" },
  { id: "barbas", label: "Barbas & Afeitados" },
  { id: "fades", label: "Fades & Tendencias" },
  { id: "local", label: "El Taller / Local" },
];

const Galeria = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <main className="w-full mt-20 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* Subtle Vintage Architectural Accent Ribbon */}
        <div className="w-full h-1 bg-gradient-to-r from-secondary-container via-primary-container to-secondary-container opacity-60"></div>

        {/* Header Section with Craft Aura */}
        <section className="relative w-full max-w-[1240px] mx-auto px-gutter pt-space-xl pb-space-lg">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                content_cut
              </span>
              <span>Archivo Fotográfico • Selección de Maestros</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Nuestra Galería & Estilos
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              Cortes legendarios, técnicas de navaja y la atmósfera de nuestro
              club. La consagración del cuidado masculino capturada en cada
              detalle.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs text-outline font-label-md text-label-md">
              <span className="h-px w-12 bg-outline-variant"></span>
              <span className="uppercase tracking-widest text-primary-fixed-dim">
                Est. 1928 • Herencia Artesanal
              </span>
              <span className="h-px w-12 bg-outline-variant"></span>
            </div>
          </div>

          {/* Craft Category Filter Pills */}
          <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-xs">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-space-md py-space-xs rounded font-label-md text-label-md uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary-container text-on-primary-container font-bold shadow-md"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                }`}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry / Asymmetric Editorial Gallery Grid */}
        <section className="w-full max-w-[1240px] mx-auto px-gutter pb-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md auto-rows-[220px]">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className={`group relative rounded overflow-hidden bg-surface-container-low shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in zoom-in-95 ${item.spanClass || ""}`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={item.alt}
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>

                {item.badge && (
                  <div className="absolute top-space-sm left-space-sm">
                    <span
                      className={`px-space-xs py-0.5 rounded bg-surface/80 backdrop-blur font-label-sm text-label-sm tracking-wider uppercase font-bold ${item.badgeColor || "text-primary"}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Variant 1: Special Presentation (Card 4) */}
                {item.isSpecial && (
                  <>
                    <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
                      <span className="px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-widest font-bold">
                        El Club
                      </span>
                      <span className="px-space-sm py-1 rounded bg-surface-container/90 backdrop-blur text-primary font-label-sm text-label-sm uppercase tracking-widest">
                        Santuario 1928
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-space-lg flex flex-col justify-end">
                      <div className="max-w-md space-y-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                          Arquitectura • Ambiente
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          {item.title}
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-space-md flex items-center gap-space-md">
                        <Link
                          to="/#reservar"
                          className="inline-flex items-center gap-space-xs py-space-xs px-space-lg bg-primary-container text-on-primary-container rounded font-label-md text-label-md font-bold uppercase tracking-wider shadow hover:bg-primary transition-colors"
                        >
                          <span>Visitar el Salón</span>
                          <span className="material-symbols-outlined text-sm">
                            room
                          </span>
                        </Link>
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                          Citas previa requerida
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Variant 2: Minimal (Card 6) */}
                {!item.isSpecial && item.isMinimal && (
                  <div className="absolute inset-x-0 bottom-0 p-space-md flex flex-col justify-end">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      {item.title}
                    </h2>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </span>
                  </div>
                )}

                {/* Variant 3: Standard & Compact */}
                {!item.isSpecial && !item.isMinimal && (
                  <div
                    className={`absolute inset-x-0 bottom-0 p-space-md flex ${item.isCompact ? "flex-col justify-end" : "flex-col md:flex-row md:items-end justify-between gap-space-sm"}`}
                  >
                    <div className="space-y-space-xs transform transition-transform duration-300">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm mt-1">
                        {item.time && (
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-primary">
                              schedule
                            </span>{" "}
                            {item.time}
                          </span>
                        )}
                        {item.highlight && (
                          <span className="flex items-center gap-1 text-primary font-bold">
                            {item.highlightIcon && (
                              <span className="material-symbols-outlined text-sm">
                                {item.highlightIcon}
                              </span>
                            )}
                            {item.highlight}
                          </span>
                        )}
                        <span className="text-secondary">{item.barber}</span>
                      </div>
                      {item.description && (
                        <p className="font-body-sm text-body-sm text-on-surface-variant/90 line-clamp-2 pt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div
                      className={`${item.isCompact ? "mt-space-xs" : "shrink-0 mt-space-sm opacity-90 group-hover:opacity-100 transition-opacity"}`}
                    >
                      <Link
                        to="/#reservar"
                        className={`inline-flex items-center justify-center gap-space-xs ${item.isCompact ? "w-full py-1 px-space-xs bg-surface-container-highest text-primary rounded hover:bg-primary-container hover:text-on-primary-container" : "w-full py-space-xs px-space-sm bg-primary-container text-on-primary-container rounded shadow hover:bg-primary"} font-label-md text-label-md font-bold uppercase tracking-wider transition-colors`}
                      >
                        <span>
                          {item.id === 8
                            ? "Conocer Maestros"
                            : "Quiero este estilo"}
                        </span>
                        {!item.isCompact && (
                          <span className="material-symbols-outlined text-sm">
                            north_east
                          </span>
                        )}
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            ))}

            {filteredItems.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-space-2xl text-on-surface-variant">
                <span className="material-symbols-outlined text-4xl mb-space-sm">
                  imagesmode
                </span>
                <p>No hay imágenes en esta categoría por el momento.</p>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Consultation Banner */}
        <section className="w-full bg-surface-container-low py-space-xl">
          <div className="max-w-[1240px] mx-auto px-gutter flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <div className="w-16 h-16 shrink-0 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  chair
                </span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  ¿No estás seguro de cuál encaja contigo?
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Diagnóstico Facial & Capilar Gratuito
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Cada servicio incluye 10 minutos iniciales de asesoramiento
                  morfológico por parte de nuestros maestros titulados.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-md shrink-0">
              <Link
                to="/#reservar"
                className="px-space-xl py-space-sm bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold uppercase tracking-wider rounded shadow hover:bg-primary transition-colors"
              >
                Agendar Cita Previa
              </Link>
            </div>
          </div>
        </section>

        {/* Instagram / Gentlemen's Community Feed Section */}
        <section className="w-full max-w-[1240px] mx-auto px-gutter py-space-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
                <span>Comunidad & Estilo de Vida</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                @LaBarberiaTradicional
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Etiqueta tus fotografías con el sello{" "}
                <strong className="text-primary-fixed">#CorteLegendario</strong>{" "}
                y forma parte de nuestra bitácora visual semanal.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md uppercase tracking-wider rounded transition-colors self-start md:self-auto"
            >
              <span>Seguir en Instagram</span>
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </a>
          </div>

          {/* Mini Instagram Grid Feed */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
            {IG_IMAGES.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded overflow-hidden bg-surface-container shadow-md"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={`Instagram feed photo ${index + 1}`}
                  src={imgSrc}
                />
                <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    favorite
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-space-md text-center">
            <p className="font-body-sm text-body-sm text-outline">
              ¿Te realizaste un corte recientemente? Comparte tu foto
              etiquetándonos para recibir un tratamiento botánico capilar de
              cortesía en tu próxima visita.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Galeria;
