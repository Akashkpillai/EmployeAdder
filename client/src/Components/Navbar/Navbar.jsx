import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu} from 'antd';
import { useState } from 'react';
import Home from '../Home/Home'
import {useUserAuth} from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
const { Header, Content, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Logout', '1', <UserOutlined />),
];
const App = () => {

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const {logout} = useUserAuth()
   
  async function signout(){
    try {
      await logout()
      navigate('/')
      toast.success("Logged out!")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" onClick={signout} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Employe</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Home/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;