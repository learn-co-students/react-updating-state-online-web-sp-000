import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick'
import LightSwitch from './components/LightSwitch';
import ButtonCounter from './components/ButtonCounter'

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonCounter />
    <br/>
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
