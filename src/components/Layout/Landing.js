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
                    Iphone 11
                    <br />
                    Starting from $999
                    <Link to="/checkout" className="buyNowButton">
                      Buy Now
                    </Link>
                  </div>
                  <div className="phoneImageContainer">
                    <Link to="/phone">
                      <img
                        className="img-class"
                        src="https://d3tg45pnfc74o1.cloudfront.net/iphone.jpeg"
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
                    Samsung S21
                    <br />
                    $1400
                    <Link to="/checkout" className="buyNowButton">
                      Buy Now
                    </Link>
                  </div>
                  <div className="phoneImageContainer">
                    <Link to="/phone">
                      <img
                        className="img-class"
                        src="https://d3tg45pnfc74o1.cloudfront.net/s21.jpeg"
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
                    Google Pixel
                    <br />
                    $1299
                    <Link to="/checkout" className="buyNowButton">
                      Buy Now
                    </Link>
                  </div>
                  <div className="phoneImageContainer">
                    <Link to="/phone">
                      <img
                        className="img-class"
                        src="https://d3tg45pnfc74o1.cloudfront.net/pixel.jpeg"
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