import { Skeleton } from "@mui/material";

function Skelton_aboutCty() {
  return (
    <div className="flex items-center flex-col mt-[7.8px]">
      <Skeleton className="text-[9.59px]" variant="rounded" width={25} />
      <div className=" gap-1 text-[7.19px]">
        <div className="mt-[7.8px] flex flex-nowrap gap-1">
          <Skeleton variant="rounded"  width={40} />
          <Skeleton variant="rounded"  width={40} />
        </div>
          </div>
          <Skeleton
          className="mt-[7.8px] text-[7.19px] ml-auto mr-auto"
          variant="rounded"
          width={20}
        />
    </div>
  );
}

export default Skelton_aboutCty;
