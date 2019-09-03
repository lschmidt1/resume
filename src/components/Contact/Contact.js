import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
        <section>
          <div className="container-contact bg-grey flex-center">
            <h5 className="font-weight-bold txt-green">Address</h5>
            <a className="txt-white text-center mb-4" href="https://maps.google.com/?q=Remedios+de+Escalada+de+San+Martín+1576,+B1602EKB+Florida,+Buenos+Aires" target='_blank' rel="noopener noreferrer">
              Ricardo Gutierrez<br />
              1440, Olivos
            </a>
            <h5 className="font-weight-bold txt-green">Phone</h5>
            <a className="txt-white text-center mb-4" href="tel:+5491141969134">+54 (911) 4196-9134</a>
            <h5 className="font-weight-bold txt-green">E-mail</h5>
            <a className="txt-white text-center mb-4" href="mailto:leandro.schmidt90@gmail.com">leandro.schmidt90@gmail.com</a>
            <span>
              <a href="https://github.com/lschmidt1" target='_blank' rel="noopener noreferrer"><i className="fab fa-github m-3 fa-2x"></i></a>
              <a href="https://www.linkedin.com/in/leandro-schmidt-3bab0a169/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin m-3 fa-2x"></i></a>
            </span>
          </div>
          <div className="container-interest">
            <p>
              <span className="font-weight-bold">Interests</span><br />
              Web development<br />
              Mobile Solutions<br />
              Software architecture<br />
          </p>
            <p>
              <span className="font-weight-bold">Languages</span><br />
              Spanish (Native)<br />
              English (Advance)<br />
          </p>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
