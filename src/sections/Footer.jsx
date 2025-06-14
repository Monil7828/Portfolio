import { mySocials } from "../constants";

const Footer = () => {
  // Add your WhatsApp link to the socials array
  const socialLinks = [
    ...mySocials,
  ];

  return (
    <section className="relative py-8 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      
      <div className="flex flex-col items-center justify-between gap-6 c-space md:flex-row">
        {/* Legal links */}
        <div className="flex gap-4 text-sm text-neutral-400">
          <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          <span className="text-neutral-600">|</span>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a 
              href={social.href} 
              key={index}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 transition-all duration-300 rounded-full hover:bg-neutral-800/50 hover:scale-110"
              aria-label={social.name}
            >
              <img 
                src={social.icon} 
                className="w-5 h-5" 
                alt={social.name} 
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Monil. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;