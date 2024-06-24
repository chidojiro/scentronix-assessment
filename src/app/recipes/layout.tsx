import PageContent from '@/components/PageContent';
import SubNavbar from '@/components/SubNavbar';
import SubNavbarItem from '@/components/SubNavbarItem';
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
