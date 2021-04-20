import {
    ArrowNarrowLeftIcon,
    CheckIcon,
    HomeIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ThumbUpIcon,
  } from "@heroicons/vue/solid";
  import {
    BellIcon,
    MenuIcon,
    XIcon,
    ShieldExclamationIcon,
  } from "@heroicons/vue/outline";

export const eventTypes = {
  reported: { icon: ShieldExclamationIcon, bgColorClass: "bg-red-400" },
  normal: { icon: ThumbUpIcon, bgColorClass: "bg-blue-500" },
  moderated: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};

export const users = [
  {
    name: "Dries Vincent",
    username: "Quatschkopf88",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

    usesExplicitContent: false,
  },
  {
    username: "LadyBug14",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    usesExplicitContent: false,
  },
  {
    username: "BrachiusBronchitus",
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    usesExplicitContent: false,
  },
];

export const comments = [
  {
    id: 1,
    user: {
      username: "BrachiusBronchitus",
      name: "Michael Foster",
      imageId:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      usesExplicitContent: false,
    },
    date: "4d ago",
    body:
      "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
  },
  {
    id: 2,
    date: "4d ago",
    user: {
      username: "LadyBug14",
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      usesExplicitContent: false,
    },
    body:
      "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
  },
  {
    id: 3,
    date: "4d ago",
    user: {
      name: "Dries Vincent",
      username: "Quatschkopf88",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

      usesExplicitContent: false,
    },
    body:
      "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
  },
];

export const timeline = [
  {
    id: 1,
    type: eventTypes.normal,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 20",
    datetime: "2020-09-20",
  },
  {
    id: 2,
    type: eventTypes.normal,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 22",
    datetime: "2020-09-22",
  },
  {
    id: 3,
    type: eventTypes.moderated,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 28",
    datetime: "2020-09-28",
  },
  {
    id: 4,
    type: eventTypes.reported,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 30",
    datetime: "2020-09-30",
  },
  {
    id: 5,
    type: eventTypes.moderated,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Oct 4",
    datetime: "2020-10-04",
  },
];

export const messages = [
  {
    id: "81614",
    author: {
      username: "LadyBug14",
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      usesExplicitContent: false,
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    supervisor: false,
    request: false,
    body:
      "Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation. Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be &#x231A;",
  },
];
