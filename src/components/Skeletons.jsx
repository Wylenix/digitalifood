import Skeleton from "@mui/material/Skeleton";
export default function Skeletons() {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      <Skeleton
        animation="wave"
        variant="rectangular"
        width={210}
        height={60}
      />
      <Skeleton animation="wave" variant="rounded" width={210} height={60} />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={210}
        height={60}
      />
    </>
  );
}
