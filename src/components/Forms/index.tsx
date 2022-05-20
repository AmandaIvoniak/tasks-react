import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Buttons";
import style from './Forms.module.scss';
import { v4 as uuidv4 } from 'uuid';
class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>

}> {
    state = {
        tarefa: '',
        tempo: '00:00'
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.setState({
            tarefa: "",
            tempo: '00:00'
        })

        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContaine}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        value={this.state.tarefa}
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContaine}>
                    <label htmlFor="tempo">`
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        value={this.state.tempo}
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Form;