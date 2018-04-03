import React, { Component } from 'react';
import './styles.css';
import Table from './Table';

class App extends Component {
  render() {
    const headers = ['Groupe', 'Chanteur', 'Naissance', 'Maison de disque'];

    const rows = [
      [
        <i lang="en">Napalm Death</i>,
        <i lang="en">Barney Greenway</i>,
        '1981',
        <i lang="en">Century Media</i>
      ],
      [
        <i lang="en">Carcass</i>,
        <i lang="en">Jeff Walker</i>,
        '1985',
        <i lang="en">Earache</i>
      ],
      [
        <i lang="en">Extreme Noise Terror</i>, 
        <i lang="en">Dean Jones</i>,
        '1985',
        <i lang="en">Candlelight</i>
      ],
      [
        <i lang="en">Discordance Axis</i>,
        <i lang="en">Jon Chang</i>,
        '1992',
        <i lang="en">Hydrahead</i>
      ]
    ];
    return (
      <div className="App">
        <Table lang="fr" rows={rows} headers={headers} rowHeaders caption={["Groupes de ", <i lang="en">grindcore</i>]} sortable />
      </div>
    );
  }
}

export default App;
