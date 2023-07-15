import React from 'react';
import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import axios from 'axios';
import { Loader2, Send } from 'lucide-react';
import './style.css';

export default function FormDemo() {

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  function handleSubmit(event) {

    setLoadingSubmit(true);

    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    axios.post(import.meta.env.VITE_URL_API, data)
    .then(function (response) {

      console.log(response);
      setLoadingSubmit(false);

    })
    .catch(function (error) {

      console.error(error);
      setLoadingSubmit(false);

    });

    document.getElementById('author').value = '';
    document.getElementById('message').value = '';

  }

  return (
      <Form.Root className="FormRoot" onSubmit={handleSubmit}>
      <Form.Field className="FormField" name="author">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Name</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input id='author' className="Input" type="text" required />
      </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="message">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Message</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a message
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea id='message' className="Textarea" required />
      </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10, gap: '10px' }}>
        {
          loadingSubmit ? <Loader2 style={{color: 'var(--violet-11)'}} className='loading'/> : <Send/>
        }
        Post Message
      </button>
      </Form.Submit>
    </Form.Root> 
  )

}