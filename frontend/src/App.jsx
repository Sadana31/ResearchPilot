function App() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          ResearchPilot
        </h1>

        <div className="space-x-4">
          <button className="rounded-lg px-5 py-2 border">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

        <span className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI Research Assistant
        </span>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Make Literature Reviews
          <span className="text-blue-600"> 10x Faster</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Search scholarly papers, generate AI summaries,
          compare research, organise references and automatically
          write literature reviews.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border px-8 py-3 font-semibold hover:bg-gray-100">
            Learn More
          </button>

        </div>

        {/* Search */}

        <div className="mt-16 flex w-full max-w-3xl rounded-xl bg-white p-2 shadow-lg">

          <input
            type="text"
            placeholder="Search research papers..."
            className="flex-1 rounded-lg px-4 py-3 outline-none"
          />

          <button className="rounded-lg bg-blue-600 px-8 text-white hover:bg-blue-700">
            Search
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">
            🔍 Smart Search
          </h2>

          <p className="text-gray-600">
            Discover relevant research papers from scholarly sources.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">
            🤖 AI Summaries
          </h2>

          <p className="text-gray-600">
            Instantly understand research papers using AI-generated summaries.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">
            📚 Literature Reviews
          </h2>

          <p className="text-gray-600">
            Generate structured literature reviews in minutes.
          </p>
        </div>

      </section>

    </div>
  );
}

export default App;