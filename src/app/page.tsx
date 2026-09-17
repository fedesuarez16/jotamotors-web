"use client";

import Image from "next/image";
import { useState } from "react";
import "./landing.css";

// Destination of “Agenda tu revisión” on the original Jotamotors website.
const phone = "56940955661";
const defaultMessage = "Hola Jotamotors, quiero agendar una revisión para mi vehículo. ¿Qué horarios tienen disponibles?";
const whatsapp = (message = defaultMessage) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const map = "https://www.google.com/maps/search/?api=1&query=Av.+Borgoño+25600,+Concón,+Chile";

function Icon({ name, className = "" }: { name: "whatsapp" | "arrow" | "pin" | "check" | "menu" | "close"; className?: string }) {
  const paths = {
    whatsapp: "M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7ZM8.5 7.5c-.7 0-1 1-1 1.6 0 2.8 4.6 6.9 6.9 6.3.8-.2 1.4-1 1.4-1.7l-2.4-1.2-.9 1c-1.4-.6-2.5-1.6-3.1-2.9l.8-1-1-2.1Z",
    arrow: "M5 12h14m-6-6 6 6-6 6", pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    check: "m5 12 4 4L19 6", menu: "M4 7h16M4 12h16M4 17h16", close: "m6 6 12 12M6 18 18 6",
  };
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function WhatsAppCTA({ children = "Agendar mi revisión", message, className = "" }: { children?: React.ReactNode; message?: string; className?: string }) {
  return <a href={whatsapp(message)} target="_blank" rel="noopener noreferrer" className={`jm-cta ${className}`}><Icon name="whatsapp" /><span>{children}</span><Icon name="arrow" className="jm-cta-arrow" /></a>;
}

const concerns = ["Mi auto hace un ruido", "Se encendió un testigo", "Me toca mantención", "Necesito revisión técnica"];
const services = [
  { image: "aceite", label: "MANTENCIÓN", title: "Que los kilómetros no te pasen la cuenta.", text: "Cambio de aceite y revisión de filtros para cuidar el motor y mantener tu auto al día.", cta: "Cotizar mi mantención", message: "Hola Jotamotors, quiero cotizar una mantención y cambio de aceite. Les comparto marca, modelo, año y kilometraje de mi vehículo:" },
  { image: "frenos", label: "FRENOS", title: "Vuelve a frenar con confianza.", text: "¿Sientes ruidos o cambios al frenar? Solicita una inspección y conoce qué necesita tu vehículo.", cta: "Consultar por mis frenos", message: "Hola Jotamotors, quiero agendar una revisión de frenos. Mi vehículo presenta lo siguiente:" },
  { image: "neumaticos", label: "NEUMÁTICOS", title: "Tu seguridad empieza en el contacto.", text: "Cambio de neumáticos para recuperar seguridad y control en cada trayecto.", cta: "Consultar por neumáticos", message: "Hola Jotamotors, quiero consultar por cambio de neumáticos. Mi vehículo y la medida son:" },
  { image: "revision", label: "REVISIÓN TÉCNICA", title: "Una tarea menos en tu lista.", text: "Consulta por la gestión de tu revisión técnica y coordina los detalles con nuestro equipo.", cta: "Consultar revisión técnica", message: "Hola Jotamotors, me interesa la gestión de revisión técnica. ¿Qué incluye el servicio y qué necesito llevar?" },
];
const questions = [
  ["¿Cuánto cuesta revisar mi auto?", "Depende del vehículo y de lo que necesites revisar. Escríbenos la marca, el modelo, el año y qué está pasando para consultar el valor y el alcance del servicio antes de agendar."],
  ["¿Puedo consultar aunque no sepa qué falla?", "Sí. Cuéntanos qué notas: un ruido, una vibración, un testigo o un cambio al conducir. Puedes enviar fotos o videos por WhatsApp para explicar mejor lo que ocurre. La causa se confirma con la revisión del vehículo."],
  ["¿Cómo confirmo mi hora?", "Elige el motivo de tu consulta y escríbenos por WhatsApp. El equipo coordinará contigo la disponibilidad. Tu visita queda agendada cuando te confirmemos el día y la hora por el chat."],
  ["¿Cuánto tiempo tendré que dejar el auto?", "El tiempo depende del servicio y de lo que se encuentre en la revisión. Consulta la duración estimada por WhatsApp al coordinar tu visita para organizar tu día."],
  ["¿Dónde está el taller?", "Estamos en Av. Borgoño 25600, Concón. Más abajo encontrarás el enlace para abrir la ubicación en Google Maps y planificar tu visita."],
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [concern, setConcern] = useState<string | null>(null);
  const selectedMessage = concern ? `Hola Jotamotors, quiero agendar una revisión. ${concern}. ¿Me pueden orientar y confirmar disponibilidad?` : defaultMessage;
  return (
    <div className="jm-site">
      <a className="jm-skip" href="#contenido">Saltar al contenido</a>
      <div className="jm-location-bar"><div className="jm-container flex items-center justify-between gap-3"><span className="flex items-center gap-2"><Icon name="pin" />Tu taller mecánico en Concón</span><a href={map} target="_blank" rel="noopener noreferrer">Av. Borgoño 25600 ↗</a></div></div>
      <header className="jm-header"><div className="jm-container flex items-center justify-between gap-5">
        <a href="#inicio" aria-label="Jotamotors, inicio" className="jm-logo"><Image src="/landing/logo.png" alt="JotaMotors Servicio Automotriz" width={784} height={154} priority /></a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex"><a href="#servicios">Servicios</a><a href="#taller">Nuestro taller</a><a href="#opiniones">Opiniones</a><a href="#preguntas">Preguntas</a></nav>
        <WhatsAppCTA className="jm-header-cta">Agenda por WhatsApp</WhatsAppCTA>
        <button type="button" className="jm-menu-button lg:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
      </div>{menuOpen && <nav id="mobile-menu" className="jm-mobile-nav lg:hidden" aria-label="Navegación móvil">{[["Servicios", "servicios"], ["Nuestro taller", "taller"], ["Opiniones", "opiniones"], ["Preguntas", "preguntas"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<Icon name="arrow" /></a>)}<WhatsAppCTA /></nav>}</header>

      <main id="contenido">
        <section className="jm-hero" id="inicio">
          <Image src="/landing/hero.jpg" alt="Vehículos en el taller, fotografía del sitio de Jotamotors" fill priority sizes="100vw" className="jm-hero-photo" /><div className="jm-hero-shade" />
          <div className="jm-container jm-hero-content"><div className="jm-eyebrow"><span />MECÁNICA AUTOMOTRIZ EN CONCÓN</div><h1>Tu auto te lleva.<br />Nosotros lo<br /><span>mantenemos contigo.</span></h1><p className="jm-hero-copy">¿Un ruido nuevo, un testigo encendido o una mantención pendiente? Sal de la duda y vuelve a conducir con tranquilidad.</p><WhatsAppCTA /><p className="jm-microcopy">Hablemos por WhatsApp. Sin formularios largos.</p><div className="jm-hero-proof"><span className="jm-proof-mark"><Icon name="check" /></span><p>“Servicio profesional y de calidad”<span>Gabriel Hormazabal · Opinión publicada en nuestro sitio</span></p></div></div>
          <div className="jm-hero-caption"><span className="jm-caption-line" /><span>DEDICACIÓN EN CADA DETALLE.<br /><b>Confianza en cada kilómetro.</b></span><span className="jm-caption-number">01 / JM</span></div>
        </section>
        <div className="jm-benefits"><div className="jm-container grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4">{["Atención personalizada", "Técnicos certificados", "Repuestos de calidad", "Agenda por WhatsApp"].map((benefit) => <div key={benefit} className="flex items-center gap-3"><span className="jm-check"><Icon name="check" /></span><span>{benefit}</span></div>)}</div></div>

        <section className="jm-section jm-concerns" aria-labelledby="concerns-title"><div className="jm-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"><div><p className="jm-eyebrow">MEJOR REVISARLO QUE SEGUIR CON LA DUDA</p><h2 id="concerns-title">Ese “después lo veo”<br />merece una revisión.</h2><p className="jm-body">Sabemos que dependes de tu auto. No necesitas saber de mecánica para dar el primer paso: cuéntanos qué está pasando.</p></div><div className="jm-concern-panel"><h3>¿Qué te preocupa de tu auto?</h3><p>Selecciona una opción y conversemos.</p><div className="jm-options" role="group" aria-label="Motivo de la revisión">{concerns.map((item) => <button key={item} type="button" aria-pressed={concern === item} onClick={() => setConcern(item)} className={concern === item ? "is-selected" : ""}><span className="jm-option-dot" />{item}<Icon name="arrow" /></button>)}</div><WhatsAppCTA message={selectedMessage}>Quiero orientación para mi auto</WhatsAppCTA><p className="jm-panel-note">El mensaje se prepara con tu consulta. Tú decides cuándo enviarlo.</p></div></div></section>

        <section id="servicios" className="jm-section jm-services"><div className="jm-container"><div className="jm-section-heading"><div><p className="jm-eyebrow">CUIDAMOS LO QUE TE MUEVE</p><h2>Un servicio para cada<br />necesidad de tu auto.</h2></div><p className="jm-body">De la mantención de siempre a ese detalle que no te deja tranquilo.</p></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map((service, index) => <article className="jm-service-card" key={service.image}><div className="jm-service-image"><Image src={`/landing/${service.image}.jpg`} alt={`Servicio de ${service.label.toLowerCase()} — imagen del sitio Jotamotors`} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw" /><span>0{index + 1}</span></div><div className="jm-service-content"><p className="jm-eyebrow">{service.label}</p><h3>{service.title}</h3><p>{service.text}</p><a href={whatsapp(service.message)} target="_blank" rel="noopener noreferrer">{service.cta}<Icon name="arrow" /></a></div></article>)}</div><div className="jm-service-bottom"><p>¿No ves lo que necesitas? Cuéntanos qué le pasa a tu auto.</p><a href={whatsapp("Hola Jotamotors, quiero consultar si realizan el siguiente servicio para mi vehículo:")} target="_blank" rel="noopener noreferrer">Consultar otro servicio <Icon name="arrow" /></a></div></div></section>

        <section className="jm-section" id="taller"><div className="jm-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="jm-workshop-images"><div className="jm-workshop-main"><Image src="/landing/taller.jpg" alt="Interior del taller Jotamotors con vehículos y elevadores" fill sizes="(max-width: 1023px) 100vw, 50vw" /></div><div className="jm-workshop-inset"><Image src="/landing/equipo.jpg" alt="Fotografía de Jotamotors publicada en su sitio original" fill sizes="(max-width: 767px) 40vw, 240px" /></div><div className="jm-workshop-tag"><Icon name="pin" /><span>ESTAMOS EN CONCÓN<br /><b>Av. Borgoño 25600</b></span></div></div><div><p className="jm-eyebrow">PERSONAS REALES. UN TALLER CERCA.</p><h2>Deja tu auto.<br /><span className="jm-muted-heading">Llévate tranquilidad.</span></h2><p className="jm-body">Detrás de cada auto hay alguien que lo necesita para trabajar, moverse y cuidar a los suyos. Por eso, en Jotamotors la atención es personalizada.</p><div className="jm-reasons">{[["Que te escuchen", "Cuéntanos qué notas y qué necesitas resolver."], ["Que puedas preguntar", "Consulta el alcance, el presupuesto y el tiempo estimado del servicio."], ["Que sepas dónde encontrarnos", "Un taller en Concón para tu próxima mantención y las que vienen."]].map(([title, copy]) => <div key={title}><Icon name="check" /><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div><a href={map} target="_blank" rel="noopener noreferrer" className="jm-text-link">Conoce cómo llegar <Icon name="arrow" /></a></div></div></section>

        <section id="opiniones" className="jm-section jm-reviews"><div className="jm-container"><div className="jm-section-heading"><div><p className="jm-eyebrow">LA CONFIANZA SE GANA EN EL TALLER</p><h2>Lo que dicen quienes<br />ya nos eligieron.</h2></div><a className="jm-text-link" href="https://www.jmotorsconcon.com/" target="_blank" rel="noopener noreferrer">Opiniones del sitio original <Icon name="arrow" /></a></div><div className="grid gap-5 md:grid-cols-3">{[["CS", "Chiu-Hui Sun Lin", "Super buena atención, rápida, expedita, muy amables y atentos."], ["GH", "Gabriel Hormazabal", "Servicio profesional y de calidad"], ["AA", "Addiez Arriagada", "Buen taller atencion de calidad 10/10"]].map(([initials, name, quote]) => <figure className="jm-review" key={name}><span className="jm-review-quote" aria-hidden="true">“</span><blockquote>{quote}</blockquote><figcaption><span className="jm-avatar">{initials}</span><span><b>{name}</b><small>Cliente de Jotamotors</small></span></figcaption></figure>)}</div></div></section>

        <section className="jm-section jm-process"><div className="jm-container"><p className="jm-eyebrow">DEL PRIMER MENSAJE A TU VISITA</p><h2>Agendar no debería<br />ser otra complicación.</h2><div className="jm-steps grid gap-8 md:grid-cols-3">{[["01", "Cuéntanos qué pasa", "Envíanos la marca, el modelo y el motivo de tu consulta por WhatsApp."], ["02", "Coordinamos contigo", "Consulta el servicio y elige una hora según la disponibilidad del taller."], ["03", "Trae tu auto", "Con la hora confirmada, te esperamos en Av. Borgoño 25600, Concón."]].map(([n, title, copy]) => <div key={n}><span className="jm-step-number">{n}</span><h3>{title}</h3><p>{copy}</p></div>)}</div><WhatsAppCTA>Dar el primer paso por WhatsApp</WhatsAppCTA></div></section>

        <section id="preguntas" className="jm-section jm-faq"><div className="jm-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="jm-eyebrow">ANTES DE AGENDAR</p><h2>Las dudas también<br />las revisamos.</h2><p className="jm-body">Si necesitas saber algo más, estamos a un mensaje.</p></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="jm-final" id="contacto"><Image src="/landing/hero.jpg" fill sizes="100vw" alt="" className="jm-final-photo" /><div className="jm-container relative z-10"><p className="jm-eyebrow">TU PRÓXIMO KILÓMETRO, CON MÁS TRANQUILIDAD</p><h2>Tu auto tiene algo que decir.<br /><span>Vamos a revisarlo.</span></h2><p>Sal de la duda. Cuéntanos qué necesitas y coordinemos tu visita.</p><WhatsAppCTA>Agendar mi revisión por WhatsApp</WhatsAppCTA><p className="jm-microcopy">La hora se confirma directamente con nuestro equipo.</p></div></section>
      </main>
      <footer className="jm-footer"><div className="jm-container"><div className="grid gap-9 md:grid-cols-[1.3fr_1fr_1fr]"><div><a href="#inicio" className="jm-logo" aria-label="Jotamotors, volver al inicio"><Image src="/landing/logo.png" alt="JotaMotors Servicio Automotriz" width={784} height={154} /></a><p>Mecánica automotriz.<br />Cerca de ti. Cerca de tu auto.</p></div><div><h3>VEN AL TALLER</h3><a href={map} target="_blank" rel="noopener noreferrer">Av. Borgoño 25600<br />Concón, Chile ↗</a><a href="tel:+56991318078">Teléfono: +56 9 9131 8078</a></div><div><h3>CONVERSEMOS</h3><a href={whatsapp()} target="_blank" rel="noopener noreferrer">Agendar por WhatsApp ↗</a><a href="mailto:jotamotors.concon@gmail.com">jotamotors.concon@gmail.com</a></div></div><div className="jm-footer-bottom"><span>© {new Date().getFullYear()} Jotamotors · Servicio automotriz</span><a href="#inicio">Volver arriba ↑</a></div></div></footer>
      <div className="jm-mobile-cta sm:hidden"><WhatsAppCTA message={selectedMessage}>Agendar por WhatsApp</WhatsAppCTA></div><a className="jm-floating-wa hidden sm:flex" href={whatsapp(selectedMessage)} target="_blank" rel="noopener noreferrer" aria-label="Hablar con Jotamotors por WhatsApp"><Icon name="whatsapp" /></a>
    </div>
  );
}
