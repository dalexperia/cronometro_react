import React from "react";
import Botao from "../Button";
import style from "./Formulario.module.scss";
import { Tarefas } from "../Lista";
import { v4 as uuidv4 } from "uuid";

export default class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<Tarefas[]>>}> {

    state: Tarefas = {
        tarefa:"",
        tempo:"00:00",
        selecionado: true,
        completado: true,
        id:''
    }
    render(): React.ReactNode {
        return (
            <form 
            className={style.novaTarefa} 
            onSubmit={ e => {
                e.preventDefault();
                this.props.setTarefas(tarefasantingas => [...tarefasantingas,
                    {...this.state, selecionado:false, completado:false, id: uuidv4()}]);
                this.setState({
                    tarefa:"",
                    tempo:"00:00",
                    selecionado: true,
                    completado: true,
                    id:''
                })
            }}
            >
                <div className={style.inputContainer}>
                    <label>Adicione um novo estudo</label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        value={this.state.tarefa}
                        onChange={ e => {
                            this.setState({...this.state, tarefa: e.target.value})
                        }}
                        required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        step="1"
                        name="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={ e => {
                            this.setState({...this.state, tempo: e.target.value})
                        }}
                        required
                        />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        );
    }
}