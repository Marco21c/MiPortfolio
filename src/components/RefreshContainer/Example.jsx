import { motion } from "framer-motion";

export default function Example({img}) {

  return (
    <motion.img
      src={img}
      alt={"logo"}
      drag
      dragConstraints={{ top: -100, right: 70, bottom: 0, left: -100 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 30,
        cursor: "grab",
        padding: 10,
      }}
    />
  );
}