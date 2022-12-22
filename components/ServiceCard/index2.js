import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard2 = ({ name, period, endPeriod}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  const date = new Date();
  const time = date.getFullYear()+"."+date.getMonth()+"."+date.getDate();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">{period ? period+" ~ " : time+" ~ " }{endPeriod ? endPeriod : ""}</p>
    </div>
  );
};

export default ServiceCard2;
