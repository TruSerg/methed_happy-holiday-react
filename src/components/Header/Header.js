import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchText } from "../../store/textSlice";
import { fetchImage } from "../../store/imageSlice";

import Container from "../Container/Container";
import Choises from "./Choises/Choises";

import style from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const { holiday } = useParams();

  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday));
              }}
            >
              Поменять поздравление
            </button>

            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchImage(holiday));
              }}
            >
              Поменять фон
            </button>
          </div>

          <Choises />
        </div>
      </Container>
    </header>
  );
};

export default Header;
