import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50">
        <div className="p-5 ">
          <div className="text-center items-center mt-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              100% free and open-source
            </div>

            <h1 className="text-5xl font-bold text-center text-gray-900 mt-3">
              <span className="text-indigo-700">Getcv.dev</span> is the easiest
              way to create a
              <span className="block">recruiter-approved CV </span>
            </h1>
            <p className="mt-3 text-gray-500 text-base">
              Create an ATS-optimized CV in minutes, using a template made by
              engineers for engineers.
            </p>
          </div>
        </div>

        <div className="relative mt-6">
          <div className="h-[50vh]"></div>

          {/* <img
          className="w-[600px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-2xl"
          src="https://placehold.co/794x1123/png"
          alt="Preview"
        /> */}

          <img
            className="w-[800px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-2xl"
            src="/assets/hero-cropped.jpg"
            alt="Preview"
          />

          <div className="h-[50vh] bg-neutral-800"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
