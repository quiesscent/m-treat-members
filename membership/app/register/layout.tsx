export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen items-center flex flex-col px-8">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
