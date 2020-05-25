import React from 'react'
import { Spinner } from 'reactstrap'

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Spinner color="info" />
    </div>
  )
}

export default Loading
