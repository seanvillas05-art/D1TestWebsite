import Link from "next/link";
import Reveal from "../Components/Reveal";   // ✅ use relative path
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Reveal>
        <h1>Hello World</h1>
      </Reveal>
    </div>
  );
}
