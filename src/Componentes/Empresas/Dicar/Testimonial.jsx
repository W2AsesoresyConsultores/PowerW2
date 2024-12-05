import React, { useState } from "react";

function Testimonial() {
  // Estado para controlar la página del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de testimonios
  const testimonials = [
    {
      name: "Brian Matthews",
      text: "Keep track of the hottest NFTs.",
      description:
        "Rarible makes it easier to find the rarest and most unique NFTs in the marketplace. It’s the biggest innovation for digital art lovers.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      name: "Changpeng Zhao",
      text: "No extra charges. Less royalties.",
      description:
        "The platform offers fair pricing and lower hidden fees for transactions. My 90% subscriber base loves it.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      name: "Vitalik Buterin",
      text: "The future of NFT trading.",
      description:
        "With Rarible, I can access exclusive NFT collections and trade them across multiple chains. It’s a game-changer for collectors.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      name: "Alice Johnson",
      text: "Best platform for creators.",
      description:
        "As a digital artist, Rarible gives me the tools to easily showcase and sell my work to a global audience.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      name: "Satoshi Nakamoto",
      text: "Revolutionizing the NFT space.",
      description:
        "Rarible is bringing decentralized NFT trading to the next level, and I’m here for it.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      name: "Elena Garcia",
      text: "An essential tool for collectors.",
      description:
        "I’ve found some of the most unique and valuable NFTs on Rarible. It’s my go-to platform.",
      avatar: "https://via.placeholder.com/120",
    },
  ];

  // Número de tarjetas visibles por página
  const visibleCards = 3;

  // Función para avanzar en el carrusel
  const nextSlide = () => {
    if (currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Función para retroceder en el carrusel
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 px-6">
      {/* Header */}
      <div className="text-center text-white max-w-2xl mx-auto">
        <h2 className="text-lg font-bold uppercase tracking-wide">
          What the Biggest
        </h2>
        <h3 className="text-4xl font-extrabold text-white">
          <span className="text-pink-500">Crypto Leaders</span> Say About Rarible
        </h3>
        <p className="mt-4 text-gray-300">
          Rarible is a marketplace aiming to link sellers (typically content
          creators such as digital artists, model creators, or meme makers)
          with buyers who can select pieces they wish to purchase.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-12 max-w-6xl mx-auto">
        {/* Botón de retroceder */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full p-3 shadow-lg ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 space-x-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 relative min-w-[calc(100%/3-1.5rem)]"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full absolute -top-8 left-6 border-4 border-white"
                />
                <div className="mt-8">
                  <p className="text-lg font-bold text-gray-800">
                    {testimonial.text}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {testimonial.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-gray-500">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón de avanzar */}
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full p-3 shadow-lg ${
            currentIndex === testimonials.length - visibleCards
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex === testimonials.length - visibleCards}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Testimonial; 