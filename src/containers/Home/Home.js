import React, { Component } from "react";
import { Pagination, Col, Row } from "antd";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import ProductItem from "../../components/ProductItem/ProductItem";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";

let STATE = {
  limit: 10,
  offset: 0,
  keyword: ""
};

class Home extends Component {
  state = STATE;

  componentDidMount() {
    this.props.onInitProducts(this.state.limit, this.state.offset, "");
  }

  onShowSizeChange = (current, pageSize) => {
    this.setState({
      limit: pageSize
    });
    this.props.onInitProducts(
      this.state.limit,
      this.state.offset,
      this.state.keyword
    );
  };

  onChange = (current, pageSize) => {
    this.setState({
      offset: current
    });
    this.props.onInitProducts(
      this.state.limit,
      this.state.offset,
      this.state.keyword
    );
  };

  render() {
    const products = {
      ...this.props.prods
    };

    return (
      <div style={{ background: "#ECECEC", padding: "1px" }}>
        <Row style={{marginBottom: 20}}>
          <Header />
        </Row>
        <Row>
          
          <Col span={5} style={{}}>
            <Menu />
          </Col>
          <Col span={19}>
            <Row>
              {Object.keys(products).map(igKey => {
                return (
                  <Col key={igKey} span={6}>
                    <ProductItem
                      image={products[igKey].image}
                      productName={products[igKey].productName}
                      price={`$${products[igKey].price}`}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row style={{ margin: "auto", textAlign: "center" }}>
              <Pagination
                showSizeChanger
                onShowSizeChange={this.onShowSizeChange}
                onChange={this.onChange}
                defaultCurrent={6}
                total={500}
              />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prods: state.product.products,
    STATUS: state.product.STATUS,
    totalItems: state.product.totalItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitProducts: (limit, offset, keyword) =>
      dispatch(actions.fetchAllProducts(limit, offset, keyword))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
