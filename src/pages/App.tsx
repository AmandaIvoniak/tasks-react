import React, { useState } from 'react';
import Botao from '../components/Buttons';
import { Cronometro } from '../components/Cronometro';
import Form from '../components/Forms'
import List from '../components/List';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';
function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
