import { useState, useEffect } from "react";
import countryServices from "./services";
import List from "./components/List";
import SearchFilter from "./components/SearchFilter";
import Notification from "./components/Notifications";

const App = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [country, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showNotification, setNotification] = useState({
    message: null,
    status: null,
  });

  // Fetch all countries data
  useEffect(() => {
    console.log("fetching country data...");
    countryServices.getAll().then((response) => setCountry(response));
  }, []);

  // Filter that data based on the search query
  useEffect(() => {
    const filtered = country.filter((c) =>
      c.name.common.toLowerCase().includes(searchquery.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [country, searchquery]);

  // Provide a notification when criteria is met
  useEffect(() => {
    if (
      filteredCountries.length !== country.length &&
      filteredCountries.length > 10
    ) {
      console.log(filteredCountries.length);
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
  }, [filteredCountries.length, country.length]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
