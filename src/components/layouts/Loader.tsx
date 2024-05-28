import Lottie from "lottie-react";
import LoaderAnimation from "../../../public/assets/animations/loader.json";
import { FC } from "react";

interface Props {
  visible: Boolean;
}
const Loader: FC<Props> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      //   className='w-100 h-100 d-flex justify-content-center align-items-center position-fixed opacity-75 bg-white '
      className="w-full h-full flex justify-center items-center fixed opacity-75 bg-white "
      style={{ zIndex: 99999 }}
    >
      <Lottie
        animationData={LoaderAnimation}
        loop
        autoPlay
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        width={400}
        height={400}
      />
    </div>
  );
};
export default Loader;
