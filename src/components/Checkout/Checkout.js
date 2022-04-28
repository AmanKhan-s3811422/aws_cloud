import React, { Form } from "react";

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            creditcard: "",
          };
    
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

  render() {
    return (
      <div className="bookCatalog">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="mainCheckoutContainer">
                <h1>CHECKOUT</h1>
                <br/>
                <h3>Enter your details</h3>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            required={true}
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required={true}
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                        />
                    </div>

                    <br/>
                    <div className="form-group">
                        <input
                            required={true}
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>

                    <br/>
                    <div className="form-group">
                    <input
                        required={true}
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                        required={true}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Address "
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}
                    />
                  </div>
                <br/>

                <hr/>

                <h3>Payment Info</h3>
                <div className="form-group">
                    <input
                        required={true}
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Credit Card number"
                        name="creditcard"
                        value={this.state.creditcard}
                        onChange={this.onChange}
                    />
                  </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;