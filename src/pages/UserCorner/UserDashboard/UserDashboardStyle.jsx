import { styled, Tabs, Tab, Box } from "@mui/material";

export const TabList = styled(Tabs)({
  "& .MuiTabs-flexContainer": {
    justifyContent: "space-around",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "green",
  },
});

export const UserBox = styled(Box)({
  margin: "auto",
  maxWidth: "1400px",
  display: "flex",
  paddingLeft: "0",
});

export const TabGroup = styled("div")`
  width: 100%;
`;

export const UserTab = styled(Tab)({
  "&.MuiButtonBase-root.MuiTab-root": {
    backgroundColor: "transparent",
    color: "#578943",
  },
});

export const InfoDiv = styled("div")`
  margin: 2em;
  padding: 1.5em;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  border-radius: 2em;
  box-shadow: 4px 4px 15px #add09f;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    margin: 2em 0;
  }
`;

export const SubInfoDiv = styled("div")`
  margin: 0 3em;
  width: 100%;
  justify-items: flex-start;

  h2 {
    margin-left: 0;
    font-size: 34px;
  }

  @media screen and (max-width: 1040px) {
    font-size: 14px;
  }
  @media screen and (max-width: 992px) {
    margin: 0;
    width: auto;
  }
`;

export const RowDiv = styled("div")`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 40px;
    letter-spacing: 1px;
  }

  p {
    margin: 0;
  }

  div {
    margin: 0 1em;
  }

  label {
    display: block;
  }
  
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SubInfo = styled("div")`
  margin: auto;
  width: 100%;
  text-align: start;
`;

export const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;

  div:first-of-type {
    margin-right: 1em;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    div:first-of-type {
      margin-right: 0;
    }
  }
`;

export const DecoImg = styled("img")`
  position: absolute;
  top: -1.7em;
  right: -1em;
  width: 130px;
  height: 130px;
  z-index: -1;

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const OptionBtns = styled("div")`
  display: flex;
  flex-direction: row-reverse;

  button:first-of-type {
    background-color: #e94957;
  }

  button:last-of-type {
    background-color: #ffa033;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column-reverse;
    align-items: center;

    button {
      margin: 0.5em 0;
    }
  }
`;
