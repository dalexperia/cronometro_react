import React, { useState} from 'react';
import style from './App.module.scss';
import Formulario from '../components/Formulario';
import Lista, { Tarefas } from '../components/Lista';
import Cronometro from '../components/Cronometro';

function App() {
  const [tarefas, setTarefas] = useState<Tarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<Tarefas>();

  function selecionaTarefa(tarefaSelecionada: Tarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAteriores => tarefasAteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
        />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
