import React from 'react';
import { Layout, Menu } from 'antd';
import { Switch } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { logout } from '..//..//..//..//helpers/helpers';
import ClientRoutes from '../../../../routes/ClientRoutes';
const { SubMenu } = Menu;
const { Header, Content } = Layout;
const itemsMenu = [
   {
      name: 'Имя Фамилия',
      route: '/user',
      subItems: [
         { name: 'Настройки', route: '/user/settings' },
         { name: 'Выйти', route: '/login' },
      ],
   },
];
const ClientLayout = ({ history }) => {
   return (
      <Switch>
         <Layout>
            <Header>
               <div className='logo' />
               <Menu
                  style={{ height: '100%', textAlign: 'right' }}
                  mode='horizontal'
               >
                  {itemsMenu &&
                     itemsMenu.map(({ name, route, subItems, icon }, index) =>
                        subItems ? (
                           <SubMenu key='sub1' icon={icon} title={name}>
                              {subItems &&
                                 subItems.map(({ name, route }, index) => (
                                    <Menu.Item
                                       key={index + '_1'}
                                       onClick={(key) =>
                                          key === 2
                                             ? logout(history)
                                             : goHistory(history, route)
                                       }
                                    >
                                       {name}
                                    </Menu.Item>
                                 ))}
                           </SubMenu>
                        ) : (
                           <Menu.Item
                              icon={icon}
                              key={index}
                              onClick={() => goHistory(history, route)}
                           >
                              {name}
                           </Menu.Item>
                        )
                     )}
               </Menu>
            </Header>
            <Content
               style={{
                  padding: 24,
                  margin: 0,
                  minHeight: '90vh',
               }}
            >
               <ClientRoutes />
            </Content>
         </Layout>
      </Switch>
   );
};

export default ClientLayout;

const goHistory = (history, url) => history.push(url);
