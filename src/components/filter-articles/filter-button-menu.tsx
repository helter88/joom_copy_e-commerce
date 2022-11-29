import React from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { URLSearchParams } from "url";

export interface FilterButtonMenuProps {
  options: string[];
  isSelected: true | false;
  toggleClick: () => void;
}

const FilterButtonMenu: React.FC<FilterButtonMenuProps> = ({
  options,
  isSelected,
  toggleClick,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParamsURL = searchParams.get("category");
  const searchTypeFromURL = searchParams.get("search");

  //  Czemu jak poniższe wstawię do setSearchParams to nie działa
  const createParamsObject = (v: string): URLSearchParams => {
    if (categoryParamsURL) {
      return createSearchParams({ category: `${categoryParamsURL}`, sort: v });
    } else if (searchTypeFromURL) {
      return createSearchParams({ search: `${searchTypeFromURL}`, sort: v });
    } else {
      return createSearchParams({
        sort: v,
      });
    }
  };

  const onClickHandler = (v: string) => setSearchParams(createParamsObject(v));

  const allOptions = options.map((v) => (
    <div key={v} className="py-2 text-sm hover:text-red-400">
      <button
        onClick={() => {
          onClickHandler(v);
          toggleClick();
        }}
      >
        {v}
      </button>
    </div>
  ));
  return (
    <div
      className={`absolute flex flex-col mt-2 bg-white shadow-lg shadow-black w-64 pl-4 rounded-xl z-10 ${
        isSelected ? "" : "hidden"
      }`}
    >
      {allOptions}
    </div>
  );
};

export default FilterButtonMenu;
