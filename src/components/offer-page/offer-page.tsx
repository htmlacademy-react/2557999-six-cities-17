import { useParams, Link } from 'react-router-dom';
import useOffer from '../hooks/useOffer';
import PlaceCard from '../card/card';
import ReviewForm from '../review-form/review-form';

const OfferPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const offer = useOffer(id!);

  if (!offer) {
    return (
      <main>
        <h1>Offer not found</h1>
        <Link to="/Main" className="button">
          Back to main
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{offer.name}</h1>
      <PlaceCard card={offer} />
      <ReviewForm />
      <Link
        to="/Main"
        className="button"
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
        Back to main
      </Link>
    </main>
  );
};

export default OfferPage;
