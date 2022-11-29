import { ReactComponent as ArrowDown } from "./../../assets/img/arrow-down.svg";

const Currency = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <p className="text-xs px-1">PLN</p>
      <ArrowDown aria-label="arrow down" />
    </div>
  );
};

export default Currency;
