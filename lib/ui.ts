const darkBase =
  "inline-flex h-11 min-w-[11.5rem] items-center justify-center px-5 text-sm font-medium tracking-tight transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";

/** Equal-sized button pair used on dark grounds (hero, footer). */
export const darkButton = {
  primary: `${darkBase} bg-paper text-ink hover:bg-paper/90`,
  secondary: `${darkBase} border border-paper/45 text-paper hover:border-paper hover:bg-paper/10`,
};
