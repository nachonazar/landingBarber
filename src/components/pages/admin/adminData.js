// Datos de ejemplo del panel. Reemplazalos por la respuesta de tu API cuando tengas backend.

const IMG = 'https://lh3.googleusercontent.com/aida-public/';

// Imágenes temporales de Stitch: descargalas a /public o /src/assets antes de publicar
export const LOGO_URL = `${IMG}AB6AXuCIbAtdkso2___-PTz3LjGqy1laCG5tc0iV1yweBoovAYa9gXi-vrawr5OnrECB-eRHuyvHZkfhLRQjQnAAYvuFxQ4SNBMMLyYv1Pmy5WqXQd95bH6rLVIvbi3uJ8U25BuFUHgcOaOTG1faPjiLdVTWIPHjb-vDu9QQ9P0ctz2_5Y8XCBVIB-lACfrHeIPOrMKIp4eyQBE74d2I6z-bR3d_UToY4A0ofHwgTQ7MC24vXMFgaV2n7y6v`;
export const PERFIL_URL = `${IMG}AB6AXuBaMpd7iOQddiInQEfsNPVj-YzAX5uncBJ904YKob5-Qujpmtrf6Q37ROVdQgMtTEAvNMMh7ctMyN_NzzzrA8HzsLl-Je_8pGihMAWolR7LP6P8WZM73jsqWSJsoA5fJ4dHF5M01kUqQFgC9T53MVU8koZQhluQ-iI9VhJS5Gt49hKgbf638bR8nkdyV0aLl5y_3N3b0n-W53TqpN6YqEdpyvabeK1mXqkaJh5Qf8HMTrXszv1S7zUC`;

// ---------- Helpers ----------
export const SENA_MANUAL = 5000;

export const formatoARS = (numero) => `$${numero.toLocaleString('es-AR')}`;

export const obtenerIniciales = (nombre) =>
  nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('');

// ---------- Navegación lateral ----------
export const ENLACES_ADMIN = [
  { to: '/panel-barbero', icono: 'dashboard', label: 'Agenda & Turnos' },
  { to: '/gestion-servicios', icono: 'content_cut', label: 'Servicios & Tarifas' },
  { to: '/gestion-clientes', icono: 'group', label: 'Fichas Clientes' },
  { to: '/', icono: 'storefront', label: 'Ver Sitio Público', end: true },
];

export const FILTROS_PERIODO = ['Hoy', 'Esta Semana', 'Este Mes'];

// ---------- KPIs ----------
export const KPIS = [
  {
    id: 'turnos',
    titulo: 'Turnos Agendados',
    valor: '18',
    unidad: null,
    tamano: 'font-display-lg text-display-lg',
    colorValor: 'text-primary',
    icono: 'event_available',
    iconoBg: 'bg-surface-container-highest',
    iconoColor: 'text-primary',
    detalle: '14 confirmados · 2 en curso',
    variacion: '+12%',
    variacionColor: 'text-primary',
    barra: 'bg-primary',
    progreso: 78,
  },
  {
    id: 'ingresos',
    titulo: 'Ingresos Semanales',
    valor: '$485.600',
    unidad: 'ARS',
    tamano: 'font-headline-lg text-headline-lg',
    colorValor: 'text-on-surface',
    icono: 'payments',
    iconoBg: 'bg-secondary-container/40',
    iconoColor: 'text-secondary',
    detalle: 'Señas MP: $145.000',
    variacion: '+8%',
    variacionColor: 'text-secondary',
    barra: 'bg-secondary',
    progreso: 65,
  },
  {
    id: 'ocupacion',
    titulo: 'Ocupación Sillones',
    valor: '89%',
    unidad: null,
    tamano: 'font-display-lg text-display-lg',
    colorValor: 'text-on-surface',
    icono: 'airline_seat_recline_extra',
    iconoBg: 'bg-surface-container-highest',
    iconoColor: 'text-primary-fixed',
    detalle: '4 de 5 sillones ocupados',
    variacion: 'Pico 16-19h',
    variacionColor: 'text-primary',
    barra: 'bg-primary-container',
    progreso: 89,
  },
  {
    id: 'ticket',
    titulo: 'Ticket Promedio',
    valor: '$22.400',
    unidad: 'ARS',
    tamano: 'font-headline-lg text-headline-lg',
    colorValor: 'text-on-surface',
    icono: 'analytics',
    iconoBg: 'bg-surface-container-highest',
    iconoColor: 'text-primary',
    detalle: 'Servicios + Bálsamos/Pomadas',
    variacion: '+5.4%',
    variacionColor: 'text-primary',
    barra: 'bg-primary',
    progreso: 55,
  },
];

