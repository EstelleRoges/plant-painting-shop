import { styled } from "@mui/material";

export const linkStyle = {
  textDecoration: "none",
  fontSize: "22px",
  fontStyle: "italic",
  color: "green"
};

export const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardText = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: baseline;

  p {
    font-size: 16px;
    margin-bottom: 0;
    text-decoration: none;
  }
`;

export const ImgContent = styled("div")`
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;
