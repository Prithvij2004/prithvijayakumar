import Footer from "./_components/footer";
import Header from "./_components/header";
import { ProjectsSection } from "./_components/project-section";
import { VerticalLineContent } from "./_components/vertical-line-content";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen lg:px-56">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 mt-20">
        <VerticalLineContent />
      </main>
      <Footer />
    </ div>
  );
}