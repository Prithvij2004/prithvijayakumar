import Header from "./_components/header";
import { ProjectsSection } from "./_components/project-section";
import { VerticalLineContent } from "./_components/vertical-line-content";

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 mt-20">
        <VerticalLineContent />
      </main>
    </>
  )
}