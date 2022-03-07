import React, { Fragment, useEffect } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  useEffect(() => {
    document.title = 'FOODSIA | Food Order App'
  }, []);

  return (
    <div>
      <Fragment>
        <Cart/>
        <Header />
        <main>
          <Meals/>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
