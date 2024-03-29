import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
}

export const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10 mt-20">
        {children}
      </div>
      <Footer />
    </div>
  )
}