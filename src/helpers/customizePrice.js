const customizePrice = (num) => {
  let numStr = num.toString();
  let price = "";
  let leftNum = numStr;
  while (3 < leftNum.length) {
    let slicedNum = `,${leftNum.slice(-3)}`;
    price = slicedNum + price;
    leftNum = leftNum.substring(0, leftNum.length - 3);
  }
  price = `${leftNum}${price}`;
  return price;
};

export { customizePrice };
