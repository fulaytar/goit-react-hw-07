import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <h3>
        <IoPerson /> {item.name}
      </h3>
      <p>
        <BsFillTelephoneFill />
        {item.number}
      </p>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(item.id))}
      >
        Delete
      </button>
    </div>
  );
}
