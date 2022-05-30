import { styled, Tabs, Tab } from "@mui/material";

export const TabList = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "green",
  },
});

export const TabGroup = styled("div")`
  width: 100%;
`;

export const UserTab = styled(Tab)({
  "&.MuiButtonBase-root.MuiTab-root": {
    color: "#578943",
  },
});

export const InfoDiv = styled("div")`
  margin: 2em;
  padding: 1.5em;
  border: 1px solid transparent;
  display: flex;
  border-radius: 2em;
  box-shadow: 4px 4px 15px #ADD09F;
`;

export const SubInfoDiv = styled("div")`
  margin: auto;
  margin-top: 0;
  justify-items: flex-start;

  h2 {
    margin-left: 0;
    font-size: 34px;
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
`;

export const SubInfo = styled("div")`
  margin: auto;
  width: 350px;
`;

export const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;

  div:first-of-type {
    margin-right: 1em;
  }
`;

export const DecoImg = styled("img")`
  position: absolute;
  top: -1.7em;
  right: -1em;
  width: 130px;
  height: 130px;
  z-index: -1;
`;
