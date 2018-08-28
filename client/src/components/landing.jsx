import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
      <section id="hero">
      <img id="hero-image" src="./assets/storm.jpg" />
      <div id="hero-content">
       <h1>Disaster Tracker</h1>
       <p>Know when danger is coming right from your phone</p>
       </div>
      </section>
      <div id="about">
        <h4>About</h4>
        <p>Lorem ipsum dolor sit amet, regione similique eos an. Eu quo vero everti. Eripuit omittantur has ut, id his aliquam lucilius. Est ornatus volutpat ut, sed an iracundia definiebas appellantur. Mel aeque fabulas gubergren ei, te nec diceret maiorum. His ei probo legere nusquam. His no inermis incorrupte argumentum. At vero suavitate intellegebat pri, sit mollis phaedrum conclusionemque in, nonumy maiestatis ad duo. Mel aeque fabulas gubergren ei, te nec diceret maiorum. His ei probo legere nusquam. His no inermis incorrupte argumentum.</p>
      </div>
      <div id="feature-list">
      <h4>Feature List</h4>
      <ul>
        <li>Geolocation</li>
        <li>Location based alerts</li>
        <li>Alerts for friends and family</li>
      </ul>
      </div>
      <div id="footer">
      {/* <div class="sticky-footer">
        Powered by @team-disaster
      </div> */}
      </div>
      </div>
    )
  }
}

export default Landing;