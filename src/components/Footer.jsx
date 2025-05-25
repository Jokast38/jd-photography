import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-black text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="footer-socials">
          <a
            href="https://wa.me/33758505285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 text-2xl"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/leju.les"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@julesdrezy?_t=ZM-8uRU7AVOAHG&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-2xl"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.facebook.com/share/16Gb9jDqDc/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} JD Photography. Tous droits réservés. <a id="jokast" href="http://jokast38.fr">Par Jokast Kassa</a>
        </div>
      </div>
    </footer>
  );
}