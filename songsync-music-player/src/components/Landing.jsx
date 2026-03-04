function Landing() {
  return (
    <section className="text-center px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Discover Music <br /> Effortlessly
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Stream millions of songs, discover new artists, and experience
        music like never before.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        Stream Songs
      </button>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
        {["Vast Library", "High Quality", "Smart Playlists"].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-3xl mb-4">🎵</div>
            <h3 className="font-semibold text-lg mb-2">{item}</h3>
            <p className="text-gray-500 text-sm">
              Enjoy seamless streaming with a modern experience.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Landing;