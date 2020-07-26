import React, { Component} from 'react';

class ImagePage extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0}  />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={2}  />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://static.danhgiaxe.com/data/201525/6-bmw-i8-the-bmw-i8-looks-like-no-other-car-on-the-road-today_3295.jpg" alt="First slide" />
              </div>
              <div className="carousel-item active">
                <img className="d-block img-fluid" src="https://choixehop.com/Uploads/logos/07122014/News/20127215533-anh-dep-sieu-xe.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/27/xe_dua_SCG_003S(1).jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        );
    }
}

export default ImagePage;