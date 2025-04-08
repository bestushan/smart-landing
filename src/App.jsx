function App() {
  const handleCTAClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cta_button_click",
      category: "CTA",
      action: "Click",
      label: "Hero - Get Started",
    });
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SmartLanding</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          A modern landing page built with React and Tailwind CSS.
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What People Say</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {["Amazing!", "Super clean design.", "Easy to use!"].map((quote, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p className="italic">“{quote}”</p>
              <p className="mt-4 font-semibold">– Happy User {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-xl w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-xl w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-xl w-full"
            rows="4"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;