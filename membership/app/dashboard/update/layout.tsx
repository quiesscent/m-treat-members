export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <main style={{ marginLeft: "200px", padding: "20px" }}>{children}</main>
      </div>
    </>
  );
}
