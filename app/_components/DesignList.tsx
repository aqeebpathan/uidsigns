"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DesignCard from "./DesignCard";

interface Design {
  _id: string;
  uiID: string;
  title: string;
  imageUrl: string;
  designerName: string;
  designerUrl: string;
  featured: boolean;
  category: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  sourceUrl: string;
}

interface DesignListProps {
  initialDesigns: Design[];
}

const DesignList = ({ initialDesigns }: DesignListProps) => {
  const [designs, setDesigns] = useState(initialDesigns);
  const [hasMore, setHasMore] = useState<boolean>(true);

  console.log(designs);

  const fetchMoreDesigns = async () => {
    try {
      const response = await fetch(`/api/designs?limit=20`);
      const { designs: newDesigns } = await response.json();

      // Deduplicate designs on the client side
      const uniqueNewDesigns = newDesigns.filter(
        (newDesign: Design) =>
          !designs.some(
            (existingDesign) => existingDesign._id === newDesign._id
          )
      );

      if (uniqueNewDesigns.length === 0) {
        setHasMore(false);
      } else {
        setDesigns((prevDesigns) => [...prevDesigns, ...uniqueNewDesigns]);
      }
    } catch (error) {
      console.error("Error fetching more designs:", error);
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={designs.length}
      next={fetchMoreDesigns}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more designs to show.</p>}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
    >
      {designs.map((design) => (
        <DesignCard
          key={design._id}
          title={design.title}
          imageUrl={design.imageUrl}
          designerName={design.designerName}
          designerUrl={design.designerUrl}
          sourceUrl={design.sourceUrl}
        />
      ))}
    </InfiniteScroll>
  );
};

export default DesignList;
