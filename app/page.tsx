'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Globe2,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const products = [
  { title: 'Cuenta Nómina', text: 'Tu nómina, con más ventajas cada mes.', action: 'Descubrir cuenta' },
  { title: 'Hipoteca', text: 'Encuentra la cuota que encaja contigo.', action: 'Calcular hipoteca' },
  { title: 'Cuenta remunerada', text: 'Haz que tus ahorros trabajen por ti.', action: 'Ver condiciones' },
]

const menuItems = ['Cuentas y tarjetas', 'Ahorro e inversión', 'Préstamos', 'Hipotecas', 'Seguros']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-navy px-5 py-2 text-[11px] font-medium tracking-wide text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex gap-6"><span className="text-white">Particulares</span><span>Autónomos</span><span>Empresas</span><span>Banca Privada</span></div>
          <div className="hidden items-center gap-5 md:flex"><span>Accesibilidad</span><span className="flex items-center gap-1"><Globe2 size={13} /> ES <ChevronDown size={12} /></span></div>
        </div>
      </div>

      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button className="flex items-center gap-2" aria-label="Ir a inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-lg font-black text-white">b</span>
            <span className="text-xl font-bold tracking-[-0.05em] text-navy">Bankinter.es</span>
          </button>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-navy lg:flex" aria-label="Navegación principal">
            {menuItems.map((item) => <button key={item} className="flex items-center gap-1 hover:text-orange">{item}<ChevronDown size={14} /></button>)}
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-full p-2 text-navy hover:bg-pale md:block" aria-label="Buscar"><Search size={20} /></button>
            <button className="hidden rounded-full p-2 text-navy hover:bg-pale md:block" aria-label="Localizador"><MapPin size={20} /></button>
            <button onClick={() => setLoginOpen(true)} className="rounded-full bg-orange px-4 py-2.5 text-xs font-bold text-white transition hover:bg-orange-dark sm:px-5 sm:text-sm">Acceso clientes</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 text-navy lg:hidden" aria-label="Abrir menú">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border px-5 py-4 lg:hidden"><div className="flex flex-col gap-4 text-sm font-semibold text-navy">{menuItems.map((item) => <button key={item} className="flex justify-between text-left">{item}<ChevronRight size={17} /></button>)}</div></nav>}
      </header>

      <section className="relative overflow-hidden bg-pale">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 py-16 md:py-24 lg:flex-row lg:items-center lg:px-8 lg:py-28">
          <div className="relative z-10 max-w-2xl lg:w-[55%]">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange"><Sparkles size={15} /> Diseñada para tu vida</p>
            <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.055em] text-navy sm:text-6xl lg:text-7xl">Tus planes cambian.<br /><span className="text-orange">Tu banco también.</span></h1>
            <p className="mt-7 max-w-lg text-pretty text-lg leading-7 text-muted-foreground">Soluciones sencillas para que tomes decisiones con confianza. Más cerca de lo que necesitas, cada día.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button className="rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-navy/90">Conoce nuestras cuentas <ArrowRight className="ml-2 inline" size={17} /></button><button className="rounded-full border border-navy/20 bg-white px-6 py-3.5 text-sm font-bold text-navy hover:bg-white/70">Te llamamos</button></div>
          </div>
          <div className="relative min-h-[290px] w-full overflow-hidden rounded-[2rem] bg-orange lg:min-h-[410px] lg:w-[45%]">
            <div className="absolute right-[-8%] top-[-12%] h-[115%] w-[72%] rounded-[50%] border-[28px] border-white/20" />
            <div className="absolute bottom-8 left-7 right-7 rounded-2xl bg-white p-5 shadow-xl sm:left-10 sm:right-10"><div className="mb-3 flex items-center justify-between text-xs font-semibold text-muted-foreground"><span>Cuenta remunerada</span><span className="rounded-full bg-pale px-2 py-1 text-orange">Novedad</span></div><div className="flex items-end justify-between"><strong className="text-4xl tracking-tight text-navy">2,50<span className="text-xl">% TAE</span></strong><ArrowRight className="text-orange" size={22} /></div><p className="mt-2 text-xs text-muted-foreground">Durante los primeros 12 meses</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><div className="mb-9 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">Elige tu próximo paso</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl">Lo que necesitas, claro.</h2></div><button className="hidden items-center gap-1 text-sm font-bold text-navy md:flex">Ver todo <ArrowRight size={16} /></button></div><div className="grid gap-4 md:grid-cols-3">{products.map((product, index) => <article key={product.title} className={`group flex min-h-[240px] flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1 ${index === 1 ? 'bg-navy text-white' : 'bg-pale text-navy'}`}><div><span className={`text-xs font-bold uppercase tracking-wider ${index === 1 ? 'text-orange-light' : 'text-orange'}`}>0{index + 1}</span><h3 className="mt-8 text-2xl font-bold tracking-tight">{product.title}</h3><p className={`mt-2 max-w-xs text-sm leading-6 ${index === 1 ? 'text-white/70' : 'text-muted-foreground'}`}>{product.text}</p></div><button className="mt-8 flex items-center gap-2 text-sm font-bold">{product.action}<ArrowRight size={16} className="transition group-hover:translate-x-1" /></button></article>)}</div></section>

      <section className="border-y border-border bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between lg:px-8"><div className="flex items-start gap-4"><ShieldCheck className="mt-1 text-orange" size={26} /><div><h2 className="font-bold text-navy">La tranquilidad de tenerlo todo controlado</h2><p className="mt-1 text-sm text-muted-foreground">Gestiona tus finanzas de forma segura desde cualquier lugar.</p></div></div><button className="flex items-center gap-2 text-sm font-bold text-navy">Descubre Banca Online <ArrowRight size={16} /></button></div></section>

      <footer className="bg-navy px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-2 text-white"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange font-black">b</span><span className="font-bold">Bankinter.es</span></div><div className="flex flex-wrap gap-5"><span>Privacidad</span><span>Seguridad</span><span>Ayuda</span><span>© 2026 Bankinter.es</span></div></div></footer>

      {loginOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-5" role="dialog" aria-modal="true" aria-labelledby="login-title"><div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-orange">Banca Online</p><h2 id="login-title" className="mt-2 text-2xl font-bold text-navy">Accede a tu espacio</h2></div><button onClick={() => setLoginOpen(false)} aria-label="Cerrar" className="rounded-full p-2 text-muted-foreground hover:bg-pale"><X size={20} /></button></div><label className="mt-7 block text-sm font-semibold text-navy">Usuario<input className="mt-2 w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-orange" placeholder="Introduce tu usuario" /></label><button onClick={() => setLoginOpen(false)} className="mt-5 w-full rounded-full bg-orange py-3.5 text-sm font-bold text-white hover:bg-orange-dark">Continuar <ArrowRight className="ml-1 inline" size={16} /></button><p className="mt-5 text-center text-xs text-muted-foreground">¿Necesitas ayuda para acceder?</p></div></div>}
    </main>
  )
}
