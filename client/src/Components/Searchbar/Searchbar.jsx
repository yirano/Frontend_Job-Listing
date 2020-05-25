import React from 'react'
import { Form, Input } from 'reactstrap'


const Searchbar = (props) => {
  return (
    <Form onSubmit={e => props.handleSubmit(e)} className="form">
      <Input type="text" name="search" placeholder="Job Title" value={props.jobTitle} onChange={e => props.handleChange(e)} value={props.search} />
      <Input type="text" name="location" value={props.location} onChange={e => props.handleChange(e)} />
      <Input type="submit" className="button" />
    </Form>
  )
}

export default Searchbar
