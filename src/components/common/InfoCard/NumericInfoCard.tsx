// Internal Dependenices
import { Typography } from "../Typography/Typography";

type Props = {
  number: string;
  text: string;
};

export const NumericInfoCard = ({ number, text }: Props) => {
  return (
    <div role="contentinfo">
      <Typography text={number} variant="mainParagraph" />
      <Typography text={text} variant="subParagraph" />
    </div>
  );
};
