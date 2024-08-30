import { useState, useEffect } from "react";
import countryServices from "./services";
import List from "./components/List";
import SearchFilter from "./components/SearchFilter";
import Notification from "./components/Notifications";

const App = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [country, setCountry] = useState([]);
  const [showNotification, setNotification] = useState({
    message: null,
    status: null,
  });

  useEffect(() => {
    console.log("fetching country data...");
    countryServices.getAll().then((response) => setCountry(response));
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = country.filter((c) => {
    return c.name.common.toLowerCase().includes(searchquery.toLowerCase());
  });

  useEffect(() => {
    if (filteredCountries.length > 10) {
      setNotification({
        message: "Too many matches, specify another filter.",
        status: "error",
      });
    } else {
      setNotification({
        message: null,
        status: null,
      });
    }
  }, [filteredCountries.length]);

  return (
    <div>
      <SearchFilter value={searchquery} handleChange={handleChange} />
      {showNotification.message ? (
        <Notification
          message={showNotification.message}
          status={showNotification.status}
        />
      ) : (
        <List searchquery={searchquery} countries={filteredCountries} />
      )}
    </div>
  );
};

export default App;
