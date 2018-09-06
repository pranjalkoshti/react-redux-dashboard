import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'; 
import { Layout ,Menu,Badge } from 'antd';
import Dashboard from './pages/dashboard/dashboard';
import Company from './pages/company/company';
import CaseStudies from './pages/caseStudies/caseStudies';
import Users from './pages/users/users';
import Link from 'react-router-dom/Link';
const { Header, Content } = Layout;


class App extends Component {
  render() {
    return (
<div>
<BrowserRouter>
      <Layout>
        <Header style={{ background: '#e7e5e5', padding: 0 }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ background: '#e7e5e5',lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Company</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Dashboard">Dashboard
              <Badge count={84} >
               
              </Badge>
            </Link>
            </Menu.Item>
            <Menu.Item key="3"><Link to="/CaseStudies">Case Studies</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/Users">Users</Link></Menu.Item>
            <Menu.Item key="5" style={{ float:'right'}}>Users</Menu.Item>
          </Menu>
      </Header>
        <Layout style={{background:'#ffffff'}}>
          <Content>
            <Switch>
                <Route path="/" exact component={Company} />
                <Route path="/Dashboard" exact component={Dashboard} />
                <Route path="/CaseStudies" exact component={CaseStudies} />
                <Route path="/Users" exact component={Users} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
</div>
    );
  }
}

export default App;
