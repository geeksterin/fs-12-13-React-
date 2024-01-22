import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const Optimization = () => {
  const [selectedNum, setSelectedNum] = useState(100);
  const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setTimer((oldTimer) => oldTimer + 1);
//     }, 1_000);
//   }, []);

  // `time` is a state variable that changes once per second,
  // so that it's always in sync with the current time.
  //   const time = useTime();

  // Calculate all of the prime numbers.
  // (Unchanged from the earlier example.)
  const allPrimes = useMemo(() => {
    const result = [];
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }
    return result;
  }, [selectedNum]);

  return (
    <>
      <h1>Optimization</h1>
      <Link to={"/settings"}>Settings</Link>
      <p className="clock">{timer}</p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
};

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

function isPrime(n) {
  console.log("Is Prime", n);
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default Optimization;
