// You do not need to change any code in this file
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { updater } = props;
  // STRETCH - What prop do we need to be able to change the value of
  // the search term (which is state that lives in the top-level component)?
  const changeHandler = (event) => {
    //  On 'change' of the input we should set a new search term in app state
    updater(event.target.value);
  };
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input onChange={changeHandler} type="text" placeholder="Search" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
