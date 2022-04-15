import styled from 'styled-components';

/* eslint-disable-next-line */
export interface YoutubeProps {}

const StyledYoutube = styled.div`
  color: pink;
`;

export function Youtube(props: YoutubeProps) {
  return (
    <StyledYoutube>
      <h1>Welcome to Youtube!</h1>
    </StyledYoutube>
  );
}

export default Youtube;
