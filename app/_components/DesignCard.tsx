import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Design } from "../../types/design";
interface DesignCardProps {
  design: Design;
}

const DesignCard: React.FC<DesignCardProps> = ({ design }) => {
  const { title, imageUrl, designerName, sourceUrl, designerUrl } = design;

  return (
    <div className="group relative">
      <Link href={sourceUrl} target="_blank">
        <div className="shadow-md rounded-md h-[300px] overflow-hidden border border-[#3d3d3d] hover:border-[#888888] cursor-pointer transition">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="w-full object-contain"
          />
        </div>
      </Link>
      <p className="my-3 text-[#ADADAD] text-[17px]">
        Designed by{" "}
        <span className="text-white">
          <Link href={designerUrl} target="_blank">
            {designerName}
          </Link>
        </span>
      </p>

      <Link
        href={sourceUrl}
        target="_blank"
        className="bg-neutral-100 text-black/90 absolute top-3 right-3 p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-neutral-900 hover:text-neutral-100 transition"
      >
        <HiOutlineExternalLink />
      </Link>
    </div>
  );
};

export default DesignCard;
