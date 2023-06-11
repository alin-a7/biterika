import { useGetAllCampaignQuery } from "@/store/api/appApi";
import { useAppSelector } from "@/store/hooks";
import RowItem from "./components/RowItem";

export const useTable = () => {
  const { activeTab } = useAppSelector((state) => state.app);
  const { data, isLoading } = useGetAllCampaignQuery();

  const currentCompaing = data?.campaigns.filter((campaing) =>
    !activeTab ? campaing : campaing.state === activeTab
  );

  const tableContent = currentCompaing?.length ? (
    currentCompaing?.map((compaing) => (
      <RowItem key={compaing.id} {...compaing} />
    ))
  ) : (
    <h2 className="card__wrap xxl-center">Ничего не найдено...</h2>
  );

  return { isLoading, tableContent };
};
