const ButtonLink = ({ text, extendClasses }) => {
  return (
    <a
      href="/"
      className={` ${extendClasses}`}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
