/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
}
const CustomLinkStyle = styled.div`
  color: pink;
`
const Block = styled.div`
  background-color: white;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export function CustomLink({as, href, ...otherProps}: CustomLinkProps) {
  if (typeof window === 'undefined') {
    return (
    <>
    </>);
  } else {
  return (
    <CustomLinkStyle>
      <Block>
    <Link as={as} href={href} passHref >
      <a target="_blank" {...otherProps}/>
    </Link></Block></CustomLinkStyle>
  );}
}

export default CustomLink;
