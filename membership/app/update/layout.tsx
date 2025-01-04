export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex px-10">
        <main>{children}</main>
      </div>
    </>
  );
}
