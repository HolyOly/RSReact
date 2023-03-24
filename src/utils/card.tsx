export function isProductCard(pet: IProductCard | IFormCardStore): pet is IProductCard {
  return (pet as IProductCard).like !== undefined;
}
