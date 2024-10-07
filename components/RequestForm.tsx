'use client';

import { useState } from 'react';

export default function FormRequest() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation check for empty fields
    if (!firstName || !lastName || !phone || !message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Optional email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch('/api/form-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      alert(result.message);

      // Clear form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error('Error submitting the form:', err);
      alert('Une erreur inattendue est survenue.');
    }
  };

  return (
    <div id='Contact' className="container mx-auto p-5 lg:max-w-4xl my-8">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg">
        {/* Left Section: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src='/images/dr8.png'
              alt="Form Side Image"
              className="w-full h-full object-cover rounded-lg lg:rounded-l-lg"
            />
          </div>

        {/* Right Section: Form */}
        <div className="w-full lg:w-1/2 p-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pour plus d’informations</h2>
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full p-2 border mb-4 rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom de famille"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full p-2 border mb-4 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 border mb-4 rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full p-2 border mb-4 rounded-md"
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full p-2 border mb-4 rounded-md"
              required
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
