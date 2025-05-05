import { Typography, Card, Image, Button, message } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const NationDetail = () => {
  const [nationData, setNationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('selectedNation'));

  useEffect(() => {
    if (storedData) {
      fetchNationData(storedData.title, storedData.description);
    }
  }, []);

  const fetchNationData = async (nation, description) => {
    try {
      setLoading(true);
      const response = await axios.post('https://culturologybackend-production.up.railway.app/nation/nation', {
        nation: nation,  
        description: description || ''
      });
      setNationData(response.data);
    } catch (error) {
      message.error('Ошибка при загрузке данных о народе');
      console.error('Error fetching nation data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!storedData) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Title>Данные не найдены</Title>
        <Paragraph>Пожалуйста, выберите народ на <Link to="/nations">странице народов</Link></Paragraph>
      </div>
    );
  }

  if (loading) return <Paragraph>Загрузка данных...(Загрузка данных занимает 25-35 секунд)</Paragraph>;

  if (!nationData) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Button 
          type="primary" 
          onClick={() => fetchNationData(storedData.title, storedData.description)}
          loading={loading}
        >
          Загрузить информацию о народе {storedData.title}
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center' }}>{nationData.title}</Title>
      
      {nationData.image_url && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
          <Image
            src={nationData.image_url}
            alt={nationData.title}
            style={{ 
              borderRadius: '8px',
              maxHeight: '500px',
              objectFit: 'cover'
            }}
          />
        </div>
      )}

      <Card style={{ marginBottom: '24px' }}>
        <Title level={4}>Численность</Title>
        <Paragraph>{nationData.population}</Paragraph>
      </Card>

      <Card style={{ marginBottom: '24px' }}>
        <Title level={4}>Культура</Title>
        <Paragraph>{nationData.culture}</Paragraph>
      </Card>

      <Card>
        <Title level={4}>Праздники</Title>
        <Paragraph>{nationData.holidays}</Paragraph>
      </Card>
      <div>
        <Link to="/nations">
          Вернуться к списку народов
        </Link>
      </div>
    </div>
  );
};

export default NationDetail;