import React from "react";
import {
  StyledButton,
  StyledParagraph,
  StyledTitle,
  StylesContainer,
} from "./styledCss";
import Button from "@mui/material/Button";
import SimpleDialogDemo from "./DialogBox";
import { CircularProgress } from "@mui/material";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import ComboBox from "./DropDown";

const StyledComponent = () => {
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <StylesContainer>
      <StyledTitle isRed={true} bgColor="#62e378">
        Styled Component
      </StyledTitle>
      <StyledParagraph>This is styled paragraph</StyledParagraph>
      <StyledButton>Click</StyledButton>
      <StyledTitle isRed={false} bgColor="#3b3b8f">
        Styled Component
      </StyledTitle>

      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>

      <SimpleDialogDemo />

      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />

      <div>
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />
        <HomeIcon sx={{ color: pink[500] }} />
      </div>

      <ComboBox/>
    </StylesContainer>
  );
};

export default StyledComponent;
