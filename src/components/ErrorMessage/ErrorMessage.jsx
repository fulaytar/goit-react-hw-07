import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div>
      <b className={css.error}>Error loading contacts. Please retry.</b>
    </div>
  );
}
