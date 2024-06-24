import PageContent from '@/components/PageContent';
import SubNavbar from '@/components/SubNavbar';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <>
      <SubNavbar items={[]} />
      <PageContent>
        <Box>Shop page</Box>
      </PageContent>
    </>
  );
}
