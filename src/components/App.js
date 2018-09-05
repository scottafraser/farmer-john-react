import React, { Component } from 'react';
import styles from './App.css'
import MarketSchedule from "./MarketSchedule";
import ProduceList from './ProduceList';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.Appheader}>
          <h1 className={styles.Apptitle}>Welcome to React</h1>
        </header>
        <div className={styles.schedule}>
 
        <MarketSchedule />
        </div>
        <div className={styles.schedule}>
        <ProduceList />
        </div>
        <p className={styles.Appintro}>

        </p>
      </div>
    );
  }
}

export default App;
