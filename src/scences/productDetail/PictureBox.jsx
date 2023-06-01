import React from 'react'

export default function PictureBox() {
  
   return (
<div id="myCarousel" className="carousel slide cntr">
  <div className="carousel-inner">
    <div className="item active">
      <a href="#st"> <img src="/app/assets/img/a.jpg" alt="img1" style={{width: '100%'}} /></a>
    </div>
    <div className="item">
      <a href="#st"> <img src="/app/assets/img/b.jpg" alt="img1" style={{width: '100%'}} /></a>
    </div>
    <div className="item">
      <a href="#st"> <img src="/app/assets/img/e.jpg" alt="img1" style={{width: '100%'}} /></a>
    </div>
  </div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
</div>

  )
}
