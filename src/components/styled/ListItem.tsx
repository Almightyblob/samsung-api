import styled from "styled-components";

interface mediumProps {
  medium?: boolean;
}

const baseClasses = "text-lg text-zinc-600 leading-loose";
const mediumClass = `${baseClasses} font-medium`;

const ListItem = styled.li.attrs((props: mediumProps) =>
  props.medium
    ? { className: `${mediumClass}` }
    : { className: `${baseClasses}` }
)<mediumProps>``;

export default ListItem;
