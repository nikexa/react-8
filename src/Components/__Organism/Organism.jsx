import React from 'react'
import '../__Organism/Organism.css'
import LeftSideMolecul from '../__Molecules/LeftSide/LeftSideMolecul'
import RightSideMolecul from '../__Molecules/RightSide/RightSideMolecul'

const Organism = () => {
  return (
    <div className='OrganismDiv'>
        <LeftSideMolecul />
        <RightSideMolecul />
    </div>
  )
}

export default Organism