import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container"><NavbarBrand href='/'>Ristorante Con fusion App</NavbarBrand></div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
