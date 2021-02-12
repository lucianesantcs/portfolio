import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";

const DarkMode = () => {
  const [lightMode, setLightMode] = useState(saved());

  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(lightMode));
  }, [lightMode]);

  function saved() {
    const saved = JSON.parse(localStorage.getItem("light"));
    return saved || false;
  }

  if (lightMode) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  return (
    <>
      <li className="nav-text nav-menu-toggle">
        <button onClick={() => setLightMode((prevMode) => !prevMode)}>
          {!lightMode ? (
            <>
              <FiIcons.FiSun /> <span>Light</span>
            </>
          ) : (
            <>
              <FiIcons.FiMoon /> <span>Dark</span>
            </>
          )}
        </button>
      </li>
    </>
  );
};

export default DarkMode;
