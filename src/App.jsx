import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/selector";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

import ContactList from "./components/contactList/ContactList";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";

import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && <ContactList />}
    </div>
  );
}

export default App;
