import style from "./Relogio.module.scss";

interface Props {
    tempo: number | undefined;
}

export default function Relogio({tempo = 0}: Props) {
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minDez, minUnid] = String(minutos).padStart(2,'0');
    const [segDez, segUnid] = String(segundos).padStart(2,'0');
    return (
        <>
            <span className={style.relogioNumero}>{minDez}</span>
            <span className={style.relogioNumero}>{minUnid}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDez}</span>
            <span className={style.relogioNumero}>{segUnid}</span>
        </>
    );
}