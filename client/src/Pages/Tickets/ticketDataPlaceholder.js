const dummyData = {
  id: "",
  nickname: "",
  detailAddress: "",
  title: "",
  image:
    "https://elkcitychamber.com/wp-content/uploads/2022/08/Placeholder-Image-Square.png",
  scoreAverage: "",
  category: "",
  expiredAt: "",
  showAt: "",
  price: "",
};

const placeHolderArr = new Array(8).fill(0).map(() => {
  return { ...dummyData };
});

placeHolderArr.reduce((acc, cur) => {
  cur.id += acc;
  return acc + 1;
}, 1);

export default placeHolderArr;
