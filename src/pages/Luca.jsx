/* eslint-disable react/prop-types */
import Screen from "../components/Screen";
import { bikes } from "../constants";

export default function Luca({ isPrev }) {
  return <Screen data={bikes[3]} bgColor={"bg-luca"} isPrev={isPrev} />;
}
