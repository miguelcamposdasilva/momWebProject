import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Parques from './components/Parques'
import Servicios from './components/Servicios'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from './components/Footer'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import TerminosCondiciones from './pages/TerminosCondiciones'

function Inicio() {
  return (
    <main>
      <Hero />
      <Parques />
      <Servicios />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}