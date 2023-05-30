import { Tarefas } from "..";
import style from "./Item.module.scss"

export default function Item({tarefa, tempo}:Tarefas) {
    return (
        <li key={tarefa} className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li> 
    );
}