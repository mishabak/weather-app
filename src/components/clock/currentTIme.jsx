import { useState, useEffect } from "react";
import moment from "moment";

const LiveClock = () => {
  const [time, setTime] = useState(moment().format("hh:mm:ss A"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="w-[45px]">{time}</div>;
};

export default LiveClock;
