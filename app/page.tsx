"use client";
import { useState, useEffect, useRef } from "react";

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

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // ✅ Properly typed interval ref for TypeScript
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number>(0);

  // 🌿 Auto-rotate every 14s
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 14000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // 👆 Swipe support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    (touchStartX.current = e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) setCurrent((prev) => (prev + 1) % slides.length);
      else setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 flex flex-col">
      {/* 🌺 Header */}
      <header className="text-center py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">Hello, I'm Jamilah</h1>
        <p className="text-2xl mt-4 font-light">A passionate Health & Wellness Coach</p>
      </header>

      {/* 🌼 About */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-emerald-800">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          I'm a health and wellness coach dedicated to helping others create balance and healing
          through holistic practices. I am a trauma-informed yogi, mentor, and nutritionist who believes
          in the power of mind-body connection. My mission is to empower individuals to cultivate
          wellness in every aspect of their lives—physically, emotionally, and spiritually.
        </p>
      </section>

      {/* 🌿 Wellness Services Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-emerald-800">Wellness Services</h2>

        <div
          className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-white"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-full flex flex-col justify-center items-center px-10 py-16"
              >
                <h3 className="text-2xl font-semibold mb-4 text-emerald-700">{slide.title}</h3>
                <p className="text-lg max-w-md text-gray-700">{slide.text}</p>
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3 pb-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-emerald-600 scale-110 shadow-sm"
                    : "bg-emerald-300 hover:bg-emerald-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🌸 Contact */}
      <section className="px-6 py-20 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-800">Get in Touch</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          I’d love to connect! Whether you’re seeking guidance on your wellness journey or simply want to
          collaborate, feel free to reach out.
        </p>
        <a
          href="mailto:jamilah@example.com"
          className="text-xl text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-4"
        >
          jamilah@example.com
        </a>
      </section>

      {/* 🌻 Footer */}
      <footer className="py-6 bg-emerald-700 text-white text-center text-sm">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Jamilah</p>
      </footer>
    </div>
  );
}
