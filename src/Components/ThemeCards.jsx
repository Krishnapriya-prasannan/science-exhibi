const ThemeCardsContainer = () => {
    const themes = [
      {
        title: "Social Impact",
        description:
          "Showcase projects addressing critical social issues. Focusing on community betterment, inclusivity, health access, education access, or solving local/national humanitarian challenges that make a meaningful impact for overall quality of life or societal welfare.",
      },
      {
        title: "Economic Impact",
        description:
          "Showcase innovations that boost the financial economy and foster sustainability with emphasis on generating value through the creation of novel solutions in manufacturing or automation. Focus on technological growth, trade, market enhancements, and creation of revenue generation using innovation in areas like AI-based tools/digital tools.",
      },
      {
        title: "Environmental Impact",
        description:
          "Focus on innovations for the long-term preservation of our environment that focuses on creating cleaner systems, better sustainable resources, and protection of the natural environment that leads to a safer world, with long-term preservation strategies. Show projects related to alternative resources that focus on zero waste/emission principles.",
      },
    ];
  
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-indigo-900 via-gray-900 to-indigo-900 rounded-xl shadow-2xl">
        <div className="mb-12 text-center text-white">
          <h2 className="text-4xl font-extrabold uppercase tracking-wider mb-4">
            Themes for Projects
          </h2>
          <p className="text-gray-300 text-lg">
            Explore our key focus areas to inspire innovation and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:rotate-1 transition duration-500 group"
            >
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 group-hover:opacity-50 transition duration-500 rounded-xl"></div>
  
              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-800 uppercase text-center mb-6">
                {theme.title}
              </h3>
              <p className="text-gray-600 text-justify z-10 relative">
                {theme.description}
              </p>
  
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  