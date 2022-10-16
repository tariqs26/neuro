import { useText } from "hooks/useText";
import "./Option.css";

export default function Option({ text, ...args }) {
  const textRef = useText(text);
  return <button {...args} ref={textRef}></button>;
}
