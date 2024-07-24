import { useState } from 'react'
import Header from './Header'
import Card from './Card'
import Data from './Data'

function App() {
  let info = Data.map(card =>{
    return(
      <Card 
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
    )
  })
  return (
    <>
      <Header />
      {info}
    </>
  )
}

export default App
