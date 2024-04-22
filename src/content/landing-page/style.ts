// eslint-disable
export const heroDescriptionStyle = (extraLarge: boolean) => {
  // large screen
  if (extraLarge) {
    return {
      padding: "6rem 2rem 2rem 4rem",
      marginTop: "",
    };
  }
  return {
    padding: "2.5rem 2rem 2rem 4rem",
    marginTop: "4rem",
  };
};

const mainImageContainer = (smallSize: boolean) => ({
  height: smallSize ? "" : "100vh",
  width: "100%",
  position: smallSize ? "" : "relative",
  borderTopLeftRadius: "100px",
  borderBottomLeftRadius: "100px",
  overflow: "hidden",
});

const secondaryImageContainer = {
  height: "100%",
  width: "100%",
};

const leftSection = (lgDown: boolean) => ({
  height: "100vh",
  zIndex: 5,
  color: lgDown ? "white" : "black",
});

const heroDescriptionContainer = (lgDown: boolean) => ({
  position: "relative",
  height: "50vh",
  borderTopRightRadius: lgDown ? "" : "100px",
  borderBottomRightRadius: lgDown ? "" : "100px",
  overflow: "hidden",
  color: "white",
  backgroundColor: lgDown ? "" : "rgba(0,0,0,0.4)",
});

const viewProducts = {
  borderRadius: "10px",
  color: "black",
  borderColor: "black",
};

export const style = {
  mainImageContainer,
  secondaryImageContainer,
  leftSection,
  heroDescriptionContainer,
  viewProducts,
};
