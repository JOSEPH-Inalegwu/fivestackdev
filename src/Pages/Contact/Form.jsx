import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            ...formData,
            source: 'Fivestack.dev Contact Form',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setTimeout(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast.error('Failed to send message. Try again.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-10">
      {/* Left: Image */}
      <div className="hidden lg:block w-1/2">
        <img
          src="/image/contact.jpeg"
          alt="Contact"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 border border-base-300 bg-base-200 p-10 rounded-2xl">
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-5">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-4 px-3 focus:outline-none focus:border-[#A346E6]`}
              autoComplete="off"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-8">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-4 px-3 focus:outline-none focus:border-[#A346E6]`}
              autoComplete="off"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="mb-7">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-3 px-3 focus:outline-none focus:border-[#A346E6]`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#A346E6] hover:bg-purple-700 text-white font-semibold rounded-md py-4 px-4 w-full transition duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Form;
