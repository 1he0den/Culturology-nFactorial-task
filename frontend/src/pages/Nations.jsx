import { Typography, Space, Card, Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Nations = () => {
  const navigate = useNavigate();
  const [customNation, setCustomNation] = useState('');

  const handleCardClick = (card) => {
    localStorage.setItem('selectedNation', JSON.stringify(card));
    navigate('/nation');
  };

  const handleCustomSubmit = () => {
    if (!customNation.trim()) return;

    const customData = {
      title: customNation,
      description: '', 
      src: '', 
    };

    localStorage.setItem('selectedNation', JSON.stringify(customData));
    navigate('/nation');
  };


  const nations = [
    {
      src: "https://e-history.kz/storage/upload/news_ru_files/iblock/106/106ca858d2ff7b5b6b7abab6a2962285.jpg",
      title: "Kazakh People",
      description: "Народ великой степи, с глубокими традициями, кочевым духом и поэтической душой.",
    },
    {
      src: "https://muidenmaritiem.nl/nieuw/wp-content/uploads/2014/02/foto-in-volendam-kostuum-e1556272733449.jpg",
      title: "Volendam People",
      description: "Жители тихого рыбацкого уголка Нидерландов, хранители костюма и духа прошлого.",
    },
    {
      src: "https://www.micato.com/wp-content/uploads/2019/12/micatosafaris_76227451_Full-scaled.jpg",
      title: "Maasai People",
      description: "Гордость Восточной Африки. Танцы, племенные украшения и философия гармонии с природой.",
    },
    {
      src: "https://www.pilotguides.com/wp-content/uploads/2022/02/32824551790_82015992af_c-e1644324488534.jpg",
      title: "Miao People",
      description: "Один из древнейших народов Азии, известный яркими нарядами и уникальной вышивкой.",
    },
    {
      src: "https://www.jimmynelson.com/wp-content/uploads/2022/08/XXXVII_92___Chichimeca_Jonaz___Misio__n_de_Chichimecas__Guanajuato___Mexico___2017-1024x512.jpg",
      title: "Chichimeca People",
      description: "Коренной народ Мексики с историей сопротивления и духовных практик.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_b_n9AI_wgssDgDwFh_hKaU9b4YP4QbwBw&s",
      title: "Huli People",
      description: "Они из Папуа — их ритуальные маски, танцы и яркие прически завораживают.",
    },
    {
      src: "https://www.jimmynelson.com/wp-content/uploads/2022/08/XXXVIII_13___Dolgan___Anabar_district__Yakutia___Siberia___2018-scaled.jpg",
      title: "Dolgan People",
      description: "Народ севера Сибири, живущий в суровых условиях с теплотой в сердцах.",
    },
    {
      src: "https://www.jimmynelson.com/wp-content/uploads/2022/08/netherlands-zeeland-walcheren-2021-NL-ZEE-WAL-D10.jpg",
      title: "Walcheren People",
      description: "Старинная культура региона Зеландия, переплетение морских легенд и мирного быта.",
    },
    {
      src: "https://www.jimmynelson.com/wp-content/uploads/2022/08/XXVIII_71___Wodaabe___Gerewol_festival__Bossio__Chari-Baguirmi_region___Chad___2016.jpg",
      title: "Wodaabe People",
      description: "Народ Чада, известный танцем Гереуол — праздником красоты, мужества и самовыражения.",
    },
    {
      src: "https://www.jimmynelson.com/wp-content/uploads/2022/09/netherlands-hindeloopen-2021-NL-HIN-A04_hd.jpg",
      title: "Hindeloopen People",
      description: "Маленький городок с великой историей. Художники, море и тишина.",
    },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Title style={{ textAlign: 'center', color: '#2f4f4f' }}>
        Народы мира, о которых стоит узнать
      </Title>
      <Paragraph style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', color: '#555' }}>
        Эти уникальные культуры заслуживают внимания. Познакомьтесь с людьми, традициями и красотой, 
        которые делают наш мир богаче.
      </Paragraph>

      <div style={{ maxWidth: 500, margin: '30px auto', textAlign: 'center' }}>
        <Input
          value={customNation}
          onChange={(e) => setCustomNation(e.target.value)}
          placeholder="Введите название народа"
          style={{ marginBottom: 10 }}
        />
        <Button type="primary" onClick={handleCustomSubmit}>
          Узнать о народе
        </Button>
      </div>

      <Space
        size="large"
        wrap
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        {nations.map((card, index) => (
          <Card
            key={index}
            hoverable
            onClick={() => handleCardClick(card)}
            style={{
              width: 320,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            cover={
              <img
                src={card.src}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
            }
          >
            <Meta
              title={<strong>{card.title}</strong>}
              description={<span style={{ color: '#666' }}>{card.description}</span>}
            />
          </Card>
        ))}
      </Space>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Link to="/">Главная страница</Link>
      </div>
    </div>
  );
};

export default Nations;
