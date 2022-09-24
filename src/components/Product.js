import React from 'react';
import Productbox from './Productbox';
import burger1 from '../images/burger1.png';
import burger2 from '../images/burger2.png';

function Product() {
  return (
    <div id="products">
    <span style={{backgroundColor: 'yellow'}}><b>ALWAYS TASTY BURGER</b></span>
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        vulputate felis sed egestas rutrum. Proin eu semper ligula, non pulvinar
        urna. <br />Quisque nec felis ac eros finibus efficitur bibendum a est.
        Quisque ante est, malesuada at maximus eu, gravida vitae magna. Aenean
        condimentum nulla non congue faucibus. <br />Maecenas id lectus nibh. Cras et
        erat maximus, viverra dolor id, lacinia enim. Fusce ac arcu lobortis,
        elementum erat nec, facilisis arcu. <br />Etiam viverra blandit augue quis
        eleifend. Nulla nec lorem at ex malesuada auctor.
      </p>
      <div className="a-container">
        <Productbox image={burger1} title="burger-1" />
        <Productbox image={burger2} title="burger-2" />
        <Productbox image={burger1} title="burger-1" />
      </div>
    </div>
  );
}

export default Product;
