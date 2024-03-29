import React from "react";
import { Link } from "react-router-dom";

const Creators = ({ creators }) => {
  const url = "https://image.tmdb.org/t/p/w45";
  const vAlign = { verticalAlign: "middle" };
  const dummyImg = "https://placeimg.com/45/68/animals";

  const creatorsArray = (creators || []).map(creatorsItem => {
    return (
      <tr key={creatorsItem.id}>
        <td>
          <img
            src={
              creatorsItem.profile_path
                ? url + creatorsItem.profile_path
                : dummyImg
            }
            alt={creatorsItem.name}
          />
        </td>
        <td style={vAlign}>
          <Link to={"/people/" + creatorsItem.id}>{creatorsItem.name}</Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          Creator{creators.length > 1 ? "s" : null}
        </div>
      </div>
      <div className="card-content">
        <table className="table is-striped is-fullwidth">
          <tbody>{creatorsArray}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Creators;
