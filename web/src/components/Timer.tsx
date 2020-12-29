import { useEffect, useState } from "react";
import { useInstanceId } from "./useInstanceId";

export default function Timer() {

  const id = useInstanceId()
  const [date, setDate] = useState(new Date());

  function updateTime() {
    const newDate = new Date();
    setDate(newDate);
  }

  useEffect(() => {
    // console.log(`initializing interval`);
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      // console.log(`clearing interval`);
      clearInterval(interval);
    };
  });


  return (
    <>
      id is {id}
      Now: {date.toLocaleTimeString()}
    </>
  );

}