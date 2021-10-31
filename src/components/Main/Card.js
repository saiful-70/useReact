import { Link } from "react-router-dom";

const Card = ({ classes, link, btnText, pText }) => {
  return (
    <div className={`card flex-center flex-col text-center ${classes.div}`}>
      <p className="lg:text-md mb-2 md:mb-3 lg:mb-4 text-gray-100">{pText}</p>
      <Link to={link}>
        <button className={`btn btn-main ${classes.button}`}>{btnText}</button>
      </Link>
    </div>
  );
};

export default Card;
