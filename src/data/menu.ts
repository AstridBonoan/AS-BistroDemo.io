export type MenuCategoryId = 'small' | 'mains' | 'dessert' | 'wine'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  dietary?: string
}

export const menuCategories: {
  id: MenuCategoryId
  label: string
  blurb: string
}[] = [
  {
    id: 'small',
    label: 'Small plates',
    blurb: 'Meant for the table — bright, smoky, and sharable.',
  },
  {
    id: 'mains',
    label: 'Mains',
    blurb: 'Seasonal centerpieces with a slow finish.',
  },
  {
    id: 'dessert',
    label: 'Dessert',
    blurb: 'Light endings with a little theater.',
  },
  {
    id: 'wine',
    label: 'Wine & aperitivo',
    blurb: 'Old-world bottles, new-world curiosity.',
  },
]

export const menuByCategory: Record<MenuCategoryId, MenuItem[]> = {
  small: [
    {
      id: 's1',
      name: 'Charred shishito & citrus salt',
      description: 'Blistered peppers, yuzu kosho, flaky salt.',
      price: '14',
    },
    {
      id: 's2',
      name: 'Tuna crudo',
      description: 'Calabrian chili oil, preserved lemon, crispy shallot.',
      price: '22',
      dietary: 'GF',
    },
    {
      id: 's3',
      name: 'Burrata & roasted grapes',
      description: 'Wildflower honey, toasted seed crumble, olive oil.',
      price: '19',
    },
    {
      id: 's4',
      name: 'Crispy artichokes',
      description: 'Herb aioli, pecorino, black pepper.',
      price: '16',
      dietary: 'V',
    },
  ],
  mains: [
    {
      id: 'm1',
      name: 'Duck breast',
      description: 'Cherry mostarda, roasted fennel, jus.',
      price: '42',
      dietary: 'GF',
    },
    {
      id: 'm2',
      name: 'Hand-cut pappardelle',
      description: 'Braised short rib, porcini, parmesan.',
      price: '34',
    },
    {
      id: 'm3',
      name: 'Seared halibut',
      description: 'Brown butter capers, spring peas, herbs.',
      price: '38',
      dietary: 'GF',
    },
    {
      id: 'm4',
      name: 'Grilled cauliflower steak',
      description: 'Romesco, pickled raisins, hazelnuts.',
      price: '28',
      dietary: 'VEG',
    },
  ],
  dessert: [
    {
      id: 'd1',
      name: 'Olive oil cake',
      description: 'Whipped mascarpone, macerated berries.',
      price: '14',
    },
    {
      id: 'd2',
      name: 'Dark chocolate crémeux',
      description: 'Sea salt, espresso crumb, créme fraîche.',
      price: '15',
    },
    {
      id: 'd3',
      name: 'Seasonal sorbet trio',
      description: "Chef's selection — ask your server.",
      price: '12',
      dietary: 'VEG',
    },
  ],
  wine: [
    {
      id: 'w1',
      name: 'Champagne, NV',
      description: 'Brioche, green apple, fine mousse.',
      price: '24 / 96',
    },
    {
      id: 'w2',
      name: 'Skin-contact vermentino',
      description: 'Apricot peel, saline, jasmine.',
      price: '16 / 62',
    },
    {
      id: 'w3',
      name: 'Pinot noir, Willamette',
      description: 'Cranberry, forest floor, silky tannin.',
      price: '18 / 72',
    },
    {
      id: 'w4',
      name: 'Amaro flight',
      description: 'Three pours — bitter, botanical, beautiful.',
      price: '22',
    },
  ],
}
