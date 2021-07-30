import React from 'react';
import { Form, Input, Button, Layout, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loadLogin } from '..//redux/actions/actionAuth';
const { Footer, Content } = Layout;

const SignIn = ({ history }) => {
   const dispatch = useDispatch();
   const onFinish = (values) => {
      dispatch(loadLogin({ data: values, history }));
   };

   return (
      <Content
         align='middle'
         style={{ minHeight: '100vh', backgroundColor: '#29625f' }}
      >
         <Row justify='center'>
            <Col>
               <Card
                  title={<h2>Вход в личный кабинет</h2>}
                  style={{
                     marginTop: '25vh',
                     width: '25vw',
                     borderRadius: '5%',
                  }}
               >
                  <Row justify='center'>
                     <Col>
                        <Form name='normal_login' onFinish={onFinish}>
                           <Form.Item
                              name='login'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Логин обязателен',
                                 },
                              ]}
                           >
                              <Input
                                 prefix={
                                    <UserOutlined className='site-form-item-icon' />
                                 }
                                 placeholder='Логин'
                              />
                           </Form.Item>
                           <Form.Item
                              name='password'
                              rules={[
                                 {
                                    required: true,
                                    message: 'Пароль обязателен',
                                 },
                              ]}
                           >
                              <Input
                                 prefix={
                                    <LockOutlined className='site-form-item-icon' />
                                 }
                                 type='password'
                                 placeholder='Пароль'
                              />
                           </Form.Item>

                           <Form.Item>
                              <Button
                                 type='primary'
                                 htmlType='submit'
                                 className='login-form-button'
                              >
                                 Войти
                              </Button>
                           </Form.Item>
                        </Form>
                     </Col>
                  </Row>
               </Card>
            </Col>
         </Row>
      </Content>
   );
};

export default SignIn;
