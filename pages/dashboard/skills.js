import SideNav from "@/components/Admin/layout/SideNav";
import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { SkillsData } from "@/components/Admin/Services/SkillsData";
const SkillsPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  useEffect(() => {
    SkillsData.getCountries().then((data) => setCountries(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideNav />
        </div>
        <div className="col-md-9">
          <h1 className="main-title">Skills</h1>
          <div className="card p-fluid">
            <AutoComplete
              field="name"
              multiple
              value={selectedCountries}
              suggestions={filteredCountries}
              completeMethod={search}
              onChange={(e) => {
                setSelectedCountries(e.value);
                console.log(selectedCountries);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
