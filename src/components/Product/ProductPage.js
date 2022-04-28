import React from "react";

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="book-cover-image-container">
                  <img
                    src="https://sept-bookcatalog.s3.ap-southeast-2.amazonaws.com/Bookeroo-logo.png"
                    alt="Image not found"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;