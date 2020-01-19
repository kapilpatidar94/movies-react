import React from "react";
import "../App.css";
import { Switch, Link, Route } from "react-router-dom";

const home = () => {
  return (
    <div>
      <header className="App-header">
        <input class="movies" type="button" value="Movies" />
        <Link to={'/directors'}><input class="directors" type="button" value="Directors" />
        </Link>
      </header>
    </div>
  );
};

export default home;
