import React from "react";

const Home = () => {
  // Testimonials data - replace with real data
  const testimonials = [
    {
      id: 1,
      quote:
        "Excellent service! Foresight transformed our accounting processes.",
      author: "John Smith",
      position: "CEO, TechCorp",
    },
    {
      id: 2,
      quote:
        "Their IT solutions helped us streamline operations significantly.",
      author: "Sarah Johnson",
      position: "Operations Manager",
    },
    {
      id: 3,
      quote: "Professional and reliable financial advice every time.",
      author: "Michael Brown",
      position: "Finance Director",
    },
    {
      id: 4,
      quote: "The team went above and beyond to meet our needs.",
      author: "Emma Wilson",
      position: "Small Business Owner",
    },
  ];

  return (
    <main className="pt-24">
      <section className="lg:w-[80%] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6">
          <div className="lg:w-1/2">
            <img
              src="/img/ITsolutions.png" // Update path as needed
              alt="IT Solutions"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 pl-6">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#1a1565] to-[#8a83eb] bg-clip-text text-transparent font-serif">
              Welcome to
            </h1>
            <h1 className="text-5xl font-extrabold mb-6 text-gray-800 font-serif">
              Foresight Consult Ltd
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Foresight Consult Ltd offers tailored accounting and IT solutions
              to clients across the UK and EMEA with a client-first approach.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 mt-16 gap-8">
          <div className="lg:w-1/2 pl-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              At Foresight Consult Ltd, we specialize in delivering tailored
              accounting and IT solutions to help businesses and individuals
              achieve financial clarity and success in the UK and EMEA. With
              years of experience and a client-first approach, we're committed
              to providing professional, reliable, and personalized services.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/img/Team_in_a_Meeting.jpg" // Update path as needed
              alt="Foresight Consult Team"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1565] text-center uppercase tracking-wide p-4">
          Testimonials
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[90%] mx-auto my-16 px-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-[#1a1565]">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#dddaf7] py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1a1565] mb-8">
            Ready to Take Control of Your Finances?
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#1a1565] uppercase mb-4">
                contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#1a1565]">
                  <i className="fas fa-phone"></i>
                  <span className="text-lg font-medium">+44 1234 567890</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1a1565]">
                  <i className="fas fa-envelope"></i>
                  <a
                    href="mailto:foresightconsult.uk@gmail.com"
                    className="text-lg font-medium"
                  >
                    foresightconsult.uk@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-[#1a1565]">
                  <i className="fas fa-map-marker-alt mt-1"></i>
                  <span className="text-lg font-medium">
                    20 Marsworth Close,
                    <br />
                    Manchester,
                    <br />
                    United Kingdom,
                    <br />
                    M23 0JS
                  </span>
                </div>
                <div className="text-[#1a1565]">
                  <h2>
                    Office Hours:{" "}
                    <span className="text-lg font-medium">
                      Mon-Fri, 09:00 – 17:00
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-[#8a83eb] h-32 hidden lg:block"></div>

            {/* Branding */}
            <div className="px-5 relative">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1565] to-[#5146f0]">
                Foresight
              </h1>
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8a83eb] to-[#1a1565]">
                Consult
              </h1>
              <p className="mt-4 text-lg text-[#1a1565]">
                Innovating the Future with Insightful Consulting
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a1565] to-[#5146f0] transform scale-x-0 animate-pulse"></div>
            </div>
          </div>

          <div className="mt-8 text-[#1a1565] max-w-2xl mx-auto">
            <p className="text-lg">
              Contact us today to schedule a free consultation and discover how
              we can help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-gray-800 p-6 rounded-lg text-center my-12">
        <h2 className="text-4xl lg:text-4xl font-bold mb-4 capitalize">
          Ready to Unlock New Opportunities?
        </h2>
        <p className="mb-6 text-xl text-[#8a83eb]">
          Join us and embark on your journey to success with Foresight Consult!
        </p>
        <button className="bg-[#5146f0] text-white py-3 px-6 rounded-md hover:bg-[#8a83eb] transition-colors text-lg font-medium">
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </main>
  );
};

export default Home;
