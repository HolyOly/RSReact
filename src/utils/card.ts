export function isProductCard(pet: IProductCard | IShortForm): pet is IProductCard {
  return (pet as IProductCard).like !== undefined;
}

export const createArrOfPages = (from: number, totalRealPages: number) => {
  const arr = [];
  const lastDecade = Math.floor(totalRealPages / 10);
  const ceilPages = lastDecade * 10;
  const tailOfArr = totalRealPages - ceilPages;
  if (totalRealPages <= 10) {
    for (let i = from - 1; arr.length <= totalRealPages - 1; i++) {
      arr.push(i);
    }
    return arr;
  }
  if (totalRealPages - from - 1 < 10) {
    for (let i = from - 1; arr.length <= tailOfArr - 1; i++) {
      arr.push(i);
    }
    return arr;
  } else {
    for (let i = from - 1; arr.length < 10; i++) {
      arr.push(i);
    }
    return arr;
  }
};
