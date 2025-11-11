"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Holistic Health Coaching",
    text: "Personalized wellness plans that nurture your physical, emotional, and spiritual well-being.",
  },
  {
    title: "Trauma-Informed Yoga",
    text: "Gentle yoga sessions that promote safety, healing, and self-awareness in every pose.",
  },
  {
    title: "Nutrition Guidance",
    text: "Learn how to nourish your body through balanced, mindful eating rooted in self-compassion.",
  },
  {
    title: "Mindfulness Mentorship",
    text: "One-on-one mentoring to help you integrate mindfulness and self-care into your daily life.",
  },
];

const Page = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🌿 Auto-rotate every 14 seconds for slow, relaxed reading
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 14000); // 14 seconds
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-12 bg-emerald-600 text-white">
        <h1 className="text-4xl font-bold">Hello, I'm Jamilah</h1>
        <p className="text-xl mt-4">A passionate Health & Wellness Coach</p>
      </header>

      {/* About */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I'm a health and wellness coach dedicated to helping others create balance and healing
          through holistic practices. I am a trauma-informed yogi, mentor, and nutritionist who believes
          in the power of mind-body connection. My mission is to empower individuals to cultivate
          wellness in every aspect of their lives—physically, emotionally, and spiritually.
        </p>
      </section>

      {/* 🌿 Carousel Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Wellness Services</h2>
        <div
          className="relative max-w-3xl mx-auto overflow-hidden"
          onMouseEnter={() => setPaused(true)}   // Pause on hover
          onMouseLeave={() => setPaused(false)}  // Resume on mouse leave
        >
          {/* Slide container */}
          <div
            className="flex transition-transform duration-[2000ms] ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full px-6 py-10 bg-emerald-100 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-4">{slide.title}</h3>
                <p className="text-lg">{slide.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? "bg-emerald-600" : "bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          I’d love to connect! Whether you’re seeking guidance on your wellness journey or simply want to
          collaborate, feel free to reach out.
        </p>
        <a
          href="mailto:jamilah@example.com"
          className="text-xl text-emerald-700 hover:underline"
        >
          jamilah@example.com
        </a>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-emerald-700 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 Jamilah</p>
      </footer>
    </div>
  );
};

export default Page;

