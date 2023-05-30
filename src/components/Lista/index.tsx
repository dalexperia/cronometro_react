import style from "./Lista.module.scss";
import Item from "./Item";

export interface Tarefas {
    tarefa: string;
    tempo: string;
}

export default function Lista() {
    const tarefas: Array<Tarefas> = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "JavaScript",
            tempo: "01:30:00"
        },
        {
            tarefa: "Ruby Rails",
            tempo: "02:30:00"
        }
    ];

    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do Dia</h2>
                <ul>
                    {tarefas.map((acao,index) => 
                        (
                            <Item 
                                key={acao.tarefa}
                               {...acao}
                            />     
                        )
                    )}
                </ul>
        </aside>
    );
}