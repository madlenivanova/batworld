// A few utilities to allow for consistent spacing across the page
// refactor thoughhhh
export const SPACINGS = {
  xs: {
    mobile: "4",
    tablet: "4",
    desktop: "8",
  },
  sm: {
    mobile: "8",
    tablet: "8",
    desktop: "16",
  },
  md: {
    mobile: "30",
    tablet: "45",
    desktop: "54",
  },
  lg: {
    mobile: "45",
    tablet: "75",
    desktop: "128",
  },
  xl: {
    mobile: "120",
    tablet: "120",
    desktop: "180",
  },
};

export const setPadding = (dir, size) => {
  // dir is array ['top', 'bottom' ... ] or string 'all'
  let style = "";
  if (typeof dir === "object") {
    dir.forEach(pos => {
      style += `
				padding-${pos}: ${SPACINGS[size || "md"].mobile}px; 

				@media (min-width: 768px) {
					padding-${pos}: ${SPACINGS[size || "md"].tablet}px;
				}

				@media (min-width: 1200px) {
					padding-${pos}: ${SPACINGS[size || "md"].desktop}px;
				}`;
    });
  } else if (dir === "all") {
    style = `
			padding: ${SPACINGS[size || "md"].mobile}px; 

			@media (min-width: 768px) {
				padding: ${SPACINGS[size || "md"].desktop}px;
			}

			@media (min-width: 1200px) {
				padding: ${SPACINGS[size || "md"].desktop}px;
			}
		`;
  }

  return style;
};

export const setMargin = (dir, size) => {
  let style = "";
  if (typeof dir === "object") {
    dir.forEach(pos => {
      style += `
				margin-${pos}: ${SPACINGS[size || "md"].mobile}px; 
				
				@media (min-width: 768px) {
					margin-${pos}: ${SPACINGS[size || "md"].tablet}px;
				}
				
				@media (min-width: 1200px) {
					margin-${pos}: ${SPACINGS[size || "md"].desktop}px;
				}`;
    });
  } else if (dir === "all") {
    style = `
			margin: ${SPACINGS[size || "md"].mobile}px; 
			
			@media (min-width: 768px) {
				margin: ${SPACINGS[size || "md"].tablet}px;
			}
			
			@media (min-width: 1200px) {
				margin: ${SPACINGS[size || "md"].desktop}px;
			}`;
  }

  return style;
};

export const enableMarginAndPadding = props => {
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
