import { useState } from 'react'
import Nav from './components/Nav/Nav.js'
import ProductList from './components/ProductList/Productlist.js';
import Filter from './components/Filter/Filter.js'
import BarLoader from "react-spinners/BarLoader";
import { Provider } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from './components/Redux/Toggle.js' 
import store from './components/Redux/Store.js'
function App() {

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
function AppContent() {
  const toggle = useSelector(state => state.toggle);
  return (
    <div className='App'>
      <Filter />
      <BarLoader
            color="#2ea5a9"
            cssOverride={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '1000',
            }}
            loading={toggle.toggleloading}
            margin={4}
            size={200}
            width={150}
            speedMultiplier={1}
          />
      <div className={toggle.togglefilter || toggle.toggleloading ? "Opacity" : ""}>
        <Nav />
        <ProductList/>
      </div>
    </div>
  );

}

export default App