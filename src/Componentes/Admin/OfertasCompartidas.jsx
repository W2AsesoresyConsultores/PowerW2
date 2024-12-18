import React from 'react'
import MenuAdmin from './MenuAdmin'
import HeaderAdmin from './HeaderAdmin'
import JobListCompartido from './JobListCompartido'


function OfertasCompartidas() {
  return (
    <div className="flex flex-col">
        <HeaderAdmin />
        <MenuAdmin />
        <div className="w-full h-screen pl-64  pt-24 flex justify-center">
            <JobListCompartido />
        </div>
        
    </div>
  )
}

export default OfertasCompartidas