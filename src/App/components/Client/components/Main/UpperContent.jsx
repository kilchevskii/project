import React from 'react'

import styles from "./index.css";
import starsImage from "./stars.png";
import girlImage from "./girl.png";

function UpperContent() {
    return (
        <div className="main-container">
        <div className="left-side-container">
          <h1>Привет, Паша!</h1>
          <p>
            твой крутецкий курс по <span className="redWord">React</span>
          </p>
          <img src={starsImage} alt="stars-picture" />
        </div>
        <div className="logo-main"></div>
        <div className="right-side-container">
          <img src={girlImage} alt="girl-picture" />
        </div>
      </div>
    )
}

export default UpperContent
