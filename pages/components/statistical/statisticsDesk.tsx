import React from 'react';
import Countries from './assets/countries';
import Categori from './assets/categori';

const App = () => (
  <>
    <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
            <Countries />
          </div>
          <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
            <Categori />
          </div>
        </div>
  </>
);
export default App;