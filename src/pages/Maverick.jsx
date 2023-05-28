/* eslint-disable react/prop-types */
import Screen from "../components/Screen";
import { bikes } from "../constants";

export default function Marc({ isPrev }) {
  return <Screen data={bikes[0]} bgColor={"bg-maverick"} isPrev={isPrev} />;
}
