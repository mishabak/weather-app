import WaterDrops from "../common/waterDrops";

function Climate() {
  const durations = [
    2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8, 2.3, 2.5, 2.3, 1.8,
    2.3, 2.5, 2.3, 1.8, 2.3,
  ];

  return (
    <div className="climate hidden md:block">
      <WaterDrops id={1} delay="3s" duration={durations} incType={1} waterDrop={20} />
      <WaterDrops
        id={2}
        delay="3.8s"
        duration={durations}
        incType={2}
        waterDrop={20}
      />
    </div>
  );
}

export default Climate;
