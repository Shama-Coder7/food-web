import React from 'react'
import discoverimg from '../images/discover.png'

function Discover() {
  return (
    <div id="discover">
      <div className="discover-text">
      <h3>DISCOVER</h3>
        <h1>UPCOMING EVENTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          vulputate felis sed egestas rutrum. Proin eu semper ligula, non
          pulvinar urna. Quisque nec felis ac eros finibus efficitur bibendum a
          est. Quisque ante est, malesuada at maximus eu, gravida vitae magna.
          Aenean condimentum nulla non congue faucibus. Maecenas id lectus nibh.
          Cras et erat maximus, viverra dolor id, lacinia enim. Fusce ac arcu
          lobortis, elementum erat nec, facilisis arcu. Etiam viverra blandit
          augue quis eleifend. Nulla nec lorem at ex malesuada auctor.
        </p>
      </div>
      <div className="discover-image">
        <img src={discoverimg} alt='discover'/>
      </div>
    </div>
  )
}

export default Discover