import Skeleton from "@mui/material/Skeleton";

function Skelton_timeIndic() {
  return (
    <div className="text-white flex items-center gap-[6px] flex-col justify-center text-[8px] h-[47px]">
      <Skeleton variant="text" width={26} height={12} />
      <div className="flex flex-nowrap justify-between w-[26px]">
        <Skeleton variant="text" width={12} />
        <Skeleton variant="text" width={12} />
      </div>
    </div>
  );
}

export default Skelton_timeIndic;
