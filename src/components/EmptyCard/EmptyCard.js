import style from "./EmptyCard.module.css";

const EmptyCard = () => {
  return (
    <div className={style.card}>
      <p className={style.text}>Выберите повод для поздравления!</p>
    </div>
  );
};

export default EmptyCard;
