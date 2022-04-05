import React, { useState } from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
  const [value, setValue] = useState('');

  return (
    <div className="contact">
      <form action="">
        <h3>Napisz do nas</h3>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Napisz wiadomość"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            setValue('');
          }}
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
