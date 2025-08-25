'use client';

import { FormEvent, useState } from 'react';
import Container from '../../components/Container';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('contact form submitted');
    setSent(true);
  }

  return (
    <Container className="py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {sent ? (
        <p>Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input required placeholder="Name" className="border p-2 rounded" />
          <input required type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea required placeholder="Message" className="border p-2 rounded h-32" />
          <button type="submit" className="bg-primary text-white py-2 rounded">
            Send
          </button>
        </form>
      )}
    </Container>
  );
}
