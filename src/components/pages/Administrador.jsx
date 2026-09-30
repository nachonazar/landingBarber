import { useState } from 'react';
import SidebarAdmin from './admin/SidebarAdmin';
import TopbarAdmin from './admin/TopbarAdmin';
import EncabezadoPanel from './admin/EncabezadoPanel';
import KpiCard from './admin/KpiCard';
import TablaTurnos from './admin/TablaTurnos';
import TurnoInminente from './admin/TurnoInminente';
import EquipoActivo from './admin/EquipoActivo';
import DistribucionCobros from './admin/DistribucionCobros';
import ModalNuevoTurno from './admin/ModalNuevoTurno';
import { KPIS, SENA_MANUAL, TURNOS_INICIALES, formatoARS, obtenerIniciales } from './admin/adminData';

const Administrador = () => {
  const [turnos, setTurnos] = useState(TURNOS_INICIALES);
  const [filtro, setFiltro] = useState('Hoy'); // TODO: filtrar los turnos según el período cuando haya backend
  const [modalAbierto, setModalAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const actualizarTurno = (id, cambios) =>
    setTurnos((prev) => prev.map((t) => (t.id === id ? { ...t, ...cambios } : t)));

  // Acciones de cada fila. Por ahora trabajan sobre el estado local.
  // TODO: reemplazar por llamadas a tu API (Express + MongoDB)
  const handleAccion = (tipo, turno) => {
    switch (tipo) {
      case 'sentar':
        actualizarTurno(turno.id, { estado: 'en-sillon' });
        break;
      case 'completar':
        actualizarTurno(turno.id, {
          estado: 'completado',
          horaSub: 'Finalizado',
          horaSubClase: 'text-outline font-normal',
        });
        break;
      case 'cancelar':
        if (window.confirm(`¿Cancelar el turno de ${turno.cliente} por falta de seña?`)) {
          setTurnos((prev) => prev.filter((t) => t.id !== turno.id));
        }
        break;
      case 'cobrar':
        alert(`Iniciando cobro a ${turno.cliente} (${turno.pago.detalle})`);
        break;
      case 'recordatorio':
        alert(`Recordatorio de pago enviado por WhatsApp a ${turno.cliente}`);
        break;
      default:
        alert('Función disponible próximamente');
    }
  };

  const handleCrearTurno = ({ nombre, telefono, hora, servicio, barbero, sena }) => {
    const cobrada = sena === 'cobrada';

    const nuevoTurno = {
      id: Date.now(),
      hora,
      horaSub: 'Turno manual',
      horaSubClase: 'text-outline font-normal',
      cliente: nombre,
      telefono,
      whatsapp: telefono.replace(/\D/g, '') || null,
      avatar: null,
      iniciales: obtenerIniciales(nombre),
      avatarClase: 'bg-surface-container-highest text-primary',
      servicio: servicio.nombre,
      detalle: 'Ingresado manualmente',
      barbero: barbero.nombre,
      barberoDot: barbero.dot,
      estado: cobrada ? 'confirmado' : 'pendiente',
      pago: cobrada
        ? {
            tipo: 'sena',
            titulo: `Seña cobrada (${formatoARS(SENA_MANUAL)})`,
            detalle: `Resta: ${formatoARS(servicio.precio - SENA_MANUAL)}`,
          }
        : {
            tipo: 'sin-pagar',
            titulo: 'Pendiente Link MP',
            detalle: `Total: ${formatoARS(servicio.precio)}`,
          },
    };

    setTurnos((prev) => [...prev, nuevoTurno]);
    setModalAbierto(false);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SidebarAdmin abierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} />

      <div className="lg:pl-72">
        <TopbarAdmin onAbrirMenu={() => setMenuAbierto(true)} />

        <main className="relative min-h-screen bg-surface px-gutter pt-[6.5rem] pb-space-xl">
          <div className="flex flex-col w-full gap-space-xl">
            <EncabezadoPanel
              filtro={filtro}
              onCambiarFiltro={setFiltro}
              onNuevoTurno={() => setModalAbierto(true)}
            />

            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg">
              {KPIS.map((kpi) => (
                <KpiCard key={kpi.id} kpi={kpi} />
              ))}
            </div>

            {/* Tabla + widgets laterales */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <TablaTurnos turnos={turnos} onAccion={handleAccion} />

              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                <TurnoInminente />
                <EquipoActivo />
                <DistribucionCobros />
              </div>
            </div>
          </div>
        </main>
      </div>

      <ModalNuevoTurno
        abierto={modalAbierto}
        onCerrar={() => setModalAbierto(false)}
        onCrear={handleCrearTurno}
      />
    </div>
  );
};

export default Administrador;