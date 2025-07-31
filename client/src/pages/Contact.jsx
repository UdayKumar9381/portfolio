import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Confetti from "react-confetti";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showConfetti, setShowConfetti] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://portfolio-uf9x.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setShowConfetti(true);
      setThankYouVisible(true);
      setTimeout(() => setShowConfetti(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white px-6 py-12">
      {showConfetti && <Confetti />}
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">📬 Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#0f2437] p-8 rounded-xl shadow-lg border border-cyan-600 animate-float"
      >
        <label className="block mb-4">
          <span className="text-cyan-300">Name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 rounded bg-gray-800 border border-cyan-600"
          />
        </label>

        <label className="block mb-4">
          <span className="text-cyan-300">Email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 rounded bg-gray-800 border border-cyan-600"
          />
        </label>

        <label className="block mb-6">
          <span className="text-cyan-300">Message</span>
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full p-2 rounded bg-gray-800 border border-cyan-600"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded transition duration-300"
        >
          🚀 Send Message
        </button>
      </form>

      {thankYouVisible && (
        <div className="text-center mt-8 text-lg text-green-400 font-semibold animate-bounce">
          🎉 Thank you for reaching out! Check your email!
        </div>
      )}
    </div>
  );
};

export default Contact;
