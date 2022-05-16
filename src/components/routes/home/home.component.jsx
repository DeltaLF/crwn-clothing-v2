import Directory from "../../directory/directory.component";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <Directory />
    </div>
  );
};

export default Home;
