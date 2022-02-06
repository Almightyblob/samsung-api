import styled from 'styled-components';

interface activeProps {
  active: boolean
}

const defaultClass = 'text-sm text-zink-600 font-semibold rounded-md hover:bg-zinc-400 p-2';
const activeClass = 'text-sm text-white bg-zinc-600 font-semibold rounded-md hover:bg-zinc-300 p-2';;

const MenuItem = styled.button.attrs((props:activeProps) => props.active ? ({className: `${activeClass}`}) : ({className: `${defaultClass}`})  )<activeProps>``;

export default MenuItem;