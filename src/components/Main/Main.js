import React, { Component } from "react";
import DownloadButton from "./DownloadButton";

export default class Main extends Component {
  render() {
    return (
      <div className="bg-grey-op-09">
        <div className="download-button">
          <DownloadButton></DownloadButton>
        </div>
        <div className="container-main flex-center">
          <div className="container-profil">
            <div className="rounded-circle circle-profil flex-center">
              <img
                className="rounded-circle profil-picture"
                src={process.env.PUBLIC_URL + "/assets/img/formal_small.png"}
                alt="Leandro Javier Schmidt"
              />
            </div>
            <h1 className="txt-green pt-2">Leandro Javier Schmidt</h1>
          </div>
          <div className="container-main-bio">
            <h2 className="txt-bio">
              Semi-Senior Frontend developer and IT consultant with 3 years of
              experience on Web development and design on different projects. I
              have worked with a variety of teams from different cultures, from
              planning and architecture to production deployment. I have
              participated in projects from JOHNSON & JOHNSON, internal gA
              projects, and US gA clients.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
