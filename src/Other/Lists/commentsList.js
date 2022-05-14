const commentList = [
  { id: 1, commenter: "Laureen", comment: "So cute!" },
  { id: 2, commenter: "Mark", comment: "As a plant lover, I love that!" },
  { id: 3, commenter: "Clyde", comment: "Bonnie will love it" },
  {
    id: 4,
    commenter: "MinnieMouse",
    comment: "Great painting! I love the colors so much!",
  },
  {
    id: 5,
    commenter: "Vasco",
    comment:
      "My GF loves this stuff...your painting made her so happy. Thanks for this.",
  },
  {
    id: 6,
    commenter: "Ilanna",
    comment: "Love the peace feeling I have when I see this painting <3",
  },
  {
    id: 7,
    commenter: "Natalia.J",
    comment: "Great! I took the biggest size and I'm in love!",
  },
  {
    id: 8,
    commenter: "Overlord",
    comment:
      "I received the product faster than planned. The painting came perfect!",
  },
  { id: 9, commenter: "AloeLover", comment: "Cute painting" },
  { id: 10, commenter: "Mel", comment: "Awesome!" },
];

const getRandomComments = () => {
  const picked1 = Math.floor(Math.random() * 10 + 1);
  const picked2 = Math.floor(Math.random() * 10 + 1);

  const randomComments = commentList.filter((comment) => {
    return comment.id === picked1 || comment.id === picked2
  });
  return randomComments;
};

export default commentList;
export { getRandomComments };
