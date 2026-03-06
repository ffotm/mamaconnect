import Image from "next/image";
import { StaticImageData } from "next/image";

interface PanelProps {
  src: StaticImageData;
}

export default function Panel({ src }: PanelProps) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: "calc(100% - 48px)", height: "calc(100% - 48px)" }}>
        <Image
          src={src}
          alt="Auth panel"
          fill
          sizes="50vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
