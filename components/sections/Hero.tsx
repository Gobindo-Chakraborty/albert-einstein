import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/albert-einstein.jpg"
        alt="Einstein profile"
        width={1272}
        height={1640}
      />
    </section>
  );
}
