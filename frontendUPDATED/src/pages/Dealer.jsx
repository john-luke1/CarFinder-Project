import React from 'react'
import { Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import dealer from '../data/dealerdata'
import DealerItem from '../../src/components/UI/DealerItem'

const Dealer = () => {

  
    return(
    <Helmet title='Dealer'>
    <CommonSection title='Dealers'/>
      <section>
        <Container>
          <Row>
          
            {
              dealer.map(item=> <DealerItem item={item}key={item.id}/>)

            }
          </Row>

        </Container>
      </section>
  </Helmet>
)
}

export default Dealer;
