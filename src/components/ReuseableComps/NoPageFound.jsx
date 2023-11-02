// App.js

import React from "react";
const NoPageFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>Oops! The page you are looking for might be in another castle.</p>
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="Mario saying: Sorry, but your page is in another castle!"
        />
        <p>
          <a
            href="/tracker-tool"
            style={{
              textDecoration: "underline",
            }}
          >
            Go to Tracker Tool Table
          </a>
        </p>
      </div>
    </div>
  );
};

export default NoPageFound;
