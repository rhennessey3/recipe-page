import React from 'react';
import './App.css';
import RpTitleHead from './RpTitleHead'
import RpMenuHead from './RpMenuHead';
import RpPhoto from './RpPhoto'
import RpSubMenu from './RpSubMenu';
import RpOverview from './RpOverview'
import RpIngredients from './RpIngredients'
import RpDirections from './RpDirections'
import RpNutririon from './RpNutrition'


function App() {
  return (
    <div className="App">


      <div className="recipe-page-wrapper">
          <RpMenuHead />
          <RpTitleHead />
          <RpPhoto />
          <RpSubMenu />
          <RpOverview />
          <RpIngredients />
          <RpDirections />
          <RpNutririon />
      </div>

    </div>
  );
}

export default App;
