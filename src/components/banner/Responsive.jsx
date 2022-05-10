import React from 'react'
import hapbith from '../images/hap-birthday.jpeg'
import gitbox from '../images/baner-image.jpeg'
import baner from '../images/banner.webp'


function Responsive() {
  return (
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div class="carousel-inner">
              <div class="carousel-item active citem">
                  
      <img src={baner} alt="Los Angeles" class="d-block w-20" />
    </div>
    <div class="carousel-item citem">
                  <img src={hapbith} alt="Chicago" class="d-block w-20" />
                 
    </div>
    <div class="carousel-item citem">
      <img src={gitbox} alt="New York" class="d-block w-20"/>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
  )
}

export default Responsive