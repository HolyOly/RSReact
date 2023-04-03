export function isProductCard(pet: IProductCard | IShortForm): pet is IProductCard {
  return (pet as IProductCard).like !== undefined;
}
