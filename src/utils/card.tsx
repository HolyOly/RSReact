export function isProductCard(pet: IProductCard | IShortForm): pet is IProductCard {
  return (pet as IProductCard).like !== undefined;
}

export const createArrOfPages = (from: number) => {
  const arr = [];
  for (let i = from - 1; arr.length < 10; i++) {
    arr.push(i);
  }
  return arr;
};
