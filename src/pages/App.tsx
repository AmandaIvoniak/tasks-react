import React from 'react';
import Botao from '../components/Buttons';
import { Cronometro } from '../components/Cronometro';
import Form from '../components/Forms'
import List from '../components/List';
import style from './App.module.scss';
function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
