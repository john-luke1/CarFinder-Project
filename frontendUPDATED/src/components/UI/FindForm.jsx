import React, { useState } from "react";
import "../../style/find-form.css";
import "../../style/availablecar.css";
import carData from '../../data/carData'; 
import modelData from '../../data/modelData';
import { Form, FormGroup, Button, Input, Container, Alert } from "reactstrap";
import { Link } from "react-router-dom";

const FindForm = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [showWarning, setShowWarning] = useState(false);


  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    setShowWarning(false); 
    filterCars(value, maxPrice);
    
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    setShowWarning(false); 
    filterCars(minPrice, value);
  };

 
  const parsePrice = (price) => {
    return parseFloat(price.replace(/,/g, ''));
  };

  const filterCars = (minPrice, maxPrice) => {
    const min = minPrice ? parsePrice(minPrice) : null;
    const max = maxPrice ? parsePrice(maxPrice) : null;

    if (min === null && max === null) {
      setFilteredCars([]);
      return;
    }

    const allCarData = [...carData, ...modelData];

    const filtered = allCarData.filter((car) => {
      const price = parsePrice(car.price);
      const matchesMinPrice = min === null || price >= min;
      const matchesMaxPrice = max === null || price <= max;
      return matchesMinPrice && matchesMaxPrice;
    });

    const sortedFilteredCars = filtered.sort((a, b) => {
      return parsePrice(a.price) - parsePrice(b.price);
    });

    setFilteredCars(sortedFilteredCars);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!minPrice && !maxPrice) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    filterCars(minPrice, maxPrice);
  };

  return (
    <Container>
      <Form className="find-form" onSubmit={handleSubmit}>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
            <Input
              type="text"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </FormGroup>

          <FormGroup className="form__group">
            <Input
              type="text"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </FormGroup>

          <FormGroup className="form__group">
            <Button type="submit" className="btn find__car-btn">
              Find Car
            </Button>
          </FormGroup>
        </div>
      </Form>

      {showWarning && (
        <Alert color="warning" className="mt-3">
          Please enter at least one price range to find cars.
        </Alert>
      )}

{filteredCars.length > 0 && (
        <div className="results">
          <h3>Available Cars</h3>
          <ul>
            {filteredCars.map((car) => (
              <li key={car.id}>
                {car.modelName ? (
             <Link to={`/model/${car.id}`}>
          <img src={car.imgUrl} alt={car.modelName} />
                    {car.modelName} ₱{car.price}
                  </Link>
                ) : (
                  <Link to={`/cars/${car.carName}`}>
                    <img src={car.imgUrl} alt={car.carName} />
                    {car.carName} ₱{car.price}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {filteredCars.length === 0 && (minPrice || maxPrice) && (
        <div className="no-results">No cars found in this price range.</div>
      )}
    </Container>
  );
};

export default FindForm;