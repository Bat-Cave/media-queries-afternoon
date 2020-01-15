import React, { Component } from 'react'

export default class Services extends Component {
  render(){
    return(
      <div className='services-container'>
        <div className='title'>
          <a id='services'></a>
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="section-cards">
          <div className='card'>
            <img src='https://media-exp2.licdn.com/dms/image/C5603AQFOPvG9_IhrgA/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=Ol6QwzcmGUErsHL68NdRhXMk-CXd0lzy-uVJ3dEIg9o' width='150px' />
            <h5>E-Commerce</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className='card'>
            <img src='https://media-exp2.licdn.com/dms/image/C5603AQGMhpYiwMW4Yw/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=6G5VoQH5xN35n5Ilj8Uo-mYhiCBv3zLaaOzfe2l4hls' width='150px' />
            <h5>Responsive Design</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className='card'>
            <img src='https://media-exp2.licdn.com/dms/image/C5603AQHEgxctXmreTg/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=sjYyVYUD1IgrpC17K6_Tmn0FyJvLVfKQlWgkJkqIzNg' width='150px' />
            <h5>Web Security</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </div>
    )
  }
}