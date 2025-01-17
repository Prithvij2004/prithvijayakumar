import { HeroContent } from "./hero-content"
import { NameDisplay } from "./name-display"

export function VerticalLineContent() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-px h-full bg-black"></div>
      <div className="ml-12">
        <HeroContent />
        <NameDisplay />
      </div>
    </div>
  )
}

