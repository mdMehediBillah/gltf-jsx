import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import Computer from "../../public/Computer";

const Three = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={1} />
      <OrbitControls />
      <Environment preset="sunset" />
      <meshStandardMaterial color="hotpink" />
      <Computer />
    </>
  );
};

export default Three;
