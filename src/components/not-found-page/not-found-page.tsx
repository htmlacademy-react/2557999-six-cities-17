import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>404 - Страница не найдена</h1>
    <p>Страница, которую ты ищешь - не существует.</p>
    <Link
      to="/main"
      style={{
        display: 'inline-block',
        padding: '10px 15px',
        marginTop: '20px',
        backgroundColor: '#4481c3',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
    >
      Вернуться на главную
    </Link>
  </div>
);

export default NotFoundPage;
