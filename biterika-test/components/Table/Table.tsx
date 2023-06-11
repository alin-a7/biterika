import React from "react";

import Head from "./components/Head";
import { useTable } from "./hooks";

const Table = () => {
  const { isLoading, tableContent } = useTable();

  if (isLoading) return <h2 className="card__wrap xxl-center">Loading...</h2>;

  return (
    <div className="table">
      <div className="table__md-wrap">
        <div className="table__head table__head--col-8 is-tablet mb-15 mb-lg-2">
          <Head />
        </div>
        <div className="table__body filter-tabs__content">{tableContent}</div>
      </div>
    </div>
  );
};

export default Table;
