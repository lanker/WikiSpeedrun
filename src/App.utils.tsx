import { KeyboardEvent, useEffect } from "react";

const isNotDev = process.env.NODE_ENV !== "development";

export const useWikiConsoleLogo = () => {
  useEffect(() => {
    isNotDev &&
      console.log(
        "%cWikiSpeedrunGame",
        "font-weight: bold; background-color:#0e0d0d; font-size: 42px;color: #4acd79; text-shadow: 3px 3px 0 #33a75e , 6px 6px 0 #13793a , 9px 9px 0 #094d22; padding: 5%"
      );
  }, []);
};

export const useNoCheating = () => {
  const disableSearch = (e: globalThis.KeyboardEvent) => {
    console.log("DISABLE SEARCG");
    console.log(e.key, e.ctrlKey);
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
      e.preventDefault();
      console.error("No cheating!");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", disableSearch);

    return () => {
      window.removeEventListener("keydown", disableSearch);
    };
  }, []);
};
