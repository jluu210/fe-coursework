import { useState, useEffect, useCallback } from "react";

function MountClock() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((previousToggle) => !previousToggle);
  }

  return (
    <div>
      <h2>CLOCK</h2>

      {toggle && <ClockWidget />}

      <button onClick={handleToggle}>{toggle ? "Unmount" : "Mount"}</button>
    </div>
  );
}

function Time() {
  const [time, setTime] = useState("");
  const updateTime = useCallback(() => {
    const now = new Date();
    const currTime = now.toLocaleTimeString();
    setTime(currTime);
  }, []);

  useEffect(() => {
    updateTime();
    const timerID = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [updateTime]);

  return <div> {time} </div>;
}

function ClockWidget() {
  return (
    <section className="clock-widget">
      <Time></Time>
    </section>
  );
}

export default MountClock;
