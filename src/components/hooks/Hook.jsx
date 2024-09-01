import useMediaQuery from "@mui/material/useMediaQuery";

export const useMobile = (xs) => {
  const useMobileSm = useMediaQuery("(max-width:900px)");
  const useMobileXs = useMediaQuery("(max-width:600px)");

  return xs ? useMobileXs : useMobileSm;
};