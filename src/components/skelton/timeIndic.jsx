import Skeleton from "@mui/material/Skeleton";

function Skelton_timeIndic() {
  return (
    <div className="text-white p-2 flex items-center gap-[6px] flex-col justify-center text-[9.96px] ">
      <Skeleton variant="text" width={26} height={12} className="bg-red-200" />
      <div className="flex flex-nowrap justify-between w-[26px]">
        <Skeleton variant="text" width={12} className="bg-red-200" />
        <Skeleton variant="text" width={12} className="bg-red-200" />
      </div>
    </div>
  );
}

export default Skelton_timeIndic;
