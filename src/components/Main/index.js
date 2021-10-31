import Content from "./Content";
import Footer from "../Footer";
import Nav from "../Nav";

const Main = () => {
  return (
    <div className="h-screen">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
};

export default Main;
