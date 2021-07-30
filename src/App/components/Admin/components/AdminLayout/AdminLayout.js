import { Layout, Menu, Tag, Button, Table } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AdminRoutes from "../..//..//..//routes/AdminRoutes";
import { logout } from "../../../../helpers/helpers";
import { LogoutOutlined } from "@ant-design/icons";
import { getUserModules } from "../../../../redux/actions/actionModules";
import ProgressDrawer from "./ProgressDrawer";

import { styles } from "./styles.scss";
// const itemsMenu = [
//   {
//     name: "Все пользователи",
//     route: "/admin/users",
//     icon: <TeamOutlined />,
//     subItems: [
//       { name: "Студенты", route: "/admin/users" },
//       { name: "Динамика студента", route: "/admin/users/dynamics" },
//       { name: "Рейтинг благодарности", route: "/admin/users/rating" },
//     ],
//   },
//   { name: "Модули", route: "/admin/modules", icon: <AppstoreOutlined /> },
//   { name: "Теория", route: "/admin/theory", icon: <BookOutlined /> },
//   { name: "Задачи", route: "/admin/tasks", icon: <CodeOutlined /> },
//   {
//     name: "Чек-листы",
//     route: "/admin/checklists",
//     icon: <AppstoreAddOutlined />,
//   },
//   { name: "Уведомления", route: "/admin/alerts", icon: <BellOutlined /> },
// ];

const AdminLayout = ({ history }) => {
  const { data: data } = useSelector((state) => state.modules.data);

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [dataForDrawer, setDataForDrawer] = useState({});

  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu;

  useEffect(() => {
    dispatch(getUserModules());
  }, []);

  console.log(data);

  const columns = [
    {
      title: "Имя",
      dataIndex: "firstname",
      key: "firstname",
      render: (text, item) => <p>{`${item.firstName} ${item.lastName}`}</p>,
    },
    {
      title: "Модули",
      key: "modules",
      dataIndex: "modules",
      render: (modules) => (
        <>
          {modules &&
            modules.map(({ title, color }) => {
              return (
                <Tag color={color} key={title}>
                  {title.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: (text, item) => (
        <>
          <Button
            onClick={() => {
              setDataForDrawer(item);
              setVisible(true);
            }}
          >
            Прогресс
          </Button>
        </>
      ),
    },
  ];

  const [collapsed, onCollapse] = useState(false);
  return (
    <div className="main-wrapper">
      <div className="bar">
        <Switch>
          <Layout>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={onCollapse}
              width={250}
            >
              <Menu
                mode="inline"
                style={{
                  height: "100%",
                }}
              >
                <Menu.Divider />
                <Menu.Item
                  onClick={() => logout(history)}
                  icon={<LogoutOutlined />}
                >
                  Выход
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: "100vh",
                }}
              >
                <AdminRoutes />
              </Content>
            </Layout>
          </Layout>
        </Switch>
      </div>
      <div className='table'>
      <Table columns={columns} dataSource={data} />
      <ProgressDrawer
        dataForDrawer={dataForDrawer}
        visible={visible}
        setVisible={setVisible}
      />
      </div>
    </div>
  );
};

export default AdminLayout;

const goHistory = (history, url) => history.push(url);

{
  /* {itemsMenu &&
                     itemsMenu.map(({ name, route, subItems, icon }, index) =>
                        subItems ? (
                           <SubMenu key='sub1' icon={icon} title={name}>
                              {subItems &&
                                 subItems.map(({ name, route }, index) => (
                                    <Menu.Item
                                       key={index + '_1'}
                                       onClick={() => goHistory(history, route)}
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
                     )} */
}
