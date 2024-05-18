import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
/* import Contact from "../Contact/Contact"; */

export default function ContactList() {
  return (
    <>
      {[].length > 0 && (
        <ul className={css.list}>
          {[].map((contact) => (
            <Contact key={contact.id} item={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
