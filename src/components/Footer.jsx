export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-gray-400">
          © {new Date().getFullYear()} Roysmith Bukamu.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}