import { Dish, LondonDistrict } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1V4m-TkGUPH_45AZEXpLSSGvMqhuyVHCnhSdMZZlCUGxfV4ki69d3WLSZkwrQ5oWAlc_0-8OGJ50qbUVP51_tfcLpLI24Wrjtf09W3CbttQKOp2KANraJc6C-xPRzrA0kovwIGR7dXjSWNleOAuHy2YkZ1QapIfLLspwMdSQNvWAXFqOlsKQrIJdpdyAhb4eYRxN5UQMusHHFOvnhS8W-i13275P1QSev2tmUGjcwGkkN51_3nsKpcK4bs';

export const LONDON_DISTRICTS: LondonDistrict[] = [
  { id: 'mayfair', name: 'Mayfair, London', postcode: 'W1J / W1K', transitTimeMin: 25 },
  { id: 'belgravia', name: 'Belgravia, London', postcode: 'SW1X / SW1W', transitTimeMin: 30 },
  { id: 'knightsbridge', name: 'Knightsbridge, London', postcode: 'SW1X / SW7', transitTimeMin: 30 },
  { id: 'kensington', name: 'Kensington Palace Gardens, London', postcode: 'W8', transitTimeMin: 35 },
  { id: 'stjames', name: "St. James's, London", postcode: 'SW1A', transitTimeMin: 20 },
  { id: 'chelsea', name: 'Chelsea Embankment, London', postcode: 'SW3', transitTimeMin: 35 },
  { id: 'regents', name: "Regent's Park Private Outer Circle", postcode: 'NW1', transitTimeMin: 40 },
];

