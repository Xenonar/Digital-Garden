import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedMdxElementProps {
  title: string,
  uid: string
}

const StyledSharedMdxElement = styled.div`
  color: pink;
`;

export function SharedMdxElement(props: SharedMdxElementProps) {
  return (
    <StyledSharedMdxElement>
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
        ></iframe>
    </StyledSharedMdxElement>
  );
}

export default SharedMdxElement;
