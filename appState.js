const appState = {
  currentUser: {
    accessToken: "",
    firstName: "Prime",
    middleName: "Time",
    lastName: "Tran",
    dateOfBirth: "Mon Jul 22 2000 17:39:27 GMT+0700 (Indochina Time)",
    posts: [],
    comments: [],
    reactions: [],
    photos: [],
    friends: [],
  },
  posts: [
    {
      body: "Hello Im a post",
      ownerId: ObjectId(""),
      images: ObjectId(""),
      reactions: [],
      comments: [],
    },
  ],
  comments: [
    {
      body: "Hello Im a post",
      ownerId: ObjectId(""),
      images: ObjectId(""),
      reactions: [],
      comments: [],
    },
  ],
  events: [],
  friendships: [],
  reactions: [],
  photos: [],
  conversations: [],
  messages: [],
};