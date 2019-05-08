import React from "react";
import "./Header.less";
import { Card, Avatar } from "antd";

const { Meta } = Card;

class Header extends React.Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Card style={{ width: 'auto', marginTop: 0 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    );
  }
}

export default Header;
