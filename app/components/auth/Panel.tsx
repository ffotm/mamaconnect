import Image from "next/image";
import { StaticImageData } from "next/image";

interface PanelProps {
  src: StaticImageData;
}

export default function Panel({ src }: PanelProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full" style={{ maxWidth: "480px", maxHeight: "480px" }}>
        <Image
          src={src}
          alt="Auth panel"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
