import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-4">Contactez-moi</h1>
    <form name="contact" method="POST" data-netlify="true" className="space-y-4">
      <input type="hidden" name="form-name" value="contact" />
      <div>
      <label className="block mb-1 font-medium">Nom</label>
      <input type="text" name="name" required className="w-full border rounded p-2" />
      </div>
      <div>
      <label className="block mb-1 font-medium">Email</label>
      <input type="email" name="email" required className="w-full border rounded p-2" />
      </div>
      <div>
      <label className="block mb-1 font-medium">Message</label>
      <textarea name="message" rows="5" required className="w-full border rounded p-2"></textarea>
      </div>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Envoyer</button>
    </form>
    <div className="mt-6 space-y-4">
      <p className="text-lg font-medium">Ou contactez-moi via :</p>
      <div className="flex space-x-4">
      <a 
        href="https://wa.me/33758505285" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline text-2xl"
      >
        <FaWhatsapp />
      </a>
      <a 
        href="https://www.instagram.com/leju.les" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline text-2xl"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://www.tiktok.com/@julesdrezy?_t=ZM-8uRU7AVOAHG&_r=1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline text-2xl"
      >
        <FaTiktok />
      </a>
      <a 
        href="https://www.facebook.com/share/16Gb9jDqDc/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline text-2xl"
      >
        <FaFacebook />
      </a>
      </div>
    </div>
    </div>
  )
}