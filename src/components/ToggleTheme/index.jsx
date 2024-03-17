import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useLayoutEffect } from "react";

const ToggleTheme = () => {
  const systemPreferences = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  useLayoutEffect(() => {
    systemPreferences && document.documentElement.classList.add("dark");
  });

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 block cursor-pointer dark:hidden"
        onClick={toggle}
      />
      <SunIcon
        className="h-8 text-gray-100 hidden cursor-pointer dark:block"
        onClick={toggle}
      />
    </div>
  );
};

export default ToggleTheme;
