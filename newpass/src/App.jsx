import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sharepdf from './Components/sharepdf/Sharepdf';
import Savepdf from './Components/Savepdf/Savepdf';
import Printpdf from '../Printpdf';

const App = () => {
  return (
    <div>
      <Sharepdf />
      <Savepdf/>
      <Printpdf/>
    </div>
  );
};

export default App;
