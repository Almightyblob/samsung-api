import styled from "styled-components";

interface colorProps {
  color: string;
}

const ColorButton = styled.button.attrs({
  className:
    "w-8 h-8 rounded-full border-2 border-zinc-300 duration-100  hover:scale-125  focus:border-blue-500 focus:scale-110",
})`
  background-color: ${(props: colorProps) => props.color};
`;

export default ColorButton;
