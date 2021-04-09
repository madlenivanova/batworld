import { setMargin, setPadding } from "@styles/spacing";
export const enableMarginAndPadding = (props) => {
  let styles = ``;
  styles += props.mt ? setMargin(["top"], props.mt) : "";
  styles += props.mb ? setMargin(["bottom"], props.mb) : "";
  styles += props.ml ? setMargin(["left"], props.ml) : "";
  styles += props.mr ? setMargin(["right"], props.mr) : "";
  styles += props.p ? setPadding("all", props.p) : "";
  styles += props.pt ? setPadding(["top"], props.pt) : "";
  styles += props.pb ? setPadding(["bottom"], props.pb) : "";
  styles += props.pl ? setPadding(["left"], props.pl) : "";
  styles += props.pr ? setPadding(["right"], props.pr) : "";

  return styles;
};

export const TEXT_SIZES = {
  sm: {
    mobile: 10,
    tablet: 10,
    desktop: 12,
  },
  md: {
    mobile: 16,
    tablet: 16,
    desktop: 16,
  },
  lg: {
    mobile: 24,
    tablet: 32,
    desktop: 32,
  },
  xl: {
    mobile: 32,
    tablet: 48,
    desktop: 60,
  },
};

export const TITLE_SIZES = {
  xs: {
    mobile: 14,
    tablet: 14,
    desktop: 14,
  },
  sm: {
    mobile: 16,
    tablet: 16,
    desktop: 16,
  },
  md: {
    mobile: 20,
    tablet: 22,
    desktop: 22,
  },
  lg: {
    mobile: 24,
    tablet: 32,
    desktop: 32,
  },
  xl: {
    mobile: 32,
    tablet: 48,
    desktop: 60,
  },
};