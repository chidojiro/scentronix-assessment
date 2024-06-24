'use client';

import { usePathname } from 'next/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ROUTES } from '@/constants/route';
import Link from 'next/link';
import Image from 'next/image';

export type NavbarProps = {
  //
};

const NAVIGATION_ITEMS = [
  {
    label: 'SHOP',
    href: ROUTES.SHOP,
  },
  {
    label: 'RECIPES',
    href: ROUTES.RECIPE_LIST,
  },
  {
    label: 'LEARN',
    href: ROUTES.LEARN,
  },
  {
    label: 'ABOUT',
    href: ROUTES.ABOUT,
  },
  {
    label: 'BLOG',
    href: ROUTES.BLOG,
  },
];

export default function Navbar({}: NavbarProps) {
  const pathname = usePathname();

  return (
    <Box paddingX={10} paddingY={2}>
      <Box position='relative'>
        <Box position='absolute'>
          <Image src='/logo.svg' alt='logo' width={100} height={100} />
        </Box>
        <Box paddingLeft={15}>
          <Tabs value={pathname.split('/')[1]}>
            {NAVIGATION_ITEMS.map(({ href, label }) => (
              <Tab
                key={href}
                value={href.split('/')[1]}
                href={href}
                label={label}
                LinkComponent={Link}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
