import React from "react";
import * as s from "./Country.styles";

function Country(props) {
  const country = props.match.params.country;
  const countries = {
    canada: {
      img: "/images/countries/canada.png",
      description: "Canada is chilly",
    },
    brazil: {
      img: "/images/countries/brazil.jpg",
      description: "Canada is chilly",
    },
    australia: {
      img: "/images/countries/australia.jpg",
      description: "Canada is chilly",
    },
    india: {
      img: "/images/countries/india.jpg",
      description: "Canada is chilly",
    },
    moldova: {
      img: "/images/countries/moldova.jpg",
      description: "Canada is chilly",
    },
    kenya: {
      img: "/images/countries/kenya.jpg",
      description: "Canada is chilly",
    },
  };
  return (
    <s.CountryContainer>
      <s.CountryImages img={countries[country]["img"]} />
      <s.CountryDescription>
        {countries[country]["description"]}
      </s.CountryDescription>
    </s.CountryContainer>
  );
}

export default Country;
