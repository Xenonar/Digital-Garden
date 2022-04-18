import styled from 'styled-components';

/* eslint-disable-next-line */
export interface YoutubeProps {
  title: string,
  uid: string
}

const StyledYoutube = styled.div`
  color: pink;
`;

export function Youtube(props: YoutubeProps) {
  if (typeof window === 'undefined') {
    return (
    <>
    </>);
  } else {
  return (
    <StyledYoutube>
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
        ></iframe>
    </StyledYoutube>
  );}
}

export default Youtube;
