import React from 'react'
import { Container } from 'reactstrap'
import '../../style/commosection.css'

const CommonSection = ({title}) => {
  return <section className='common_section'>
    <Container className='text-center'>
        <h1 className='textt-light'>{title}</h1>
    </Container>
  </section>
}

export default CommonSection
