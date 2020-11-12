import React, { Component } from 'react';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
const { Header, Footer, Sider, Content } = Layout;
class admin extends Component {
  render() {
    return (
      <Layout>
        <Sider><LeftNav/></Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default admin;