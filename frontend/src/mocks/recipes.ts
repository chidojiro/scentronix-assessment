import { Recipe } from '@/types/recipes';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    label: 'Whole Grain Banana Bread',
    groups: [{ label: 'Recipe' }, { label: 'Bread' }, { label: 'Quick Bread' }],
    prepTime: [10],
    bakingTime: [60, 75],
    totalTime: [70],
    description: `This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.`,
    yield: `one 9" x 5" loaf`,
    image:
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-09/whole-grain-banana-bread-3_0822.jpg?itok=-nAdBJa7',
  },
  {
    id: '2',
    label: 'No-Knead Crusty White Bread',
    groups: [{ label: 'Recipe' }, { label: 'Bread' }, { label: 'Crusty Bread' }],
    prepTime: [5],
    bakingTime: [30, 40],
    totalTime: [35],
    description: `The most basic of all no-knead loaves, this is a wonderful way to get into yeast-bread baking. The easy stir-together dough rests in your refrigerator, developing flavor all the time, till you're ready to bake. About 90 minutes before you want to serve bread, grab a handful of dough, shape it, let it rise, then bake for 30 minutes. The result? Incredible, crusty artisan-style bread, worthy of its 2016 Recipe of the Year title.`,
    yield: `3 or 4 loaves, depending on size`,
    image:
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-09/no-knead-crusty-white-bread_0822.jpg?itok=iySQvA5L',
  },
];
