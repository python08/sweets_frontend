"use client";

import type { BackdropTypeMap } from "@mui/material/Backdrop";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import { LoaderStyle } from "@components/styles/style";

const Loader: OverridableComponent<BackdropTypeMap<object, "div">> = () => (
  <Backdrop sx={LoaderStyle} open>
    <CircularProgress color="inherit" />
  </Backdrop>
);
export default Loader;
