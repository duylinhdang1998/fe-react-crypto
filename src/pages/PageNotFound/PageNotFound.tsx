import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center flex-col gap-[20px] justify-center">
      <h1> PageNotFound</h1>
      <Link to={"/"} className="flex h-12 items-center justify-center gap-2 rounded-xl text-[white] bg-primary-base px-[20px]">
        Home
      </Link>
    </div>
  );
};

export default PageNotFound;
