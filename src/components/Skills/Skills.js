import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

export default class Skills extends Component {
  render() {
    return (
      <section className="container-picto-left">
        <ScrollableAnchor id={"skills"}>
          <div className="container-picto">
            <div className="picto-box">
              <img
                className="cercle-anim"
                src={process.env.PUBLIC_URL + "/assets/img/picto_cercle.svg"}
                alt="cercle"
              />
              <img
                className="picto"
                src={process.env.PUBLIC_URL + "/assets/img/picto_comp.svg"}
                alt="cercle"
              />
            </div>
            <h4 className="font-weight-bold mt-2">Skills</h4>
          </div>
        </ScrollableAnchor>

        <div className="container-content bg-grey">
          <div className="skills-container">
            <div className="logo-skill flex-center">
              <i className="devicon-react-original icon"></i>
              <div className="text-icon font-weight-bold">REACT</div>
            </div>
            <div className="logo-skill flex-center">
              <i className="devicon-react-original icon"></i>
              <div className="text-icon font-weight-bold">HOOKS</div>
            </div>
            <div className="logo-skill flex-center">
              <img
                className="logo-image icon"
                src={process.env.PUBLIC_URL + "/assets/img/icons8-redux.svg"}
                alt="redux"
              />
              <div className="text-icon font-weight-bold">REDUX</div>
            </div>

            <div className="logo-skill flex-center">
              <img
                className="logo-image icon"
                src={process.env.PUBLIC_URL + "/assets/img/icons8-sass.svg"}
                alt="sass"
              />
              <div className="text-icon font-weight-bold">SASS</div>
            </div>

            <div className="logo-skill flex-center">
              <i className="devicon-css3-plain icon"></i>
              <div className="text-icon font-weight-bold">CSS3</div>
            </div>
            <div className="logo-skill flex-center">
              <img
                className="logo-image icon"
                src={process.env.PUBLIC_URL + "/assets/img/icons8-node-js.svg"}
                alt="node js"
              />
              <div className="text-icon font-weight-bold">NODE JS</div>
            </div>
            <div className="logo-skill flex-center">
              <i className="devicon-javascript-plain icon"></i>
              <div className="text-icon font-weight-bold">JAVASCRIPT</div>
            </div>

            <div className="logo-skill flex-center">
              <i className="devicon-git-plain icon"></i>
              <div className="text-icon font-weight-bold">GIT</div>
            </div>

            <div className="logo-skill flex-center">
              <i className="devicon-visualstudio-plain icon"></i>
              <div className="text-icon font-weight-bold">VISUAL STUDIO</div>
            </div>

            <div className="logo-skill flex-center">
              <i className="fas fa-project-diagram icon"></i>
              <div className="text-icon font-weight-bold">
                BUSINESS PROCESSES
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
