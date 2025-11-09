import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Contacts from './Contact.jsx';

export default function App() {
  const cards = [
    {
      iconClass: 'fa-solid fa-building',
      title: 'About the Company',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://media.istockphoto.com/id/1696781145/photo/modern-building-in-the-city-with-blue-sky.jpg?s=612x612&w=0&k=20&c=POfayTyDe06tGX4CeJgS8-fb896MUC46dl3ZbHXBqN4='
    },
    {
      iconClass: 'fa-solid fa-earth-africa',
      title: 'Our values',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://images.squarespace-cdn.com/content/v1/58fbfecf725e25a3d1966494/1617223162803-MNI0TRV5G87CA86KU8UP/image-asset.jpeg'
    },
    {
      iconClass: 'fa-solid fa-landmark',
      title: 'Our Mission',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://fabrikbrands.com/wp-content/uploads/Company-Mission-Statement-1.jpg'
    }
  ]
  return (
    <>
    <Header />
    <main className='container' style={{ paddingTop: '10rem'}}>
          {cards.map((card, index) => (
      <Card 
        key={index}
        iconClass={card.iconClass}
        title={card.title}
        imageUrl={card.image}
        description={card.description}
      />
      ))}
    </main>
    <footer>
      <Contacts />
    </footer>
    </>
  );
}
