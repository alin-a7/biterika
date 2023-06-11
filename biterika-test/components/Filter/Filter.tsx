import React from "react";

import { useActions, useAppSelector } from "@/store/hooks";
import { TabType } from "@/store/reducers/appReducer";

interface Tab {
  label: string;
  dataTab: TabType;
}

const Tabs: Tab[] = [
  { label: "Все", dataTab: "all" },
  { label: "В работе", dataTab: "1" },
  { label: "Ожидают начала", dataTab: "2" },
  { label: "Приостановлены", dataTab: "3" },
  { label: "На модерации", dataTab: "4" },
  { label: "Завершенные", dataTab: "5" },
];

const Filter = () => {
  const { activeTab } = useAppSelector((state) => state.app);
  const { setActiveTab } = useActions();

  return (
    <div className="filter-tabs__scroll scroll-none">
      <ul className="filter-tabs__header flex-auto js-tabs-buttons mb-15 mb-md-2 mb-lg-25">
        {Tabs.map(({ label, dataTab }) => (
          <li
            data-tab={dataTab}
            className={`filter-tabs__btn-circle ${
              activeTab === dataTab && "active"
            }`}
            onClick={() => setActiveTab(dataTab)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
