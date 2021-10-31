const Footer = () => {
  return (
    <footer className="absolute left-1/2 bottom-16 text-center transform -translate-x-1/2">
      <p className="text-sm md:text-lg text-gray-800 text-center">
        ALl rights reserved &copy;
        <a
          href="https://github.com/saiful-70"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Saiful Islam
        </a>
        , {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
