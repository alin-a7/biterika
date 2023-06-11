export interface Campaign {
  id: number;
  title: string;
  city: string;
  state: string;
  locations: number;
  transports: number;
  display: string;
  budget: number;
  photos: string[];
}
