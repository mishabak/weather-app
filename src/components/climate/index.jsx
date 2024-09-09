import WaterDrops from "../common/waterDrops";

function Climate() {
  const durations = [
    2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8,
    2.3, 2.5, 2.3, 1.8, 2.3,
  ];

  return (
    <div className="climate hidden md:block">
      <WaterDrops delay="3s" duration={durations} incType={1} waterDrop={20} />
      <WaterDrops
        delay="3.8s"
        duration={durations}
        incType={2}
        waterDrop={20}
      />
    </div>
  );
}

export default Climate;
