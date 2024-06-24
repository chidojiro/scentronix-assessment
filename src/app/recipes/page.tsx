import { ROUTES } from '@/constants/route';
import { getRecipeList } from '@/fetches/recipe';
import { getHref } from '@/utils/route';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default async function Page() {
  const recipes = await getRecipeList();

  if (!recipes?.length) return <>No results</>;

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={getHref(ROUTES.RECIPE_DETAILS, { recipeId: recipe.id })}>
          <Typography sx={{ color: 'primary.main', textDecoration: 'underline' }}>
            {recipe.label}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}
