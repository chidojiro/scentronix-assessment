import PageContent from '@/components/layout/PageContent';
import Typography from '@mui/material/Typography';

export default function NotFound() {
  return (
    <PageContent>
      <Typography variant='h1' fontWeight='medium'>
        Not Found
      </Typography>
      <Typography>Sorry, the page you are looking for does not exist.</Typography>
    </PageContent>
  );
}
