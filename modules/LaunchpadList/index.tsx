import Filter from "./Filter";
import Listing from "./Listing";

const LaunchpadList = () => {
  return (
    <div className="mx-5 launchpad-list">
      <Filter />
      <Listing />
    </div>
  );
};

export default LaunchpadList;
