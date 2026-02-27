export interface Tutorial {
  id: string;
  date: string;
  title: string;
  path: string;
}

export const tutorials: Tutorial[] = [
  {
    id: "session-1",
    date: "Feb 19",
    title: "驾驭 Claude/AI",
    path: "/",
  },
  {
    id: "session-2",
    date: "Feb 26",
    title: "Building Skills",
    path: "/session-2",
  },
];
