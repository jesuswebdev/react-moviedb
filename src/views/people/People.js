import React, { useEffect, useCallback } from "react";
import PeopleCard from "./people-card/PeopleCard";
import Spinner from "../../components/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useHttp } from "@moviedb/hooks";

const People = () => {
  const {
    isLoading,
    data: people,
    get: getPeople
  } = useHttp(useCallback(v => v.results, []));

  useEffect(() => {
    getPeople(`/person/popular?language=en-US&page=1`);
  }, []);

  const styles = {
    minHeight: "85vh",
    marginBottom: "30px"
  };

  if (isLoading || !people) {
    return <Spinner />;
  }

  const breadcrumbLinks = [{ to: "/people", name: "people" }];

  return (
    <div className="container" style={styles}>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="columns is-mobile is-centered is-multiline">
        {people.map(person => (
          <div
            className="column is-10-mobile is-5-tablet is-4-desktop"
            key={`person-${person.id}`}>
            <PeopleCard people={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
