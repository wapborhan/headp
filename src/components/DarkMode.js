import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const soon = (
    <>
      <i className="fal fa-light fa-sun"></i>
    </>
  );
  const moon = (
    <>
      <i className="fa-regular fal fa-moon"></i>
    </>
  );
  return (
    <button className="dark-btn" onClick={toggleDarkMode}>
      {isDarkMode ? soon : moon}
    </button>
  );
}

export default App;
