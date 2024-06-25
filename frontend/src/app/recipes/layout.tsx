import PageContent from '@/components/layout/PageContent';
import SubNavbar from '@/components/layout/SubNavbar';
import SubNavbarItem from '@/components/layout/SubNavbarItem';
import { LayoutProps } from '@/types/common';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SubNavbar>
        <SubNavbarItem>Categories</SubNavbarItem>
        <SubNavbarItem>Collections</SubNavbarItem>
        <SubNavbarItem>Resources</SubNavbarItem>
      </SubNavbar>
      <PageContent>{children}</PageContent>
    </>
  );
}
