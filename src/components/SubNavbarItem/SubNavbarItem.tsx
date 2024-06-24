import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export type SubNavbarItemProps = {
  children?: React.ReactNode;
};

export default function SubNavbarItem({ children }: SubNavbarItemProps) {
  return (
    <Typography variant='caption' textTransform='uppercase'>
      {children}
    </Typography>
  );
}
