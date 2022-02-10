import React, { Fragment, useEffect } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


function App() {

  useEffect(() => {
    document.title = 'FOODSIA | Food Order App'
  }, []);

  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <Meals/>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
