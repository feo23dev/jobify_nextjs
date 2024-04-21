import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid lg:grid-cols-5">
      {/*first-col hide on small */}
      {/*second-col hide dropdown on big screen*/}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen ">
        <Sidebar></Sidebar>
      </div>
      <div className="lg:col-span-4">
        <Navbar></Navbar>
        <div className="py-16 px-4 sm:px-8"></div> {children}
      </div>
    </main>
  );
};

export default layout;
