import React from 'react'
import ContainerDicar from './ContainerDicar'
import Hero from './Hero'
import Cultura from './Cultura'
import FooterDicar from './FooterDicar'
import Header from './Header'
import About from './About'
import Beneficios from './Beneficios'

function Dicar() {
  return (
    <div>
    <Header />
    <Hero />
    <Beneficios />
    
    <ContainerDicar />
    <FooterDicar />
    
    </div>
  )
}

export default Dicar