// ---------- Turnos ----------
// estado: 'en-sillon' | 'confirmado' | 'pendiente' | 'completado'
// pago.tipo: 'sena' | 'sin-pagar' | 'cobrado'
export const TURNOS_INICIALES = [
  {
    id: 1,
    hora: '11:30',
    horaSub: 'Sillón #2',
    horaSubClase: 'text-outline font-normal',
    cliente: 'Nicolás Albarracín',
    telefono: '+54 9 11 4567-8901',
    whatsapp: '5491145678901',
    avatar: `${IMG}AB6AXuAyP1f6HUdqGKqhnJ-qlH1DYqoRvLYzhdi86nTxGlHifX73kh5dG3Y75PRNu0j_xaOqAbH_NOoMFJZ6rTUkdZSvHQSW2ekrRIV1FfPXTBctqgsyHtikXVEYIrhhId3d_VIG3oa49enLQ-BhnV9WtngylYlIcin9odRo_2Mv4St0DBOEheAsxxyoHuOkKG6Sq6QOjeLC7JreqBGiBCXyLS6UhIxvMtaL_rDSyTL8PJ4TdgEUiWTkPkQh`,
    iniciales: null,
    avatarClase: null,
    servicio: 'Experiencia El Patrón',
    detalle: 'Corte + Barba + Toalla Caliente',
    barbero: 'Mateo Gómez',
    barberoDot: 'bg-primary',
    estado: 'en-sillon',
    pago: { tipo: 'sena', titulo: 'Seña MP ($5.000)', detalle: 'Resta: $21.000' },
  },
  {
    id: 2,
    hora: '12:15',
    horaSub: 'En 45 min',
    horaSubClase: 'text-secondary font-semibold',
    cliente: 'Esteban Valenzuela',
    telefono: '+54 9 11 8923-4123',
    whatsapp: '5491189234123',
    avatar: `${IMG}AB6AXuCXQIk3H7RT_yhVB3GfvCYleOc231rxU8H1_Xs7ZtVFWG3h1QKpKiOVHrrKADbOz9dlvyjdQDMwhTaE8coJ4WmK0-N01H4cg3ZNSWE_PKKYydQS5Ky1oMGo1HomQKvnMzutjb6E_Jx4UsRQTcRnBbD7zlasGEJx9zV8ZXQgnK_FSFVR4vnsQVQ47jRGDQTc6Q1MscxZFS-QRa30QlvxnWxFIQoXriG7dAA-bPowHabqErepqsamWF-c`,
    iniciales: null,
    avatarClase: null,
    servicio: 'Ritual de Barba Esculpida',
    detalle: 'Aceite de cedro y navaja japonesa',
    barbero: 'Lucas Benítez',
    barberoDot: 'bg-secondary',
    estado: 'confirmado',
    pago: { tipo: 'sena', titulo: 'Seña MP ($4.000)', detalle: 'Resta: $14.000' },
  },
  {
    id: 3,
    hora: '13:00',
    horaSub: 'Sillón #1',
    horaSubClase: 'text-outline font-normal',
    cliente: 'Marcos Rossi',
    telefono: '+54 9 11 7654-1289',
    whatsapp: '5491176541289',
    avatar: null,
    iniciales: 'MR',
    avatarClase: 'bg-surface-container-highest text-primary',
    servicio: 'Corte Clásico & Lavado',
    detalle: 'Tijera artesanal + tónico',
    barbero: 'Mateo Gómez',
    barberoDot: 'bg-primary',
    estado: 'pendiente',
    pago: { tipo: 'sin-pagar', titulo: 'Sin Pagar', detalle: 'Total: $18.500' },
  },
  {
    id: 4,
    hora: '10:00',
    horaSub: 'Finalizado',
    horaSubClase: 'text-outline font-normal',
    cliente: 'Federico Quintana',
    telefono: '+54 9 11 3321-9988',
    whatsapp: null,
    avatar: `${IMG}AB6AXuD9sl6sLr9vpvTm18IKgRee1qw-aN174fxPAyK8g67GA6vth--3qdrex3pcSo3WnhiyHtFpIPkQoawZq7VTx40RAEa-ySdgNa3xxLHSXAY0LJ-QDT37E5ql6hDE40HKWGEYv2t8h2PDy2LMoiSpJ7Xa7avcm2BdWtbFfbD8Qjbao9b2KRM4jbrWcuOhubZeKEqxKMyEAvoEmlQe8kc7m7Pykcdzpg6G9qUpiOWiw8p07veppjkDzHFC`,
    iniciales: null,
    avatarClase: null,
    servicio: 'Afeitado Tradicional Navaja',
    detalle: 'Incluye masaje facial',
    barbero: 'Joaquín Morales',
    barberoDot: 'bg-outline',
    estado: 'completado',
    pago: { tipo: 'cobrado', titulo: 'Cobrado Total', detalle: '$16.000 Efectivo' },
  },
  {
    id: 5,
    hora: '15:00',
    horaSub: 'Sillón #4',
    horaSubClase: 'text-outline font-normal',
    cliente: 'Damián Lombardi',
    telefono: '+54 9 11 6644-2211',
    whatsapp: '5491166442211',
    avatar: null,
    iniciales: 'DL',
    avatarClase: 'bg-secondary-container text-on-secondary-container',
    servicio: 'Corte Degradé & Barba',
    detalle: 'Skin Fade con acabado matte',
    barbero: 'Lucas Benítez',
    barberoDot: 'bg-secondary',
    estado: 'confirmado',
    pago: { tipo: 'sena', titulo: 'Seña MP ($5.000)', detalle: 'Resta: $17.500' },
  },
];

