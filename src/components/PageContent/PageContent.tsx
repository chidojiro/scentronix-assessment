import Box from '@mui/material/Box';

export type PageContentProps = {
  children?: React.ReactNode;
};

export default function PageContent({ children }: PageContentProps) {
  return <Box padding={10}>{children}</Box>;
}
