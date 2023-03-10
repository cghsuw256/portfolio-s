import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ title, authority, date }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{title ? title : ""}</h1>
      <p className="mt-5 opacity-40 text-xl"> {authority ? authority : "" }</p>
      <p className="mt-5 opacity-40 text-xl" id="date">{date ? date : ""}</p>
    </div>
  );
};

export default ServiceCard;
