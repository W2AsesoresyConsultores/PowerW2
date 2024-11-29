import React from 'react'
import Hero from './Hero'
import FooterDicar from './FooterDicar'
import Header from './Header'
import Nosotros from './Nosotros'
import Sedes from './NuestrasSedes'
import Beneficios from './Beneficios'
import Beneficios2 from './Beneficios2'
import ContainerDicar from './ContainerDicar'

function Dicar() {
  return (
    <div>
    <Header />
    <Hero />
    <h1 className='text-3xl font-semibold text-gray-800 text-center my-8' >Ofertas Laborales Dicar</h1>
    <ContainerDicar />
    <Beneficios2 />
    <Nosotros />
    <Sedes />
    <FooterDicar />
    </div>
  )
}

export default Dicar