import { QrCodeButtonsProps } from "@/types";
export const handleDownload = ({ qrCodeData }: QrCodeButtonsProps) => {
  if (!qrCodeData) return;
  const a = document.createElement("a");
  a.href = qrCodeData;
  a.download = "qrcode.png";
  a.click();
};