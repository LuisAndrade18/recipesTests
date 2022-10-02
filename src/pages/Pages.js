import React, {useState} from 'react'
import Main from '../components/main/Main'
import RedVelvet from './recipes/RedVelvet'
import Pizza from './recipes/Pizza'
import Peanut from './recipes/Peanut'

const Pages = () => {

  const [page, setPage] = useState('')

  const RV = () => {
    setPage('redvelvet')
  }

  const Pizz = () => {
    setPage('pizza')
  }

  const Pean = () => {
    setPage('peanut')
  }
  
  const ShowPage = () => {
    if (page === 'redvelvet') {
      return <RedVelvet/>
    } else if (page === 'pizza') {
      return <Pizza />;
    } else if (page === 'peanut') {
      return <Peanut />;
    } else {
      return <Main />;
    }
  }

  return (
    <div>
      {ShowPage()}
    </div>
  );
}

export default Pages