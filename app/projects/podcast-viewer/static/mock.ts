export type Episode = {
  id: number;
  title: string;
  date: string;
  description: string;
  audioSrc: string;
};

export const episodes: Episode[] = [
  {
    id: 5,
    title: "Bill Lumbergh",
    date: "February 24, 2022",
    description:
      "He's going to need you to go ahead and come in on Saturday, but there's a lot more to the story than you think.",
    audioSrc: "https://their-side-feed.vercel.app/episode-005.mp3",
  },
  {
    id: 4,
    title: "Shooter McGavin",
    date: "February 17, 2022",
    description:
      "When golf-obsessed terrorists kidnapped his family and held them hostage in exchange for a Golden Jacket, Shooter had no choice but to win the tour at any cost.",
    audioSrc: "https://their-side-feed.vercel.app/episode-004.mp3",
  },
  {
    id: 3,
    title: "The Wet Bandits",
    date: "February 10, 2022",
    description:
      "The Christmas of 1989 wasn't the first time Harry and Marv crossed paths with the McCallisters. The real story starts in 1973, when Peter tripped Marv in the highschool locker room.",
    audioSrc: "https://their-side-feed.vercel.app/episode-003.mp3",
  },
  {
    id: 2,
    title: "Hank Scorpio",
    date: "February 3, 2022",
    description:
      "What looks to outsiders like a malicious plan to conquer the east coast, was actually a story of liberation and freedom if you get it straight from the source.",
    audioSrc: "https://their-side-feed.vercel.app/episode-002.mp3",
  },
  {
    id: 1,
    title: "Skeletor",
    date: "January 27, 2022",
    description:
      "You know him as an evil supervillain, but his closest friends call him Jeff, and he's just doing his best to find his way in a world that doesn't know what to do with a talking skeleton.",
    audioSrc: "https://their-side-feed.vercel.app/episode-001.mp3",
  },
];