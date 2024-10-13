import React, { useEffect } from "react";

const App = () => { 
  function handleScroll() {
    console.log("calling ...");

    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 10
    ) {
      console.log("reached End of the Page ....");
    }
  }
  useEffect(() => {
    console.log("Data fetched initially ... ");

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="m-0 p-0">
      <div className="w-full h-[100vh] bg-zinc-900"></div>
      <div className="w-full h-[100vh] bg-stone-950"></div>
      <div className="w-full h-[100vh] bg-slate-950"></div>
    </div>
  );
};

export default App;
