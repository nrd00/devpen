import FeatureCategory from "@/components/FeatureCategory";
import FeaturePost from "@/components/FeaturePost";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeaturePost />
        <FeatureCategory />
      </main>
    </>
  );
}
