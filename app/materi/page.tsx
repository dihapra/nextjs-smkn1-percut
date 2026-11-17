// 🔒 INTI — route "/materi"
import Deck from "./Deck";
import { slides } from "./slides";

export default function Materi() {
  return <Deck titles={slides.map((s) => s.title)} slides={slides.map((s, i) => <s.Body key={i} />)} />;
}
