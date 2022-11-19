const users = [
  {
    name: "Sumeth",
    nickname: "Touch",
    hobby: "Sleep",
    address: "Pattanakarn 39",
    province: {
      province: "Bangkok",
      postcode: "10250",
    },
  },
  {
    name: "Chatinun",
    nickname: "Max",
    hobby: "Sleep",
    address: "Pattanakarn 44",
    province: {
      province: "Bangkok",
      postcode: "1112",
    },
  },
  {
    name: "Thitipun",
    nickname: "Be",
    hobby: "Sleep",
    address: "Sun",
    province: {
      province: "Bangkok",
      postcode: "1150",}
    }
];

for (const u of users) {
  console.log(`My nickname is ${u.name}, My hobby is ${u.hobby}
  and my post code is ${u.province.postcode}`);
}
