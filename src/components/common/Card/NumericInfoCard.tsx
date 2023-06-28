// Internal Dependenices
import { Typography } from "../Typography/Typography";

type Props = {
  number: string;
  text: string;
  color?: "white" | "black";
};

export const NumericInfoCard = ({ number, text, color }: Props) => {
  return (
    <div role="contentinfo">
      <Typography text={number} variant="mainParagraph" color={color} />
      <Typography text={text} variant="subParagraph" color={color} />
    </div>
  );
};
