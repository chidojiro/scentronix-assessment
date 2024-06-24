'use client';

import { usePathname } from 'next/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { Typography } from '@mui/material';

export type SubNavbarProps = {
  items: { label: string; href: string }[];
};

export default function SubNavbar({ items }: SubNavbarProps) {
  const pathname = usePathname();

  return (
    <Box
      paddingX={10}
      paddingY={2}
      sx={{
        backgroundColor: 'secondary.light',
      }}
    >
      <Box paddingLeft={15}>
        <Tabs value={pathname}>
          {items.map(({ href, label }) => (
            <Tab
              key={href}
              value={href}
              href={href}
              label={<Typography variant='caption'>{label}</Typography>}
              LinkComponent={Link}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
