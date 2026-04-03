import DiscografiaPageClient from "@/components/DiscografiaPageClient";
import discografia from "@/data/discografia.json";

export const metadata = {
  title: "Discografia — Manuel Krapovickas",
};

export default function DiscografiaPage() {
  return <DiscografiaPageClient discs={discografia} />;
}
