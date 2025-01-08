import styled from "styled-components";

const VideoStyled = styled.iframe`
  height: 333px;
  width: 650px;
  border-radius: 15px;
  border: 5px solid #6bd1ff;
  box-shadow: inset 0px 0px 17px 8px #6bd1ff;
`;

export default function BannerVideo() {
  return (
    <VideoStyled
      src="https://www.youtube.com/embed/ov7vA5HFe6w"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></VideoStyled>
  );
}
