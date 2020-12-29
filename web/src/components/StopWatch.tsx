import { useState } from "react";

export default function StopWatch() {
  const startTime = new Date();

  return (
    <>
    start: {startTime}
    </>
  );

}