// ---------- Widgets laterales ----------
export const TURNO_INMINENTE = {
  hora: '11:45 HS',
  cliente: 'Gonzalo Morales',
  avatar: `${IMG}AB6AXuBxmBnuY8mE4xHaSjXZGEUL0KEEhz4_ySw2DUh4cTUZVOeSLvCHWvS9QGoTWqZO2PJzGF1UeiyfzjeTDZEF63VG4-OIaBfImu_zN8Y304LPDTJuYZ2wl_uAwSHRy7mt8tUB2dL__GiYf8hE6WbpnUzuSCX_ZBZogxeh7fwmIAB4Qe_tmTOE6qzJzdkKUyBsoFEmmLsIJDRsW-41y5HFMn_TQBN1ggpQrai2Q9iCyuK2BoBNoUdalxGO`,
  descripcion: 'Cliente Habitual · 8 visitas',
  whatsapp: '5491133445566',
  servicio: 'Corte Degradé + Barba',
  barbero: 'Mateo Gómez (Sillón 1)',
  saldo: 'Resta $18.000 (Abonó seña)',
};

// estado: 'ocupado' | 'libre' | 'descanso'
export const BARBEROS_EQUIPO = [
  {
    id: 1,
    nombre: 'Mateo Gómez',
    avatar: `${IMG}AB6AXuA0NNk0hhm3AAbWkjPfl8H7FJPsX6Y1bzAfBEi0BuHUpHpXLv4CCQyYnqWfSWPoV-C5606l7ygvlYvdlNo5SGWkzSTKl5vKCFBgotQo2L8nBkb-zCzurY-qmnTPbeAMMFCBe77QP2cuPM-AMPsvINaAfP5mfzpSgE7cEt31booydqhlnQgtAaRyhk535m45hYdZUYRe29nnzoovSj5TYxX5VSJD_81dCvKGt5LQLAPrV1pMnIurOlPv`,
    iniciales: null,
    estado: 'ocupado',
    dot: 'bg-primary',
    detalle: 'Sillón #1 · Ocupado',
    badge: 'Termina 11:45',
    badgeClase: 'bg-secondary-container text-on-secondary-container',
    nota: 'Nicolás A.',
  },
  {
    id: 2,
    nombre: 'Lucas Benítez',
    avatar: `${IMG}AB6AXuD9rbpweJP9keOU6ztE89BLFG8zzo4yMmTrezdJKWVyqLkfNhKXI9yc8PdjxsSLlPq9e0SNFh-mkxToeAX9iaxUndMw8qTPavDfkd7l5hALGHjd5S57-aHP2PBCggE_zdGFTLQa41Q-2bo5erVx8N0PvGpyGnycT9AvOsxtizhUq61zecn5hKz7WtQ5HaUi9engYh1wQYsrq3CEOwYGZFRmbQuk2MvXhlgbAOTQCXIaDDD9zeyPtcj8`,
    iniciales: null,
    estado: 'libre',
    dot: 'bg-primary',
    detalle: 'Sillón #2 · Libre',
    badge: 'Disponible',
    badgeClase: 'bg-primary/20 text-primary',
    nota: 'Próx: 12:15',
  },
  {
    id: 3,
    nombre: 'Joaquín Morales',
    avatar: `${IMG}AB6AXuAuPJksgVxO2RQNdocr_L0odQ3F1Jr3lo-El0ItMtILCHfF00zxk1HvLhByFNmsZQBZmA8FmBdspAP7WktH1YgZKWxnFMQif8w1eUWYOVqniKaVyokxkRMMBD3pMFDlLURLvIq8Pg_2M83cH0fMKD1axq0wsSWUox4aB98guF1lfvs4Kc0cthMc8dy7FPpCo7PWC0OSNvFDtbr7T6QRipSxffdc0FV1GBI1uO6YCNX8_p6R7yHFDmW7`,
    iniciales: null,
    estado: 'ocupado',
    dot: 'bg-secondary',
    detalle: 'Sillón #3 · Ocupado',
    badge: 'Termina 12:00',
    badgeClase: 'bg-secondary-container text-on-secondary-container',
    nota: 'Julián B.',
  },
  {
    id: 4,
    nombre: 'Cristian Rojas',
    avatar: null,
    iniciales: 'CR',
    estado: 'descanso',
    dot: 'bg-outline',
    detalle: 'Descanso · Regresa 13:00',
    badge: null,
    badgeClase: '',
    nota: 'Almuerzo',
  },
];

export const COBROS_HOY = {
  total: '$124.500',
  mercadoPago: 68,
  efectivo: 32,
};

// ---------- Opciones del formulario "Nuevo turno" ----------
export const SERVICIOS = [
  { id: 'patron', nombre: 'Experiencia El Patrón', precio: 26000 },
  { id: 'corte', nombre: 'Corte Clásico & Lavado', precio: 18500 },
  { id: 'barba', nombre: 'Ritual de Barba Esculpida', precio: 18000 },
  { id: 'afeitado', nombre: 'Afeitado Tradicional Navaja', precio: 16000 },
];

export const BARBEROS_OPCIONES = [
  { nombre: 'Mateo Gómez', sillon: 'Sillón 1', dot: 'bg-primary' },
  { nombre: 'Lucas Benítez', sillon: 'Sillón 2', dot: 'bg-secondary' },
  { nombre: 'Joaquín Morales', sillon: 'Sillón 3', dot: 'bg-outline' },
  { nombre: 'Cristian Rojas', sillon: 'Sillón 4', dot: 'bg-outline' },
];