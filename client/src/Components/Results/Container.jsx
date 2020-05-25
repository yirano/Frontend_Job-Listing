import React from 'react'
import Card from './Card'

const Container = (props) => {
  console.log("Container -> props", props)

  return (
    <div>
      {props.data.map(data => { return <Card data={data} /> })}
    </div>
  )
}

export default Container
