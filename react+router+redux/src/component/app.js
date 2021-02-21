import React,{Component} from 'react';
import { HashRouter,Switch,Route,Link } from "react-router-dom";
import  About  from "./page/about";
import  Home  from "./page/home";
import  Mine  from "./page/mine";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class App extends Component{
      render(){
        //   return <HashRouter>
        //       <div>
        //           <Link to="/about">>about</Link>
        //           <Link to="/">>home</Link>
        //           <Link to="/mine">>mine</Link>
        //       </div>
            //   <Switch>
            //       <Route path='/' exact component={Home}/>
            //       <Route path='/about' exact component={About}/>
            //       <Route path='/mine' exact component={Mine}/>           
            //   </Switch>
        //   </HashRouter>
        return<HashRouter>
         <Layout>
        <Sider
        
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
              <Icon type="video-camera" />
              <span className="nav-text"><Link to="/">>主页</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="upload" />
              <span className="nav-text"><Link to="/mine">>我的</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span className="nav-text"><Link to="/about">>关于</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/mine' exact component={Mine}/> 
            <Route path='/about' exact component={About}/>            
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>北京元年</Footer>
        </Layout>
      </Layout>
      </HashRouter>
      }

      
}
export default App;