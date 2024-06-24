export type PageProps = {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
};

export type LayoutProps = {
  params?: Record<string, string>;
  children: React.ReactNode;
};
