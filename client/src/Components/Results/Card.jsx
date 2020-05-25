import React from 'react'

const Card = (props) => {
  console.log("Card -> props", props)
  return (
    <div>
      {props.data.company}
    </div>
  )
}

export default Card
