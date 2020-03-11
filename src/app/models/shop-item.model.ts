export class ShopItem {
  id: number;
  name: string;
  cost: number;
  names?: {
    name: string;
  };
  sprites?: {
    default: string;
  };

  constructor(dto?: IShopItemDTO) {
    Object.assign(this, dto);
  }
}

export interface IShopItemDTO {
  id: number;
  name: string;
  cost: number;
}
