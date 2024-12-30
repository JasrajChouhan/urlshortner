import { QrCodeButtonsProps } from "@/types";

export const handleShare = async ({ qrCodeData }: QrCodeButtonsProps) => {
  if (!qrCodeData) return;

  try {
    const base64 = qrCodeData.split(",")[1];
    const blob = new Blob([Uint8Array.from(atob(base64), c => c.charCodeAt(0))], {
      type: "image/png",
    });

    const file = new File([blob], "qrcode.png", { type: "image/png" });

    if (navigator.share) {
      await navigator.share({
        files: [file],
        title: "QR Code",
      });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  } catch (err) {
    console.error("Failed to share QR code:", err);
    alert("Failed to share QR code.");
  }
};