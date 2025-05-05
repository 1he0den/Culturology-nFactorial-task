import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout, Typography, Button, Card, Space, Divider, Flex } from 'antd';
import { RocketOutlined, GlobalOutlined, TeamOutlined } from '@ant-design/icons';
import Nations from './pages/Nations';
import NationDetail from './pages/NationDetail';
import './App.css';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-section">
        <Title className="hero-title">
          <span className="highlight">Culturology</span>
        </Title>
        <Paragraph className="hero-subtitle">
          Откройте для себя удивительное разнообразие культур мира
        </Paragraph>
        
      </div>
      <div align="center">
        <Flex vertical gap="small" style={{ width: '100%'}}>
          <Button 
            block
            onClick={() => {
              navigate('/nations');

            }}
          >
            Исследовать народы
          </Button>
        </Flex>
      </div>

      <Divider orientation="center" className="divider">
        <TeamOutlined /> Почему это важно
      </Divider>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div className="features">
          <Card hoverable className="feature-card">
            <RocketOutlined style={{ fontSize: 48, color: '#1890ff' }} />
            <Title level={3}>Уникальные традиции</Title>
            <Paragraph>
              Познакомьтесь с обычаями, которые сохранялись веками и передавались из поколения в поколение.
            </Paragraph>
          </Card>

          <Card hoverable className="feature-card">
            <GlobalOutlined style={{ fontSize: 48, color: '#1890ff' }} />
            <Title level={3}>Разнообразие культур</Title>
            <Paragraph>
              Откройте для себя народы, о которых вы никогда не слышали, и их удивительные истории.
            </Paragraph>
          </Card>

          <Card hoverable className="feature-card">
            <TeamOutlined style={{ fontSize: 48, color: '#1890ff' }} />
            <Title level={3}>Живые истории</Title>
            <Paragraph>
              Узнайте о повседневной жизни, праздниках и искусстве разных народов мира.
            </Paragraph>
          </Card>
        </div>
      </Space>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout className="main-layout">
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nations" element={<Nations />} />
            <Route path="/nation" element={<NationDetail />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.85)' }}>
          Culturology ©2024 - Исследуйте многообразие мировых культур
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;