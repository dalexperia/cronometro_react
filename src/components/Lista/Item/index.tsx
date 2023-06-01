import { Tarefas } from "..";
import style from "./Item.module.scss"

interface Props extends Tarefas {
    selecionaTarefa: (t: Tarefas) => void;
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}:Props) {
    return (
        <li 
        key={id} 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado:''}`}
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li> 
    );
}