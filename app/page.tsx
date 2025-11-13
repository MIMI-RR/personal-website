"use client";
import { useState } from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 flex flex-col">
      {/* 🌺 Header */}
      <header className="text-center py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">Hello, I'm Jamilah</h1>
        <p className="text-2xl mt-4 font-light">
          A passionate Health & Wellness Coach
        </p>
      </header>

      {/* 🌼 About */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-emerald-800">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          I'm a health and wellness coach dedicated to helping others create balance and healing
          through holistic practices. I am a trauma-informed yogi, mentor, and nutritionist who
          believes in the power of mind-body connection. My mission is to empower individuals to
          cultivate wellness in every aspect of their lives—physically, emotionally, and spiritually.
        </p>
      </section>

      {/* 🌸 Services Summary (static instead of carousel) */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-emerald-800">
          Wellness Services
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
              Holistic Health Coaching
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Personalized wellness plans that nurture your physical, emotional, and spiritual
              well-being.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
              Trauma-Informed Yoga
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Gentle yoga sessions that promote safety, healing, and self-awareness in every pose.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
              Nutrition Guidance
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to nourish your body through balanced, mindful eating rooted in
              self-compassion.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
              Mindfulness Mentorship
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              One-on-one mentoring to help you integrate mindfulness and self-care into your
              everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* 🌸 Contact */}
      <section className="px-6 py-20 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-800">
          Get in Touch
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          I’d love to connect! Whether you’re seeking guidance on your wellness journey or simply
          want to collaborate, feel free to reach out.
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
