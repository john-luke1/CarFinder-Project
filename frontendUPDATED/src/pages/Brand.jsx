import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../style/brandcat.css'
import img01 from '../assests/all-images/cars-img/teslabrand.png'
import img02 from '../assests/all-images/cars-img/toyotabrandlogo.png'
import img03 from '../assests/all-images/cars-img/bmwicon.png'
import img04 from '../assests/all-images/cars-img/nissanlogo.png'
import ModelCard from '../components/UI/ModelCard'
import modelData from '../data/modelData'
import { useEffect, useState } from 'react'

const Brand = () => {

const [category, setCategory] = useState('ALL')
const [allModelData, setAllModel] = useState (modelData)
const [sortingOption, setSortingOption] = useState('default');

// Function to handle sorting
const handleSortChange = (event) => {
  const option = event.target.value;
  setSortingOption(option);
};

const parsePrice = (priceString) => {
  return parseInt(priceString.replace(/,/g, ''));
};

//category
useEffect(()=>{
  if(category ==='ALL'){
    setAllModel(modelData) 
    
  }  
  if (category ==='TESLA'){
    const filteredModelData= modelData.filter(item => item.category === 'Tesla')
    setAllModel(filteredModelData)
  }
  if (category ==='TOYOTA'){
    const filteredModelData= modelData.filter(item => item.category === 'Toyota')
    setAllModel(filteredModelData)
  }
  if (category ==='BMW'){
    const filteredModelData= modelData.filter(item => item.category === 'BMW')
    setAllModel(filteredModelData)
  }
  if (category ==='NISSAN'){
    const filteredModelData= modelData.filter(item => item.category === 'Nissan')
    setAllModel(filteredModelData)
  }

},[category]);


//sorting
useEffect(() => {
  let sortedModels = [...allModelData];
  switch (sortingOption) {
    case 'ascending':
      sortedModels.sort((a, b) => (a.modelName && b.modelName) ? a.modelName.localeCompare(b.modelName) : 0);
      break;
    case 'descending':
      sortedModels.sort((a, b) => (a.modelName && b.modelName) ? b.modelName.localeCompare(a.modelName) : 0);
      break;
      case 'high-price':
        sortedModels.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'low-price':
        sortedModels.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      break;
    default:
      break;
  }
  setAllModel(sortedModels);
}, [sortingOption, allModelData]);


    return(
    <Helmet title='Brand'>
    <CommonSection title='Brands'/>
      <section>
        <Container>
          <Row>
          <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
              <div className="sorting__widget">
                <select className="w-100" onChange={handleSortChange}>
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            
          </Row>

        </Container>
      </section>


      <section>
         <Container>
          <Row>
            <Col lg='12'>
            <div className='model_text'>
                <h2>MODELS</h2>
            </div>
            </Col>
            <Col lg='12'>
            <div className='model_category d-flex align-items-center justify-content-center gap-2'>
              <button className={`all_btn ${category === 'ALL' ? 'modelBtnActive' :'' }`} onClick={()=> setCategory('ALL')}>All</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'TESLA' ? 'modelBtnActive' :''}`} onClick={()=> setCategory('TESLA')}>  <img src={img01} alt=''/>Tesla</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'TOYOTA' ? 'modelBtnActive' :''}`} onClick={()=> setCategory('TOYOTA')}><img src={img02} alt=''/>Toyota</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'BMW' ? 'modelBtnActive' :''}`} onClick={()=> setCategory('BMW')}><img src={img03} alt=''/>BMW</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'NISSAN' ? 'modelBtnActive' :''}`} onClick={()=> setCategory('NISSAN')}><img src={img04} alt=''/>Nissan</button>
            </div>
            </Col>
            {
              allModelData.map(item=>(
                <ModelCard item={item} key={item.id} />
              ))}
            
             
          </Row>
          </Container> 
      </section>
  </Helmet>
)
}

export default Brand