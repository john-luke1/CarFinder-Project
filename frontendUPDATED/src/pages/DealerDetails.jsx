import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import dealer from '../data/dealerdata';
import '../style/delar-details.css';

const DealerDetails = () => {

    const { slug } = useParams();
    const singleDealerItem = dealer.find(item => item.dealer === slug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleDealerItem]);

    if (!singleDealerItem) {
        return (
            <Helmet title="Dealer Not Found">
                <section>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Dealer Not Found</h2>
                                <p>The dealer you are looking for does not exist.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        );
    }

    return (
        <Helmet title={singleDealerItem.dealer}>
            <div className='details'>
                <Container>
                    <Row>
                        <Col md='12' lg='6'>
                            <div className='Img_details d-flex align_items-center w-100'>
                                <img src={singleDealerItem.imgUrl} alt={singleDealerItem.dealer} className='w-100 d-flex align_items-center' />
                            </div>
                        </Col>
                        <Col md='12' lg='6'>
                                <div className='dealer_info'>
                                    <h2 className='section_title1'>
                                        {singleDealerItem.dealer}
                                    </h2>
                                    <p className='section_description'>
                                        {singleDealerItem.description}
                                    </p>
                                    </div>
                                    <div className='d-flex align_items-center mt-5' style={{ columnGap: '2.9rem' }}>
                                    <span className='d-flex align-items-center gap-2 section_brand'>
                                        <i className='ri-building-2-line' style={{ color: 'ActiveCaption' }}></i>{singleDealerItem.brand}
                                    </span>
                                    <span className='d-flex align-items-center gap-1 section_address'>
                                        <i className='ri-shake-hands-fill' style={{ color: 'ActiveCaption' }}></i>{singleDealerItem.address}
                                    </span>
                                    <span className='d-flex align-items-center gap-1 section_contact'>
                                        <i className='ri-contacts-fill' style={{ color: 'ActiveCaption' }}></i>{singleDealerItem.contact}
                                    </span>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </Helmet>
    );
};

export default DealerDetails;
