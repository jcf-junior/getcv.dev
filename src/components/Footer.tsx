export default function Footer() {
  return (
    <footer className="w-full bg-neutral-800 text-center p-10 flex flex-col gap-3 font-bold">
      <p className="text-sm text-gray-400">
        Made with 🍵 and ❤️ by <a href="https://github.com/jcf-junior" target="_blank" className="underline hover:text-indigo-700">José Júnior</a>
      </p>
      <a href="https://github.com/jcf-junior/getcv.dev" target="_blank">
        <img className="invert w-6 mx-auto" src="/assets/github-logo.svg" alt="github logo"/>
      </a>
    </footer>
  );
}
