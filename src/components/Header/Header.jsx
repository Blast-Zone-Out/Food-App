import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Craving something delicious?</h2>
        <p>
          Order your favorite Filipino dishes here and satisfy your cravings
          today! Choose from a diverse menu showcasing a delectable array of
          Pinoy favorites, all crafted with the finest ingredients and authentic
          culinary expertise.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
