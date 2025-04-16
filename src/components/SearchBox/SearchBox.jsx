import { useDispatch, useSelector } from "react-redux";
import { selectQuery } from "../../redux/filters/selectors";
import { setQuery } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const handleChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div>
      <p>Find for contacts by name or phone number</p>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}




