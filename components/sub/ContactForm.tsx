import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:youremail@example.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="p-8 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>
        <form className="space-y-4 flex-col items-center flex justify-center " onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-72 p-2 border border-zinc-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-72 block p-2 border border-zinc-300 rounded-md"
              required
            />
          </div>
          <div className='pb-3'>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-72 p-2 border border-zinc-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-purple-800 text-white p-3 rounded-xl hover:bg-purple-900">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
