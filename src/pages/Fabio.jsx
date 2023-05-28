/* eslint-disable react/prop-types */
import Screen from "../components/Screen";
import { bikes } from "../constants";

export default function Fabio({ isPrev }) {
  return <Screen data={bikes[2]} bgColor={"bg-fabio"} isPrev={isPrev} />;
}
