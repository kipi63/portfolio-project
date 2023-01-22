import React, { useState } from "react";

import "./tabs.scss";

import { Albums } from "./Albums";

import { Todos } from "./Todos";
import { Posts } from "./Posts";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // console.log(album.title);

  return (
    <>
      <div className="tabs-container">
        <div className="bloc-tabs">
          <button
            // to={AppRoutes.Albums}
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Albums
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Todos
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Posts
          </button>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Albums />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Todos />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
};
