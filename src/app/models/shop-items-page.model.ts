export class ShopItemsPage {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    },
  ];

  constructor(dto?: IShopItemsPageDTO) {
    Object.assign(this, dto);
  }
}

export interface IShopItemsPageDTO {
  count: number;
  next?: string;
  previous?: string;
  results?: [
    {
      name: string;
      url: string;
    },
  ];
}
