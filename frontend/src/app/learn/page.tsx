import PageContent from '@/components/layout/PageContent';
import SubNavbar from '@/components/layout/SubNavbar';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <>
      <SubNavbar items={[]} />
      <PageContent>
        <Box>Learn page</Box>
      </PageContent>
    </>
  );
}
