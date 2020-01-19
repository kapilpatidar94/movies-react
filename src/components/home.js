import React from "react";
import "../App.css";
import { Switch, Link, Route } from "react-router-dom";

const home = () => {
  return (
    <div>
      <header className="App-header">
        <Link to={'/movies'}><input class="movies" type="button" value="Movies" />
        </Link>
        <Link to={'/directors'}><input class="directors" type="button" value="Directors" />
        </Link>
      </header>
    </div>
  );
};

export default home;
