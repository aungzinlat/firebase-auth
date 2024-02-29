import React from "react";

const HomePage = () => {
  return (
    <div className=" cards">
      <div className="card">
        <div className="wrapper">
          <img className="cover-image" src="../img/dark_rider-cover.jpg" />
        </div>
        <img className="title" src="../img/dark_rider-title.png" />
        <img className="character" src="../img/dark_rider-character.webp" />
      </div>
      <div className="card">
        <div className="wrapper">
          <img className="cover-image" src="../img/force_mage-cover.jpg" />
        </div>
        <img className="title" src="../img/force_mage-title.png" />
        <img className="character" src="../img/force_mage-character.webp" />
      </div>
    </div>
  );
};

export default HomePage;
