import { SvgIconTypeMap } from '@mui/material';
import Box from '@mui/material/Box';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';

export type RecipeMetadataProps = {
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  label: string;
  value: string;
};

export default function RecipeMetadata({ icon: Icon, label, value }: RecipeMetadataProps) {
  return (
    <Box display='flex' gap={1}>
      {Icon && <Icon fontSize='large' />}
      <Box display='flex' flexDirection='column' gap={0.5}>
        <Typography fontWeight='medium' variant='caption' textTransform='uppercase'>
          {label}
        </Typography>
        <Typography fontWeight='medium'>{value}</Typography>
      </Box>
    </Box>
  );
}
