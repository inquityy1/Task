import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import ItemsService from "../../../services/items.service";
import { required } from "../../shared/required";

import "./updateItem.css";

class UpdateItem extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Input
                name="name"
                className="form-control"
                validations={[required]}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Input
                name="address"
                className="form-control"
                validations={[required]}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Input
                name="price"
                className="form-control"
                validations={[required]}
                type="number"
              />
            </div>

            <div className="form-group top">
              <button className="btn btn-primary btn-block">
                <span>Save</span>
              </button>
            </div>

            <CheckButton style={{ display: "none" }} />
          </Form>
        </div>
      </div>
    );
  }
}

export default UpdateItem;
