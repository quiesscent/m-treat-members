export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen items-center flex flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
