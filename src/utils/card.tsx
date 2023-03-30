export function isProductCard(pet: IProductCard | IFormFields): pet is IProductCard {
  return (pet as IProductCard).like !== undefined;
}