export const DISHES: Dish[] = [
  {
    id: 'awadhi-biryani',
    name: 'Imperial Awadhi Dum Biryani',
    subtitle: 'Lucknow Royal Palace Recipe',
    category: 'awadhi',
    tag: '24K Gold Leaf',
    tagType: 'gold',
    price: 48,
    portion: 'Serves 2 Nobles',
    serves: '2 Guests',
    prepTime: '12-Hour Slow Dum Seal',
    temperatureTarget: '68°C Thermal Lock',
    description:
      '12-hour slow-cooked milk-fed Welsh lamb shoulder, 2-year matured aged Dehradun basmati, saffron-infused kewra, fried shallots, finished under hand-sealed dough lid.',
    sommelierPairing: '2018 Domaine Dujac Morey-Saint-Denis',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1W9l4d6HbfoI80jsy3lMYPTUqnmZyZswCh83Iv4iQAzpJnNEA3qdZwbcOxz0ZvNrTnmgUx0jCNis5OdwYXQmZ4VBaZZfdfJi8zdJHa5bo4u9e9vUsNl2hFuYUKkHcBZ4RPuQKVOB-gbXFnp38nlEaY1bSzESQhwOGSvtsXVj6o0LNGckgBvFOWtx13DFdjTDyBluczuRaUwzsXuHYNZpSZ_yosiyoAfgbeM84WZvd16i6jux_h9xGm5nVU',
    artisanalNotes: ['24K Edible Gold'],
    heritageRecipe: 'Nawabs of Oudh Private Archive, circa 1856',
    ingredients: [
      'Slow-braised Welsh Lamb Shoulder',
      '2-Year Aged Vintage Dehradun Basmati',
      'Kashmiri Mogra Saffron',
      'Florentine 24K Edible Gold Leaf',
      'Attar of Rose & Kewra Distillate',
      'Desi Gir Cow Ghee',
      'Hand-kneaded Atta Dough Seal'
    ],
    isSignature: true
  },
  {
    id: 'saffron-galouti',
    name: 'Smoked Saffron Truffle Galouti',
    subtitle: '160-Spice Formulation',
    category: 'awadhi',
    tag: 'Winter Truffle',
    tagType: 'truffle',
    price: 36,
    portion: '6 Medallions',
    serves: '2-3 Guests',
    prepTime: 'Smoked Charcoal Infusion',
    temperatureTarget: '65°C Thermal Lock',
    description:
      'Velvet-textured organic lamb medallions infused with smoked clove charcoal, aged saffron, Périgord black truffle butter, and hand-beaten silver vark leaf.',
    sommelierPairing: '2016 Château Palmer Margaux',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvM42ZQyEtyXCJ53N7cLXSFQw0xk_GALjWBuUjuEfLSXaAO9ygSFDkCSnaEU0VWLr04et3vraVAEZrI5FKsCGPIsSidC0ZV5bEJ3daAQp5dQqp_GjeBwUNXaMdJC1kvDhPBnKMGWsYwgvcch3pkP_6cXp8ZXUBV5UDDSgwA9y_HO-DsAIx9Ob6LwZIKWb55XreWT5PZJzapXkkuohjxrtEDLdfhv-VCEmEeDFeqze5xr3e3ws5WO3A',
    artisanalNotes: ['Périgord Winter Truffle'],
    heritageRecipe: 'Royal Nizami Court Banquet Secrets, 1888',
    ingredients: [
      'Silky Minced Salt-Marsh Lamb',
      'Périgord Black Truffle Butter (Tuber melanosporum)',
      'Smoked Clove Dhungar Charcoal Essence',
      'Pure Kashmiri Saffron Strands',
      'Stone-ground Rose Petals & Green Cardamom',
      'Silver Vark Foliage'
    ],
    isSignature: true
  },
  {
    id: 'lobster-thermidor',
    name: 'Lobster Thermidor Imperial',
    subtitle: 'Brittany Blue Lobster',
    category: 'french',
    tag: 'Royal French',
    tagType: 'french',
    price: 58,
    portion: 'Whole Tail & Claws',
    serves: '1-2 Guests',
    prepTime: 'Fresh Live Deglaze',
    temperatureTarget: '70°C Thermal Lock',
    description:
      'Whole Atlantic blue lobster simmered in vintage Martell XO reduction, Dijon egg emulsion, tarragon, and 24-month reserve cave-aged Gruyère gratin.',
    sommelierPairing: '2017 Meursault Premier Cru',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCie2OSLSdxIoMziz0P28G-koRYcWtbRgv85MrO0f5NdSQmqa2i1hqzrkQuSkMyzT5MAUBHovuxJZA4xJaQkQqh2-1EM3UNnqOfM7NLmPCQP_rNqxvX-cim243e-5VdpP7uJdtSIt752O8erDxa3bTlyGHyOAt0O2N6yg_004Te8p3ORpSPf_JmUinpt7XFHs_FCgqmr-DkaGVP73oq_TMVmP1oOwqLQvRhRMSoVkD5jdoUS_ept_qO',
    artisanalNotes: ['Martell Cognac XO'],
    heritageRecipe: 'Café de Paris Aristocratic Classical Masterpiece',
    ingredients: [
      'Wild Brittany Blue Lobster Tail & Claws',
      'Martell XO Cognac Reduction',
      'Cave-Aged 24-Month Swiss Gruyère AOP',
      'Organic Egg Yolk Velvet Emulsion',
      'Fresh French Chervil & Tarragon',
      'Fleur de Sel de Guérande'
    ],
    isSignature: true
  },
  {
    id: 'peshawari-raan',
    name: 'Peshawari Raan Musallam',
    subtitle: 'Grand Table Centerpiece',
    category: 'awadhi',
    tag: '48h Pot Braise',
    tagType: 'braise',
    price: 72,
    portion: 'Serves 3–4',
    serves: '3-4 Guests',
    prepTime: '48-Hour Copper Pot Simmer',
    temperatureTarget: '72°C Thermal Lock',
    description:
      'Whole spring lamb leg slow-braised for two days in rich marrow jus, wild sour pomegranate molasses, crushed green cardamom, and Turkish pistachios.',
    sommelierPairing: '2015 Sassicaia Bolgheri Superiore',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmdCIjNCDYHH8vJXS6FmkEqoCWawvj1E98WPz3RL4wE4o5mx927KqwJltZSiwcHRMPmUarppEeazEbh7X9a8mmFmxcdbUpWR4D8fArLRN6pzQ_CIaEnrIuxXR-P06-dXGmbGxc3e0QmhZ4hZ9lw8HU1A70h7L7PbNhAL7XHC9MnApZwPXDyt6U3UsCsS9lKy2dzJXDE0Vfim1RImIdDRuYL4JNHkBkLLQRKRBMKrNuTANtTXh7oDtQ',
    artisanalNotes: ['Périgord Winter Truffle'],
    heritageRecipe: 'Grand Trunk Road Mughal Royal Durbar Recipe',
    ingredients: [
      'Prime Whole English Spring Lamb Leg',
      'Bone Marrow Reduced Glaze',
      'Wild Anatolian Sour Pomegranate Molasses',
      'Crushed Antep Pistachios',
      'Star Anise & Green Cardamom',
      'Saffron Infused Bone Broth'
    ],
    isSignature: true
  },
  {
    id: 'wagyu-koobideh',
    name: 'A5 Kagoshima Wagyu Koobideh',
    subtitle: 'Tehran Royal Pavilion Charcoal Grill',
    category: 'persian',
    tag: 'A5 Kagoshima',
    tagType: 'gold',
    price: 52,
    portion: '2 Royal Skewers',
    serves: '2 Guests',
    prepTime: 'Charcoal Binchotan Seared',
    temperatureTarget: '68°C Thermal Lock',
    description:
      'Finely ground A5 Kagoshima Wagyu striploin marbled with sweet roasted red onions, sumac, and infused with saffron butter on saffron barberry polo.',
    sommelierPairing: '2017 Penfolds Grange Shiraz',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvM42ZQyEtyXCJ53N7cLXSFQw0xk_GALjWBuUjuEfLSXaAO9ygSFDkCSnaEU0VWLr04et3vraVAEZrI5FKsCGPIsSidC0ZV5bEJ3daAQp5dQqp_GjeBwUNXaMdJC1kvDhPBnKMGWsYwgvcch3pkP_6cXp8ZXUBV5UDDSgwA9y_HO-DsAIx9Ob6LwZIKWb55XreWT5PZJzapXkkuohjxrtEDLdfhv-VCEmEeDFeqze5xr3e3ws5WO3A',
    artisanalNotes: ['A5 Kagoshima Wagyu'],
    heritageRecipe: 'Qajar Imperial Court Grillmaster Notebook',
    ingredients: [
      'Certified A5 Japanese Kagoshima Wagyu Beef',
      'Zereshk (Persian Wild Dried Barberries)',
      'Aged Saffron Basting Ghee',
      'Wild Purple Sumac Berries',
      'Charcoal-Grilled Saffron Tomatoes'
    ]
  },
  {
    id: 'beluga-caviar',
    name: 'Imperial Royal Beluga Caviar Service',
    subtitle: 'Huso Huso Sturgeon (50g)',
    category: 'seafood',
    tag: 'Royal Beluga',
    tagType: 'caviar',
    price: 195,
    portion: '50g Tin on Crushed Ice Cloche',
    serves: '2-4 Guests',
    prepTime: 'Direct Cold Cloche Presentation',
    temperatureTarget: '2°C Cryo-Lock Cloche',
    description:
      'Large grey pearls with buttery nutty notes. Served on bespoke mother-of-pearl spoons, buckwheat blinis, organic crème fraîche, and quail yolk mimosa.',
    sommelierPairing: '2008 Dom Pérignon Brut Champagne',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCie2OSLSdxIoMziz0P28G-koRYcWtbRgv85MrO0f5NdSQmqa2i1hqzrkQuSkMyzT5MAUBHovuxJZA4xJaQkQqh2-1EM3UNnqOfM7NLmPCQP_rNqxvX-cim243e-5VdpP7uJdtSIt752O8erDxa3bTlyGHyOAt0O2N6yg_004Te8p3ORpSPf_JmUinpt7XFHs_FCgqmr-DkaGVP73oq_TMVmP1oOwqLQvRhRMSoVkD5jdoUS_ept_qO',
    artisanalNotes: ['Royal Beluga Caviar', '24K Edible Gold'],
    heritageRecipe: 'Imperial Russian & St. James Diplomatic Protocol',
    ingredients: [
      '50g Certified Royal Beluga Caviar (Huso Huso)',
      'Handmade Buckwheat Blinis',
      'Isigny Sainte-Mère AOP Crème Fraîche',
      'Soft-Poached Quail Egg Yolk Crumb',
      'Bespoke Hand-carved Mother-of-Pearl Spoons'
    ]
  },
  {
    id: 'tournedos-rossini',
    name: 'Tournedos Rossini Grand Cru',
    subtitle: 'Classic French Haute Directorship',
    category: 'french',
    tag: 'Périgord Truffle',
    tagType: 'truffle',
    price: 64,
    portion: 'Single Prime Center Cut',
    serves: '1 Guest',
    prepTime: 'Butter Pan Basted',
    temperatureTarget: '66°C Thermal Lock',
    description:
      'Aberdeen Angus prime dry-aged fillet mignon topped with pan-seared Landes duck foie gras, Madeira sauce demi-glace, and sliced Périgord winter truffle.',
    sommelierPairing: '2010 Château Cheval Blanc Saint-Émilion',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmdCIjNCDYHH8vJXS6FmkEqoCWawvj1E98WPz3RL4wE4o5mx927KqwJltZSiwcHRMPmUarppEeazEbh7X9a8mmFmxcdbUpWR4D8fArLRN6pzQ_CIaEnrIuxXR-P06-dXGmbGxc3e0QmhZ4hZ9lw8HU1A70h7L7PbNhAL7XHC9MnApZwPXDyt6U3UsCsS9lKy2dzJXDE0Vfim1RImIdDRuYL4JNHkBkLLQRKRBMKrNuTANtTXh7oDtQ',
    artisanalNotes: ['Périgord Winter Truffle', 'Martell Cognac XO'],
    heritageRecipe: 'Gioachino Rossini Parisian Salon Creation, 1860',
    ingredients: [
      'Dry-Aged Scottish Fillet Mignon',
      'Pan-Seared Landes Duck Foie Gras',
      'Winter Périgord Black Truffle Coins',
      'Aged Madeira & Veal Glace',
      'Brioche Toast Medallion'
    ]
  },
  {
    id: 'krug-champagne',
    name: 'Krug Clos d’Ambonnay Champagne',
    subtitle: 'Rare Vintage 2002 Single Vineyard',
    category: 'cellar',
    tag: 'Rare Cellar Vintage',
    tagType: 'vintage',
    price: 380,
    portion: '750ml Hand-Cradled Bottle',
    serves: '4-6 Flutes',
    prepTime: 'Chilled Cellar Temperature 9°C',
    temperatureTarget: '9°C Cellar Lock',
    description:
      'Exclusively pressed from a minute 0.68-hectare walled pinot noir parcel. Immense tension, notes of toasted brioche, candied ginger, and dried orange peel.',
    sommelierPairing: 'Pair with Imperial Awadhi Dum Biryani or Beluga Caviar',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvM42ZQyEtyXCJ53N7cLXSFQw0xk_GALjWBuUjuEfLSXaAO9ygSFDkCSnaEU0VWLr04et3vraVAEZrI5FKsCGPIsSidC0ZV5bEJ3daAQp5dQqp_GjeBwUNXaMdJC1kvDhPBnKMGWsYwgvcch3pkP_6cXp8ZXUBV5UDDSgwA9y_HO-DsAIx9Ob6LwZIKWb55XreWT5PZJzapXkkuohjxrtEDLdfhv-VCEmEeDFeqze5xr3e3ws5WO3A',
    artisanalNotes: ['Martell Cognac XO'],
    heritageRecipe: 'Reims Private Cellar Allocation',
    ingredients: [
      '100% Pinot Noir Grand Cru Ambonnay',
      'Aged over 15 years on lees in chalk cellars',
      'Delivered in velvet-lined mahogany presentation chest'
    ]
  }
];

export const INITIAL_CART_ITEMS = [
  {
    dish: DISHES[0], // Awadhi Dum Biryani £48
    quantity: 1,
    addGoldLeaf: true,
    addTruffleShavings: false,
    specialInstructions: 'Warm to exactly 68°C upon arrival in Mayfair dining room.'
  },
  {
    dish: DISHES[1], // Smoked Saffron Galouti £36
    quantity: 1,
    addGoldLeaf: false,
    addTruffleShavings: true,
    specialInstructions: 'White-glove unsealing requested.'
  },
  {
    dish: DISHES[2], // Lobster Thermidor Imperial £58
    quantity: 1,
    addGoldLeaf: false,
    addTruffleShavings: false,
    specialInstructions: 'Garnish with fresh chervil before table presentation.'
  }
];
// Total: 48 + 36 + 58 = 142.00, exactly matching the screenshot!
