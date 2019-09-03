import React, { Component } from 'react'


export default class Main extends Component {
  render() {
    return (
      <div className="bg-grey-op-09">
        <div className="container-main flex-center">
          <div className="container-profil">
            <div className="rounded-circle circle-profil flex-center">
            <img className="rounded-circle profil-picture" src={process.env.PUBLIC_URL+'/assets/img/formal_small.png'} alt="Leandro Javier Schmidt"/>
            </div>
            <h1 className="txt-green pt-2">Leandro Javier Schmidt</h1>
          </div>
        </div>
      </div>
    )
  }
}
