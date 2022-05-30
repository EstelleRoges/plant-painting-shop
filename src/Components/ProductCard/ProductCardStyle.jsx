import { styled } from "@mui/material";

export const linkStyle = {
  textDecoration: "none",
  fontSize: "22px",
  fontStyle: "italic",
  color: "#4E7B3D"
};

export const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const CardText = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 16px;
    margin: 10px 0 0 0;
    text-decoration: none;
  }
`;

export const ImgContent = styled("div")`
  img {
    margin-bottom: 0.5em;
    width: 100%;
    height: 250px;
    object-fit: contain;
  }
`;
