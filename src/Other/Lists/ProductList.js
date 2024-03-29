const productList = [
  //PATTERN
  {
    id: 1,
    img: "https://i.pinimg.com/564x/b7/6d/8c/b76d8c0290b6c52e63d06eb814a121e4.jpg",
    name: "Cute Quatuor",
    price: {
      small: 12.0,
      medium: 16.5,
      large: 21.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque quia laborum est tempore rem eaque temporibus ad, fuga, voluptatem reprehenderit repudiandae minus consequuntur nisi placeat maiores quaerat? Eos exercitationem nostrum quidem amet. Magni impedit eius porro at quisquam eligendi adipisci id laudantium non doloremque!",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "blue", "pink"],
    sold: 10,
    new: false,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/51/48/b7/5148b7777bee5e35b313c8383f46c90f.jpg",
    name: "Green and Girly",
    price: {
      small: 10.0,
      medium: 13.5,
      large: 20.0,
    },
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui quia placeat voluptates error vero odit repellat dignissimos commodi cupiditate earum saepe delectus obcaecati laboriosam, eius alias dolore unde. Voluptatibus.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["red", "purple", "green"],
    sold: 1,
    new: false,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/a9/c8/9d/a9c89da4e1db6768241c642098737bd8.jpg",
    name: "Little Garden",
    price: {
      small: 14.0,
      medium: 18.5,
      large: 25.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "blue", "pink", "purple"],
    sold: 8,
    new: false,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/82/4e/97/824e9775987b8b40cf49d4d4ef054baa.jpg",
    name: "Greenies",
    price: {
      small: 10.0,
      medium: 13.5,
      large: 20.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque quia laborum est tempore rem eaque temporibus ad, fuga, voluptatem reprehenderit repudiandae minus consequuntur nisi placeat maiores quaerat? Eos exercitationem nostrum quidem amet. Magni impedit eius porro at quisquam eligendi adipisci id laudantium non doloremque!",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "pink"],
    sold: 6,
    new: false,
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/43/45/ab/4345abe133ef0c599df03244d280852d.jpg",
    name: "Vivids",
    price: {
      small: 10.0,
      medium: 13.5,
      large: 20.0,
    },
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui quia placeat voluptates error vero odit repellat dignissimos commodi cupiditate earum saepe delectus obcaecati laboriosam, eius alias dolore unde. Voluptatibus.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["pink", "green", "red", "yellow"],
    sold: 5,
    new: false,
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/6a/c4/7a/6ac47ad2cbc77d5767c8c6cc8215ef7c.jpg",
    name: "Solita",
    price: {
      small: 8.0,
      medium: 12.5,
      large: 17.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "pink"],
    sold: 3,
    new: false,
  },
  {
    id: 7,
    img: "https://i.pinimg.com/564x/f9/f0/b3/f9f0b3bdb3b60debc880e4f1959b0dd0.jpg",
    name: "Sunny Sides",
    price: {
      small: 10.0,
      medium: 14.5,
      large: 20.0,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestias dolorem? Voluptatem quaerat sit explicabo dolor? Maxime iure, perferendis minus hic odit eius libero suscipit error, impedit nemo labore quidem? Aspernatur possimus dolores perspiciatis doloribus rerum assumenda fuga soluta quis eveniet, porro earum ratione exercitationem?",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["orange", "green", "pink", "purple"],
    sold: 3,
    new: true,
  },
  {
    id: 8,
    img: "https://i.pinimg.com/564x/8c/7e/54/8c7e54ead5c59011bb2257f6f5acd918.jpg",
    name: "Rosettes",
    price: {
      small: 8.0,
      medium: 12.5,
      large: 17.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["pink"],
    sold: 3,
    new: true,
  },
  {
    id: 9,
    img: "https://i.pinimg.com/564x/d7/f6/05/d7f605fc213fe926e81695ebb7a1b74c.jpg",
    name: "Sweet Gang",
    price: {
      small: 12.0,
      medium: 16.5,
      large: 21.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["pink", "orange", "purple", "green", "blue", "yellow"],
    sold: 3,
    new: true,
  },
  {
    id: 10,
    img: "https://i.pinimg.com/564x/19/35/2c/19352ccf414b31c9882d689154280d0e.jpg",
    name: "Grinks",
    price: {
      small: 8.0,
      medium: 12.5,
      large: 17.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "pink"],
    sold: 3,
    new: true,
  },
  {
    id: 11,
    img: "https://i.pinimg.com/564x/b2/21/ab/b221ab7c901927f1fec43ee57216508f.jpg",
    name: "Echeveria",
    price: {
      small: 10.0,
      medium: 13.5,
      large: 20.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "yellow"],
    sold: 3,
    new: false,
  },
  {
    id: 12,
    img: "https://i.pinimg.com/564x/9a/c8/e3/9ac8e3ec369cd235f7ebc9f84a7bade6.jpg",
    name: "Boxy",
    price: {
      small: 12.0,
      medium: 16.5,
      large: 21.0,
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, blanditiis! Rerum eligendi praesentium odio accusamus excepturi expedita impedit quisquam voluptate autem modi.",
    stock: {
      small: 4,
      medium: 3,
      large: 0,
    },
    colors: ["green", "yellow"],
    sold: 3,
    new: false,
  },
];

export default productList;

//Create functions for popular products and related products
