/*
	jsrepo 1.28.1
	Installed from https://reactbits.dev/default/
	21-1-2025
*/

import "./ShinyText.scss";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text text-6xl mb-8 font-bold ${disabled ? "disabled" : ""} ${className} `}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
