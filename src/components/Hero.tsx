import React from 'react';
import Container from './Container';

const Hero: React.FC = () => (
  <section className="bg-blue-100 py-16 text-center">
    <Container>
      <h1 className="text-4xl font-bold mb-4">Welcome to the Pet Store</h1>
      <p>Your one-stop shop for all pet needs.</p>
    </Container>
  </section>
);

export default Hero;
