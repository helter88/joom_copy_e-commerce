import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-items-center items-center">
      <div className="w-1/5 mt-28">
        <img
          src="https://web-client.joomcdn.net/web-client/53b655f6e496ab6c4633.png"
          alt="at sign"
        />
      </div>

      <h1 className="mt-8 text-2xl font-medium">Oops.</h1>
      <p className="my-4 text-xl">
        The page you are looking for does not exist.
      </p>
      <div className="mt-2">
        <button
          className="bg-red-400 text-white rounded-xl py-3 px-5 text-lg font-normal"
          onClick={onClickHandler}
        >
          Return to home page
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
