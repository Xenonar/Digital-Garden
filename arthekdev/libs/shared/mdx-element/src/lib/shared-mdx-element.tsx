import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedMdxElementProps {}

const StyledSharedMdxElement = styled.div`
  color: pink;
`;

export function SharedMdxElement(props: SharedMdxElementProps) {
  return (
    <StyledSharedMdxElement>
      <h1>Welcome to SharedMdxElement!</h1>
    </StyledSharedMdxElement>
  );
}

export default SharedMdxElement;
