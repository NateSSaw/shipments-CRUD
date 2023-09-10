import css from "./Spiner.module.css"
export default function Spinner() {
  return (
      <div className={css.wrapper}>
          <i className={css.spinner}></i>
    </div>
  );
}