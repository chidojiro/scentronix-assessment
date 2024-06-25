import { getRecipe } from '@/fetches/recipe';
import { PageProps } from '@/types/common';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import RecipeMetadata from '@/components/recipe/RecipeMetadata';

export default async function Page({ params }: PageProps) {
  const recipe = await getRecipe(params.recipeId);

  if (!recipe) return notFound();

  const renderTime = (times: number[]) => {
    const fromTime = times[0];
    const fromTimeHours = Math.floor(fromTime / 60);
    const fromTimeMinutes = fromTime % 60;

    const fromTimeHourLabel = `${
      fromTimeHours ? `${fromTimeHours} hr${fromTimeHours > 1 ? 's' : ''}` : ''
    }`;
    const fromTimeMinuteLabel = `${
      fromTimeMinutes ? `${fromTimeMinutes} min${fromTimeMinutes > 1 ? 's' : ''}` : ''
    }`;
    const fromTimeLabel = [fromTimeHourLabel, fromTimeMinuteLabel].filter(Boolean).join(' ');

    if (times.length === 1) {
      return fromTimeLabel;
    }

    const toTime = times[1];
    const toTimeHours = Math.floor(toTime / 60);
    const toTimeMinutes = toTime % 60;

    const toTimeHourLabel = `${
      toTimeHours ? `${toTimeHours} hr${toTimeHours > 1 ? 's' : ''}` : ''
    }`;
    const toTimeMinuteLabel = `${
      toTimeMinutes ? `${toTimeMinutes} min${toTimeMinutes > 1 ? 's' : ''}` : ''
    }`;
    const toTimeLabel = [toTimeHourLabel, toTimeMinuteLabel].filter(Boolean).join(' ');

    return `${fromTimeLabel} to ${toTimeLabel}`;
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
          {recipe.groups.map((group) => (
            <Typography key={group.label}>{group.label}</Typography>
          ))}
        </Breadcrumbs>

        <Typography variant='h2' sx={{ marginTop: 3, fontWeight: 'medium' }}>
          {recipe.label}
        </Typography>

        <Typography sx={{ marginTop: 5 }}>{recipe.description}</Typography>

        <Box display='flex' gap={5} marginTop={2}>
          <RecipeMetadata icon={AccessTimeIcon} label='Prep' value={renderTime(recipe.prepTime)} />
          <RecipeMetadata label='Bake' value={renderTime(recipe.bakingTime)} />
          <RecipeMetadata label='Total' value={renderTime(recipe.totalTime)} />
        </Box>

        <Divider sx={{ marginTop: 4, marginBottom: 2 }} />

        <Box display='flex' gap={4}>
          <RecipeMetadata icon={CheckCircleOutlineIcon} label='Yield' value={recipe.yield} />
          <Box display='flex' gap={1}>
            <Button variant='outlined' color='primary' startIcon={<AddIcon />}>
              Save Recipe
            </Button>
            <Button variant='outlined' color='primary' startIcon={<PrintIcon />}>
              Print
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box position='relative' width='100%' height='100%'>
          <Image
            src={recipe.image}
            alt={recipe.label}
            fill
            objectFit='contain'
            objectPosition='left'
          />
        </Box>
      </Grid>
    </Grid>
  );
}
