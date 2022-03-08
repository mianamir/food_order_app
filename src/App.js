import React, { Fragment, useEffect, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };



  useEffect(() => {
    document.title = 'FOODSIA | Food Order App'
  }, []);

  return (
    <div>
      <Fragment>
        { cartIsShown &&  <Cart onClose={hideCartHandler}/> }
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals/>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
