/* eslint-disable react/prop-types */
import Screen from "../components/Screen";
import { bikes } from "../constants";

export default function Jack({ isPrev }) {
  return <Screen data={bikes[5]} bgColor={"bg-jack"} isPrev={isPrev} />;
}
