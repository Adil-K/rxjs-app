export class CartItem {
  id: number;
  name: string;
  amount: number;
  cost: number;
  sprite?: string;

  constructor(dto?: ICartItemDTO) {
    Object.assign(this, dto);
  }
}

export interface ICartItemDTO {
  id: number;
  name: string;
  amount: number;
  cost: number;
  sprite?: string;
}
