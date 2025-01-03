import SideNav from "../../components/SideNav"
export default function UpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <SideNav/>
    <div className="min-h-screen flex flex-col bg-gray-50"> 
      <main className="flex-grow">{children}</main>
    </div>
    </>
  );
}
