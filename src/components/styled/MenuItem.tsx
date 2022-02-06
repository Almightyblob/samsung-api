import styled from 'styled-components';

interface activeProps {
  active: boolean
}
const baseClasses = 'text-sm font-semibold rounded-md duration-100 p-2'
const defaultClass = `${baseClasses} text-zink-600 hover:bg-zinc-400`;
const activeClass = `${baseClasses} text-white bg-zinc-600 hover:bg-zinc-300`;

const MenuItem = styled.button.attrs((props:activeProps) => props.active ? ({className: `${activeClass}`}) : ({className: `${defaultClass}`})  )<activeProps>``;

export default MenuItem;