export function isProductCard(pet: IProductCard | IShortForm): pet is IProductCard {
  return (pet as IProductCard).like !== undefined;
}

export function textTransformer(texts: string[]) {
  return texts.map((text) => text).join('\n');
}
