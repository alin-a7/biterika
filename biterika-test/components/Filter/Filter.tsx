import React from "react";

const Filter = () => {
  return (
    <div className="filter-tabs__scroll scroll-none">
      <ul className="filter-tabs__header flex-auto js-tabs-buttons mb-15 mb-md-2 mb-lg-25">
        <li data-tab="all" className="filter-tabs__btn-circle active">
          Все
        </li>
        <li data-tab="1" className="filter-tabs__btn-circle">
          В работе
        </li>
        <li data-tab="2" className="filter-tabs__btn-circle">
          Ожидают начала
        </li>
        <li data-tab="3" className="filter-tabs__btn-circle">
          Приостановлены
        </li>
        <li data-tab="4" className="filter-tabs__btn-circle">
          На модерации
        </li>
        <li data-tab="5" className="filter-tabs__btn-circle">
          Завершенные
        </li>
      </ul>
    </div>
  );
};

export default Filter;
