export interface Card {
  id: number;
  name?: string;
  title: string;
  phone: string;
  email?: string;
  address?: string;
  // burada "?" isareleri hemin datanin onemsiz oldugunu bildirir lakin digerleri cox onemlidir
}
