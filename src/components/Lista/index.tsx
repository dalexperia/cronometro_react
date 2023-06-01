import style from "./Lista.module.scss";
import Item from "./Item";

export interface Tarefas {
    tarefa: string;
    tempo: string;
    selecionado: boolean;
    completado: boolean;
    id: string;
}

interface Props {
    tarefas: Tarefas[];
    selecionaTarefa: (t: Tarefas) => void;
}

export default function Lista({tarefas, selecionaTarefa}: Props ) {
  
    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do Dia</h2>
                <ul>
                    {tarefas.map(acao => 
                        (
                            <Item 
                                selecionaTarefa={selecionaTarefa}
                                key={acao.id}
                               {...acao}
                            />     
                        )
                    )}
                </ul>
        </aside>
    );
}