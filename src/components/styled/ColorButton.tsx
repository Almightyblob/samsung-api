import styled from "styled-components";

interface colorProps {
  color: string;
}

const ColorButton = styled.button.attrs({
  className: "w-8 h-8 rounded-full border-2 border-zinc-300",
})`
  background-color: ${(props: colorProps) => props.color};
`;

export default ColorButton;
