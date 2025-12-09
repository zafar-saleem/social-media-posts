export const data = {
  title: "Multi Page Website",
  client: "Dulgeon",
  members: 2,
  progress: "30%",
  duration: 84,
  total_milestones: [
    {
      id: 2,
      text: "Development",
      color: "rgb(251 190 116)",
      start_date: "Sep 21, 2024",
      end_date: "Nov 28, 2024",
      label: "Nov 28",
      duration: 37,
    },
    {
      id: 1,
      text: "Design",
      color: "rgb(238 245 114)",
      start_date: "Sep 5, 2024",
      end_date: "Sep 20, 2024",
      label: "Sep 20",
      duration: 15,
    },
    {
      id: 3,
      text: "Testing",
      color: "rgb(99 209 203)",
      start_date: "Sep 22, 2024",
      end_date: "Dec 24, 2024",
      label: "Dec 24",
      duration: 32,
    }
  ],
  milestones: [
    {
      assignee: {
        avatar: "T",
        handle: "Timoa",
        profile_link: "#",
        id: 1,
        roles: ["Design"],
        color: "burlywood",
      },
      tasks: [{
        text: "Design",
        color: "rgb(238 245 114)",
        start_date: "Sep 5, 2024",
        end_date: "Oct 20, 2024",
        label: "Oct 20",
      }],
      color: "rgb(238 245 114)",
    },
    {
      assignee: {
        avatar: "A",
        handle: "Auzeb",
        profile_link: "#",
        id: 2,
        roles: ["Development", "Testing"],
        color: "cadetblue",
      },
      tasks: [{
        text: "Development",
        color: "rgb(251 190 116)",
        start_date: "Oct 21, 2024",
        end_date: "Nov 2, 2024",
        label: "Nov 21",
      }, {
        text: "Testing",
        color: "rgb(99 209 203)",
        start_date: "Nov 3, 2024",
        end_date: "Dec 24, 2024",
        label: "Dec 24",
      }],
      color: "rgb(251 190 116)",
    }
  ]
}