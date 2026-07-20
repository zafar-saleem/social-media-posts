const time = 1762250657522;

export const EVENTS = [
  {
    id: 1,
    title: "Conference",
    time: time - 1000*120*60, // ms*hours*seconds
    endTime: time - 1000*120*60 + 1000*60*60,
    date: new Date(),
    priority: "high",
    description: "Roadmap Conference",
    contributors: [
      {
        avatar: "J",
        avatar_color: "lime",
        name: "Jaren",
      },
      {
        avatar: "D",
        avatar_color: "cyan",
        name: "Dabeen",
      },
      {
        avatar: "X",
        avatar_color: "grey",
        name: "Xtevan",
      },
    ],
    href: "/event/detail/"
  },
  {
    id: 2,
    title: "Meeting",
    time: time,
    endTime: time + 1000*60*60,
    date: new Date(),
    priority: "medium",
    description: "Business meeting",
    contributors: [
      {
        avatar: "J",
        avatar_color: "aqua",
        name: "Jaren",
      },
      {
        avatar: "D",
        avatar_color: "bisque",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },
  {
    id: 3,
    title: "Sprint",
    time: time + 1000*120*60, // ms*hours*seconds
    endTime: time + 1000*120*60 + 1000*60*60,
    date: new Date(),
    priority: "low",
    description: "Sprint planning meeting",
    contributors: [
      {
        avatar: "J",
        avatar_color: "violet",
        name: "Jaren",
      },
      {
        avatar: "D",
        avatar_color: "yellowgreen",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },
  {
    id: 4,
    title: "Quarterly Meeting",
    time: time + 1000*60*60, // ms*hours*seconds
    date: new Date().getTime() + 24 * 60 * 60 * 1000,
    priority: "high",
    description: "Company wide quaterly meeting",
    contributors: [
      {
        avatar: "J",
        avatar_color: "wheat",
        name: "Jaren",
      },
      {
        avatar: "D",
        avatar_color: "turqoise",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },
  {
    id: 5,
    title: "Meetup",
    time: time - 1000*340*60, // ms*hours*seconds
    date: new Date().getTime() + 24 * 60 * 60 * 1000,
    priority: "low",
    description: "Social meetup",
    contributors: [
      {
        avatar: "J",
        name: "Jaren",
      },
      {
        avatar: "D",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },


  {
    id: 6,
    title: "Presentation",
    time: time + 1000*120*60, // ms*hours*seconds
    date: new Date().getTime() + 268 * 60 * 60 * 1000,
    priority: "high",
    description: "Presentation about new teams",
    contributors: [
      {
        avatar: "J",
        name: "Jaren",
      },
      {
        avatar: "D",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },
  {
    id: 7,
    title: "Show & Tell",
    time: time + 1000*520*60, // ms*hours*seconds
    date: new Date().getTime() + 268 * 60 * 60 * 1000,
    priority: "medium",
    description: "Show and tell last month's work",
    contributors: [
      {
        avatar: "J",
        name: "Jaren",
      },
      {
        avatar: "D",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },
  {
    id: 8,
    title: "Demo",
    time: time + 1000*520*60, // ms*hours*seconds
    date: new Date().getTime() + 268 * 60 * 60 * 1000,
    priority: "low",
    description: "Client project demo",
    contributors: [
      {
        avatar: "J",
        name: "Jaren",
      },
      {
        avatar: "D",
        name: "Dabeen",
      },
    ],
    href: "/event/detail/"
  },
]
