import { useSearchParams } from "react-router-dom";
import { ReactComponent as ArrowMenu } from "./../../assets/img/menu_arrow-icon.svg";

const FilterButton = ({ onClickHandler }: { onClickHandler: () => void }) => {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const currentSort = sort ?? "By default";
  return (
    <button
      className="flex space-x-2 items-center bg-slate-100 rounded-xl p-2"
      onClick={onClickHandler}
    >
      <p className="text-sm font-normal text-gray-400">Sort</p>
      <p className="text-sm font-normal text-gray-600 ">{currentSort}</p>
      <ArrowMenu />
    </button>
  );
};

export default FilterButton;
