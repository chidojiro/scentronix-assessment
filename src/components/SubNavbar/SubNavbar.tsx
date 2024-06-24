import Box from '@mui/material/Box';

export type SubNavbarProps = {
  children?: React.ReactNode;
};

export default function SubNavbar({ children }: SubNavbarProps) {
  return (
    <Box
      paddingX={13}
      paddingY={2}
      sx={{
        backgroundColor: 'secondary.light',
      }}
    >
      <Box display='flex' paddingLeft={15} gap={4}>
        {children}
      </Box>
    </Box>
  );
}
