import React from 'react';
import { Layout, Menu, Affix} from 'antd';
import {BarChartOutlined} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
    return (
        <div>
            <Affix offsetTop={0}>
            <Sider collapsed >
                <Menu
                mode="inline"
                defaultSelectedKeys={[]}
                defaultOpenKeys={[]}
                style={{ height: '100vh', borderRight: 0 }}
                >
                <Menu.Item key="sub1" icon={<BarChartOutlined style={{fontSize:'20px', color:'#37b04d'}}/>} title="subnav 1"></Menu.Item>
                </Menu>
            </Sider>
            </Affix>
        </div>
    );
}

export default Sidebar;
