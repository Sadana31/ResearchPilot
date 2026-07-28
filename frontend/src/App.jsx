import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus("❌ Backend not connected"));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-10 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          ResearchPilot
        </h1>

        <div className="space-x-4">
          <button className="rounded-lg border px-5 py-2 hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

        <span className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI Research Assistant
        </span>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Make Literature Reviews
          <span className="text-blue-600"> 10x Faster</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Search scholarly papers, generate AI summaries, compare research,
          organise references and automatically write literature reviews.
        </p>

        {/* Backend Status */}
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 px-6 py-3 shadow">
          <p className="font-medium text-green-700">
            Backend Status: {backendStatus}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">

          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border px-8 py-3 font-semibold transition hover:bg-gray-100">
            Learn More
          </button>

        </div>

        {/* Search Bar */}
        <div className="mt-16 flex w-full max-w-3xl rounded-xl bg-white p-2 shadow-lg">

          <input
            type="text"
            placeholder="Search research papers..."
            className="flex-1 rounded-lg px-4 py-3 outline-none"
          />

          <button className="rounded-lg bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
            Search
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h2 className="mb-4 text-xl font-semibold">
            🔍 Smart Search
          </h2>

          <p className="text-gray-600">
            Discover relevant research papers from scholarly databases using
            intelligent search.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h2 className="mb-4 text-xl font-semibold">
            🤖 AI Summaries
          </h2>

          <p className="text-gray-600">
            Instantly generate concise AI-powered summaries of research papers
            to save valuable reading time.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h2 className="mb-4 text-xl font-semibold">
            📚 Literature Reviews
          </h2>

          <p className="text-gray-600">
            Automatically create structured literature reviews by combining
            insights from multiple research papers.
          </p>
        </div>

      </section>

    </div>
  );
}

export default App;