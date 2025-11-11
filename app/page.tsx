const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Hello, I'm Jamilah</h1>
        <p className="text-xl mt-4">A passionate Health & Wellness Coach</p>
      </header>

      {/* Bio Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I'm a health and wellness coach dedicated to helping others create balance and healing
          through holistic practices. I am a trauma-informed yogi, mentor, and nutritionist who believes
          in the power of mind-body connection. My mission is to empower individuals to cultivate
          wellness in every aspect of their lives—physically, emotionally, and spiritually.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
            <li>Holistic Health Coaching</li>
            <li>Trauma-Informed Yoga</li>
            <li>Nutrition & Wellness</li>
            <li>Meditation & Mindfulness</li>
            <li>Mental Health Support</li>
            <li>Mentorship</li>
            <li>Habit Building</li>
            <li>Self-Care Practices</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          I’d love to connect! Whether you’re seeking guidance on your wellness journey or simply want to
          collaborate, feel free to reach out.
        </p>
        <a
          href="mailto:jamilah@example.com"
          className="text-xl text-indigo-600 hover:underline"
        >
          jamilah@example.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 Jamilah</p>
      </footer>
    </div>
  );
};

export default Page;
