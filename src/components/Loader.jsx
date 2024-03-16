import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <BeatLoader
      className="mx-auto w-fit mt-6"
      color={"#1e293b"}
      size={15}
      speedMultiplier={1}
    />
  );
};

export default Loader;
