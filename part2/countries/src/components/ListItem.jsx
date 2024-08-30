import { useState } from "react";

const ListItem = ({ country, showDetails }) => {
  const { capital, area, languages, name, flags } = country;
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {!showMore && !showDetails && (
        <li>
          {name.common}
          <button onClick={() => setShowMore(true)}>Show</button>
        </li>
      )}

      {(showMore || showDetails) && (
        <>
          <li>
            <h1>{name.common}</h1>
          </li>
          <li>{`Capital: ${capital}`}</li>
          <li>{`Area: ${area} km²`}</li>
          <li>
            <h2>Languages</h2>
          </li>
          <ul>
            {Object.values(languages).map((language) => (
              <li key={language} className="languages">
                {language}
              </li>
            ))}
          </ul>
          <li>
            <img className="flag" src={flags.svg} alt={flags.alt} />
          </li>
        </>
      )}
    </>
  );
};

export default ListItem;
