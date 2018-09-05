import React, { Component } from 'react';
import styles from './App.css'
import MarketSchedule from "./MarketSchedule";
import ProduceList from './ProduceList';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.Appheader}>
          <h1 className={styles.Apptitle}>WE GROW STUFF!!!!!</h1>
        </header>
 
        <MarketSchedule />
      
        <ProduceList />
      </div>
    );
  }
}

export default App;
