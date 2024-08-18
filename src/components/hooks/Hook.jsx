import useMediaQuery from "@mui/material/useMediaQuery";

export const useMobile = () => {
    const useMobile = useMediaQuery("(max-width:600px)");
    return useMobile;
  };