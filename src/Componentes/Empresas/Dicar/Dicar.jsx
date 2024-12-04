import React from 'react'
import Hero from './Hero'
import FooterDicar from './FooterDicar'
import Header from './Header'
import Nosotros from './Nosotros'
import Sedes from './NuestrasSedes'
import Beneficios from './Beneficios'
import Beneficios2 from './Beneficios2'
import ContainerDicar from './ContainerDicar'
import Testimonios from './Testimonios'

function Dicar() {
  return (
    <div>
    <Header />
    <Hero />
    <ContainerDicar />
    <Nosotros />
    <Beneficios2 />
    <Testimonios />
    <Sedes />
    <FooterDicar />
    </div>
  )
}

export default Dicar