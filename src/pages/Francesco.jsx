/* eslint-disable react/prop-types */
import Screen from "../components/Screen";
import { bikes } from "../constants";

export default function Francesco({ isPrev }) {
  return <Screen data={bikes[4]} bgColor={"bg-pecco"} isPrev={isPrev} />;
}
