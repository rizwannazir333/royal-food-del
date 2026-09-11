export type Category = 
  | 'all' 
  | 'awadhi' 
  | 'french' 
  | 'persian' 
  | 'seafood' 
  | 'cellar';

export type ArtisanalNote = 
  | '24K Edible Gold'
  | 'Périgord Winter Truffle'
  | 'A5 Kagoshima Wagyu'
  | 'Royal Beluga Caviar'
  | 'Martell Cognac XO';

export interface Dish {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  tag: string;
  tagType: 'gold' | 'truffle' | 'french' | 'braise' | 'vintage' | 'caviar';
  price: number;
  portion: string;
  description: string;
  sommelierPairing: string;
  image: string;
  artisanalNotes: string[];
  serves: string;
  prepTime: string;
  temperatureTarget: string;
  heritageRecipe?: string;
  ingredients?: string[];
  isSignature?: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  addGoldLeaf?: boolean;
  addTruffleShavings?: boolean;
  specialInstructions?: string;
}

export type ViewTab = 
  | 'the-royal-menu' 
  | 'private-banquets' 
  | 'chefs-table' 
  | 'sommelier-and-cellar' 
  | 'our-heritage';

export interface LondonDistrict {
  id: string;
  name: string;
  postcode: string;
  transitTimeMin: number;
}
