import React from 'react'
import { Layout} from 'antd';
import Sidebar from './components/Sidebar'
import Home from './views/Home'
import './index.css';
const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header className="navbar" style={{paddingLeft:20, verticalAlign:'bottom'}}>
          <img src={process.env.PUBLIC_URL + '/advotics.png'} width="300px" alt="advotics"/>
        </Header>
        <Layout>
          <Sidebar/>
          <Layout style={{ padding: '0 0px 0px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 10 ,
                margin: 0,
                minHeight:'90vh'
              }}
            >
              <Home/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
