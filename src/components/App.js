import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button, Row, Col } from 'antd';
import UserListPage from './UserListPage';  

const { Content} = Layout;

const App = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/user/create');
  };

  const handleEditUser = (userId) => {
    if (Number.isInteger(userId)) {
      navigate(`/user/${userId}`);
    } else {
      console.error('User ID is not an integer:', userId);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '0 16px' }}>
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Col span={20}>
            <h2>Users</h2>
            <Button type="primary" onClick={handleCreateClick} style={{ marginBottom: '20px' }}>
              Create User
            </Button>
            <UserListPage onEditUser={handleEditUser} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
