import React from 'react'
import Card from './Card'

const Container = (props) => {
  console.log("Container -> props", props)

  return (
    <div className='cardContainer'>
      {props.data.map(data => { return <Card data={data} key={data.id} /> })}
    </div>
  )
}

export default Container
