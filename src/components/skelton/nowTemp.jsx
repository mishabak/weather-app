import { Skeleton } from "@mui/material";

function Skelton_nowTemp() {
  return (
    <div className="mt-5">
      <div className="flex flex-nowrap justify-center items-center gap-[9.5px]">
        <Skeleton variant="rounded" width={40} height={40} />
        <span className="flex flex-nowrap items-start relative">
          <Skeleton variant="rounded" width={56} height={56} />
          <div className="text-[37.95px] leading-[35px] absolute  right-0 mr-[-20px] mt-[-10px]">°</div>
        </span>
      </div>
    </div>
  );
}

export default Skelton_nowTemp;
