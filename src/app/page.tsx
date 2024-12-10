import NondashboardNavbar from "@/components/NondashboardNavbar";
import Landing from "./(nondashboard)/landing/page";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NondashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
    </div>
  );
}
