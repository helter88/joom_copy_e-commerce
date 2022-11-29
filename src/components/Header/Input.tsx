import { useSearchParams } from "react-router-dom";

interface InputType {
  inputText: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({ inputText, onChangeHandler }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchParams({ search: `${inputText}` });
    }
  };

  const onHandleClick = () => {
    setSearchParams({ search: `${inputText}` });
  };

  return (
    <div className="w-full relative">
      <input
        className="bg-slate-100 rounded-xl h-11 w-full pl-4 outline-none"
        type="text"
        placeholder="Search"
        onChange={onChangeHandler}
        value={inputText}
        onKeyDown={onHandleKeyDown}
      />
      <button
        className="bg-red-400 text-white absolute font-medium text-sm right-0 h-full rounded-xl px-4"
        onClick={onHandleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
