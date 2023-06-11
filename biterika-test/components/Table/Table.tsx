import React from "react";

import Head from "./components/Head";
import { useGetAllCampaignQuery } from "@/store/api/appApi";
import RowItem from "./components/RowItem";

const Table = () => {
  const { data, isLoading } = useGetAllCampaignQuery();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="table">
      <div className="table__md-wrap">
        <div className="table__head table__head--col-8 is-tablet mb-15 mb-lg-2">
          <Head />
        </div>
        <div className="table__body filter-tabs__content">
          {data?.campaigns.map((compaing) => (
            <RowItem key={compaing.id} {...compaing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
