import Image from "next/image";
import { useEffect, useState } from "react";

import { qrCodeGenerator } from "@/utils/qr-code-genertor";
import { QrCodeButtons } from "../QrCodeButtons/qr-code-buttons";
export const QrCode = ({ link }: { link: string }) => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateQrCode = async () => {
      try {
        setError(null);
        const qrCodeUrl = await qrCodeGenerator(link);
        setData(qrCodeUrl);
      } catch (err) {
        setError("Failed to generate QR code.");
        console.error(err);
      }
    };

    if (link) {
      generateQrCode();
    }
  }, [link]);

  return (
    <div>
      {data && <QrCodeButtons qrCodeData={data} />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? (
        <Image src={data} alt="QR Code" width={200} height={200} />
      ) : (
        <p>Generating QR code...</p>
      )}
    </div>
  );
};
