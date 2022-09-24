import React from 'react';

function Productbox(props) {
  return (
    <div>
      <div className="a-box">
        <div className="a-b-img">
          <img src={props.image} alt="" />
        </div>

        <div className="a-b-text">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vulputate felis sed egestas rutrum.{' '}
          </p>
          <button className="productbox-button">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Productbox;
