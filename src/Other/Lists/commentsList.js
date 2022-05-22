const commentList = [
  { _id: 1, commenter: "Laureen", comment: "So cute!" },
  { _id: 2, commenter: "Mark", comment: "As a plant lover, I love that!" },
  { _id: 3, commenter: "Clyde", comment: "Bonnie will love it" },
  {
    _id: 4,
    commenter: "MinnieMouse",
    comment: "Great painting! I love the colors so much!",
  },
  {
    _id: 5,
    commenter: "Vasco",
    comment:
      "My GF loves this stuff...your painting made her so happy. Thanks for this.",
  },
  {
    _id: 6,
    commenter: "Ilanna",
    comment: "Love the peace feeling I have when I see this painting <3",
  },
  {
    _id: 7,
    commenter: "Natalia.J",
    comment: "Great! I took the biggest size and I'm in love!",
  },
  {
    _id: 8,
    commenter: "Overlord",
    comment:
      "I received the product faster than planned. The painting came perfect!",
  },
  { _id: 9, commenter: "AloeLover", comment: "Cute painting" },
  { _id: 10, commenter: "Mel", comment: "Awesome!" },
];

const getRandomComments = () => {
  const picked1 = Math.floor(Math.random() * 10 + 1);
  const picked2 = Math.floor(Math.random() * 10 + 1);

  const randomComments = commentList.filter((comment) => {
    return comment._id === picked1 || comment._id === picked2;
  });
  return randomComments;
};

export default commentList;
export { getRandomComments };
