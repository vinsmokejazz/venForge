const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Legal Links */}
      <div className="text-gray-400 flex gap-4 text-sm hover:[&>a]:text-gray-200 transition-colors">
        <a
          href="/terms"
          className="hover:underline"
          aria-label="Terms and Conditions"
        >
          Terms & Conditions
        </a>
        <a
          href="/privacy"
          className="hover:underline"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/vinsmokejazz"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:opacity-75 transition-opacity"
          aria-label="Visit our GitHub"
        >
          <img
            src="/assets/github.svg"
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://x.com/itsvenu15"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:opacity-75 transition-opacity"
          aria-label="Follow us on X"
        >
          <img
            src="/assets/x.svg"
            alt="X (Formerly Twitter)"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/venu-prasad-551b09340/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:opacity-75 transition-opacity"
          aria-label="Connect on LinkedIn"
        >
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Venu Prasad A. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;