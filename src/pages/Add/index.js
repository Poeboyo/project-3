import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CharacterCreate from "../../components/CharacterCreate";

function Add() {
  return (
    <div>
      {/* <!-- Go Back to Home Page  --> */}
      <Link to="/">
        <a class="btn-floating btn-large waves-effect waves-light blue back-button">
          <i class="material-icons right">arrow_forward</i>
        </a>
      </Link>
      <CharacterCreate />

      {/* <!-- Fighter Form Creation --> */}
    </div>
  );
}

export default Add;
