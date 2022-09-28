import "../App.css";
import "./Header.css";

const Heading = ({ children }) => {
  return (
    <header className="header">
      <h1 className="heading">{children}</h1>
    </header>
  );
};

export default Heading;
