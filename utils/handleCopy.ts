import { QrCodeButtonsProps } from "@/types";

export const handleCopy = async ({ qrCodeData }: QrCodeButtonsProps) => {
  if (!qrCodeData) return;

  try {
    const base64 = qrCodeData.split(",")[1];
    const blob = new Blob([Uint8Array.from(atob(base64), c => c.charCodeAt(0))], {
      type: "image/png",
    });

    const clipboardItem = new ClipboardItem({ "image/png": blob });
    await navigator.clipboard.write([clipboardItem]);

    alert("QR Code image copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy QR code:", err);
    alert("Failed to copy QR code.");
  }
};


