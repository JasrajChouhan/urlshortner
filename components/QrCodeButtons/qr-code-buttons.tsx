import { FaCopy, FaDownload, FaShare } from "react-icons/fa";

import { QrCodeButtonsProps } from "@/types";
import { handleCopy } from '@/utils/handleCopy';
import { handleShare } from "@/utils/handleShare";
import { handleDownload } from "@/utils/hanldeDownload";

const btnStyle =
  "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";


export const QrCodeButtons = ({ qrCodeData }: QrCodeButtonsProps) => {
  return (
    <div className="qrcode-menu-icon flex justify-center gap-3 items-center">
      <button className={btnStyle} onClick={() => handleDownload({ qrCodeData })}>
        <FaDownload />
      </button>
      <button className={btnStyle} onClick={() => handleCopy({ qrCodeData })}>
        <FaCopy />
      </button>
      <button className={btnStyle} onClick={() => handleShare({ qrCodeData })}>
        <FaShare />
      </button>
    </div>
  );
};
