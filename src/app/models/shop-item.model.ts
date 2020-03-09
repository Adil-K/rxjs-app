export class ShopItem {
  id?: number;
  name: string;
  stock?: number;
  price?: number;
  category?: string;
  sprite?: string;
  names: {
    name: string;
  };
  sprites: {
    default: string;
  };

  constructor(dto?: IShopItemDTO) {
    Object.assign(this, dto);
  }
}

export interface IShopItemDTO {
  name: string;
  stock?: number;
  price?: number;
  category?: string;
  sprite?: string;
}
