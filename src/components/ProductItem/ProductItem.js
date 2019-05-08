import React, { Component } from "react";
import "./ProductItem.less";
import { Card } from "antd";

const { Meta } = Card;

class ProductItem extends Component {
  render() {
    return (
      <Card
        hoverable
        style={{ margin: 20}}
        key={this.props.key}
        cover={
          <img
            alt={this.props.productName}
            src={this.props.image}
          />
        }
      >
        <Meta title={this.props.productName} description={this.props.price} />
      </Card>
    );
  }
}

export default ProductItem;
