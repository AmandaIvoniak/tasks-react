import React from 'react';
import Botao from '../components/Buttons';
import Form from '../components/Forms'
import List from '../components/List';
import style from './App.module.scss';
function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
