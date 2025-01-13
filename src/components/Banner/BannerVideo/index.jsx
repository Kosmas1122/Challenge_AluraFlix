import styled from "styled-components";

const VideoStyled = styled.iframe`
// Desktop - Tablet:
  @media (min-width: 1024px) {
    position: absolute;
    right: 0px;
    height: 236px;
    width: 460px;
    border-radius: 15px;
    border: 5px solid #6bd1ff;
    box-shadow: inset 0px 0px 17px 8px #6bd1ff;
  }


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
