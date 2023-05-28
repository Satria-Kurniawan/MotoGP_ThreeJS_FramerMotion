import { Html, useProgress } from "@react-three/drei";
import Spinner from "./Spinner";

export default function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col justify-center items-center">
      <Spinner />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
