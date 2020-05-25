import React from 'react'

const Card = (props) => {
  return (
    <>
      <a href={props.data.url} target="_blank" rel="noopener noreferrer">
        <div className="card">
          <div className="cardLeft">
            <div className="logo">
              <img src={props.data.company_logo} />
            </div>
            <div className="type">
              <div className="companyName">
                {props.data.company}<br />
              </div>
              <div className='jobTitle'>
                {props.data.title}
              </div>
              <div className="info">
                {props.data.created_at}
                {props.data.type}
                {props.data.location}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default Card
