import QRCode from 'qrcode';

export const qrCodeGenerator = async (link: string): Promise<string> => {
  try {
    if (!link) {
      throw new Error("Invalid URL");
    }

    const url = await QRCode.toDataURL(link);
    return url;
  } catch (error) {
    console.error("Error generating QR Code:", error);
    throw error;
  }
};
