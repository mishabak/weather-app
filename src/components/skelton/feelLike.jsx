import { Skeleton } from "@mui/material";

function Skelton_feelLike() {
  return (
    <div className="mt-[7.8px] flex flex-nowrap justify-center text-[7.19px]">
      <Skeleton width={40}  />
      &nbsp;|&nbsp;
      <Skeleton  width={40}/>
    </div>
  );
}

export default Skelton_feelLike;
