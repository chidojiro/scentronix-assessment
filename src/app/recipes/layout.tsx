import SubNavbar from '@/components/SubNavbar';
import { ROUTES } from '@/constants/route';

export default function Layout() {
  return (
    <>
      <SubNavbar
        items={[
          { label: 'CATEGORIES', href: ROUTES.RECIPES_CATEGORIES },
          { label: 'COLLECTIONS', href: ROUTES.RECIPES_COLLECTIONS },
          { label: 'RESOURCES', href: ROUTES.RECIPES_RESOURCES },
        ]}
      />
    </>
  );
}
