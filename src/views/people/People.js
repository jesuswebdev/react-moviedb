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

  if (isLoading || !people) {
    return <Spinner />;
  }

  const breadcrumbLinks = [{ to: "/people", name: "people" }];

  return (
    <>
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
    </>
  );
};

export default People;
