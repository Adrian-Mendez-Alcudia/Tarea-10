import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, theme, } from 'antd';
import TablaProductos from './Components/TablaProductos';
import TablaCategorias from './Components/TablaCategorias';
import TablaClientes from './Components/TablaClientes';
import TablaDireccion  from './Components/TablaDireccion';
import TablaGenero from './Components/TablaGenero';
import TablaSesiones from './Components/TablaSesiones';
import TablaSesionesProductos from './Components/TablaSesionesProductos';
import TablaUsuarios from './Components/TablaUsuarios';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (item: any) => {
    setSelectedKey(item.key);
  };

  const renderContent = () => {
        switch (selectedKey) {
      case '1':
        return <TablaCategorias />;break;
      case '2':
        return <TablaClientes />;break;
      case '3':
        return <TablaDireccion />;break;
      case '4':
        return <TablaGenero />; break;
      case '5':
        return <TablaProductos />; break;
      case '6':
        return <TablaSesiones />; break;
      case '7':
        return <TablaSesionesProductos />; break;
      case '8':
        return <TablaUsuarios />; break;
      default:
        return null;
    }
  };
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>Categorías</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>Clientes</Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>Dirección</Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>Género</Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>Productos</Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}>Sesiones</Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>SesionesProductos</Menu.Item>
          <Menu.Item key="8" icon={<UserOutlined />}>Usuarios</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;