import React, { Component } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'; 
import { Layout ,Menu,Badge } from 'antd';
import Dashboard from './pages/dashboard/dashboard';
const { Header, Content } = Layout;


class App extends Component {
  render() {
    return (
<div>
      <Layout>
        <Header style={{ background: '#e7e5e5', padding: 0 }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ background: '#e7e5e5',lineHeight: '64px' }}
          >
            <Menu.Item key="1">Company</Menu.Item>
            <Menu.Item key="2">Dashboard
            <Badge count={84} >
              <a href="#" className="head-example" />
            </Badge>
            </Menu.Item>
            <Menu.Item key="3">Case Studies</Menu.Item>
            <Menu.Item key="4">Users</Menu.Item>
            <Menu.Item key="5" style={{ float:'right'}}>Users</Menu.Item>
          </Menu>
      </Header>
        <Layout style={{background:'#ffffff'}}>
          <Content>
            {/* <BrowserRouter>
                <Route path="/Dashboard" component={Dashboard} />
            </BrowserRouter> */}
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
</div>
    );
  }
}

export default App;
