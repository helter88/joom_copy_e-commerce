import useOpenCloseDropdown from "../../hooks/open-close-dropdown";
import FilterButton from "./filter-button";
import FilterButtonMenu from "./filter-button-menu";

const FilterArticles = () => {
  const { isClicked, toggle, elementRef } = useOpenCloseDropdown();

  const onClickHandler = () => toggle();
  return (
    <div className="mt-10 md:mt-20 pt-5 mx-auto w-4/5">
      <div className="relative" ref={elementRef}>
        <FilterButton onClickHandler={onClickHandler} />
        <FilterButtonMenu
          options={["By default", "Ascending price", "Descending price"]}
          isSelected={isClicked}
          toggleClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default FilterArticles;
