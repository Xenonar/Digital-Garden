import Link from 'next/link';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
}
const CustomLinkStyle = styled.div`
  color: pink;
`;

export function CustomLink({as, href, ...otherProps}: CustomLinkProps) {

  return (
    <CustomLinkStyle>
    <Link as={as} href={href}>
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a className='bg-yellow-100' {...otherProps}/>
    </Link></CustomLinkStyle>
  );
}

export default CustomLink;
