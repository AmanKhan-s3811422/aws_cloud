import React, { Component } from "react";
import Header from './Header';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">
                Buy our 3 new classics
              </h1>
              <div className="mainPhoneContainer">
                <div className="firstPhoneContainer">
                  <div className="phoneName">
                    Google Pixel
                    <br/>
                    Starting from $999
                    <Link to="/checkout" className="buyNowButton">
                      Buy Now
                    </Link>
                  </div>
                  <div className="phoneImageContainer">
                    <Link to="/phone">
                      <img
                        className="img-class"
                        src="/pixel.jpeg"
                        alt="Image not found"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/default.jpg";
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              
              <div className="mainPhoneContainer">
                <div className="firstPhoneContainer">
                  <div className="phoneName">
                    Iphone 11 plus
                    <br/>
                    $1400
                    <Link to="/checkout" className="buyNowButton">
                      Buy Now
                    </Link>
                  </div>
                  <div className="phoneImageContainer">
                    <Link to="/phone">
                      <img
                        className="img-class"
                        src="iphone10.jpeg"
                        alt="Image not found"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/default.jpg";
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Phone 3 */}
              
              <div className="mainPhoneContainer">
                <div className="firstPhoneContainer">
                  <div className="phoneName">
                    Iphone 10
                    <br/>
                    $1299
                    <Link to="/checkout" className="buyNowButton">
                      Buy Now
                    </Link>
                  </div>
                  <div className="phoneImageContainer">
                    <Link to="/phone">
                      <img
                        className="img-class"
                        src="iphone9.jpeg"
                        alt="Image not found"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/default.jpg";
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;