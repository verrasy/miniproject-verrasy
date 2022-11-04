import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const JumbotronTable = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-5">Tabel Pasien</h1>
        <p className="lead">Tabel berisikan data pasien RS Sejahtera</p>
      </div>
    </div>
  );
};

export default JumbotronTable;
