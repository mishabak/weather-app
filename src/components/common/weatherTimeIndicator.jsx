function WeatherTimeIndicator() {
  return (
    <div className="text-white p-2 flex items-center flex-col justify-center text-[9.96px] leading-[15px]">
      <div>Now</div>
      <div>
        🌨️
        <span>
          25<sup>°</sup>
        </span>
      </div>
    </div>
  );
}

export default WeatherTimeIndicator;
