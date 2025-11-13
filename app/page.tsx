{/* 🌿 Wellness Services Carousel */}
<section className="py-20 bg-gradient-to-b from-white to-emerald-50 text-center">
  <h2 className="text-3xl font-semibold mb-10 text-emerald-800">
    Wellness Services
  </h2>

  <div
    className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-white"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
  >
    {/* Slides */}
    <div
      className="flex transition-transform ease-[cubic-bezier(0.45,0,0.15,1)]"
      style={{
        transform: `translateX(-${current * 100}%)`,
        width: `${slides.length * 100}%`,
        transitionDuration: "1500ms", // ⬅️ 1.5s transition speed (gentle)
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`min-w-full flex flex-col justify-center items-center px-10 py-16 transition-opacity duration-[1500ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: i === current ? "scale(1)" : "scale(0.98)",
            transition: "opacity 1.5s ease, transform 1.5s ease",
          }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-emerald-700">
            {slide.title}
          </h3>
          <p className="text-lg max-w-md text-gray-700">{slide.text}</p>
        </div>
      ))}
    </div>

    {/* 🌸 Gradient fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

    {/* 🌿 Navigation Dots */}
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

