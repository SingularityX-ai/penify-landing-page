import suman from "public/images/teams/suman.webp";
import sunil from "public/images/teams/sunil.webp";
import popin from "public/images/teams/popin.webp";
import mayur from "public/images/teams/mayur.webp";

interface TeamItemsType {
  img: any;
  username: string;
  role: string;
  linkedIn: string;
}

export const teamItems: TeamItemsType[] = [
  {
    img: suman,
    username: "Suman Saurabh",
    role: "Co-Founder, Developer",
    linkedIn: "ssumansaurabh/",
  },
  {
    img: sunil,
    username: "Sunil Agarwal",
    role: "Co-Founder, Developer",
    linkedIn: "sunilagwl5/",
  },
  {
    img: popin,
    username: "Popin Bose Roy",
    role: "Co-Founder",
    linkedIn: "popinboseroy/",
  },
  {
    img: mayur,
    username: "Mayur Dayal",
    role: "Frontend Engineer, Designer",
    linkedIn: "mayur-dayal/",
  },
];
