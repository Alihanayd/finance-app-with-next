import PageHeader from "@/components/page-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader className="my-8" />
      <main className="space-y-8">{children}</main>
      <footer>Footer</footer>
    </>
  );
}
