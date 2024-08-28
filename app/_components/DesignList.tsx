"use client";

import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Design } from "../../types/design";
import DesignCard from "./DesignCard";

interface DesignListProps {
  initialDesigns: Design[];
  searchQuery: string;
}

const DesignList = ({ initialDesigns, searchQuery }: DesignListProps) => {
  const [designs, setDesigns] = useState(initialDesigns);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch designs based on query
  const fetchDesigns = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/designs?limit=20${
          query ? `&search=${encodeURIComponent(query)}` : ""
        }`
      );
      const { designs: fetchedDesigns } = await response.json();
      return fetchedDesigns;
    } catch (error) {
      console.error("Error fetching designs:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch initial designs or search results
  useEffect(() => {
    if (searchQuery === "") {
      setDesigns(initialDesigns);
      setHasMore(true);
    } else {
      fetchDesigns(searchQuery).then((results) => {
        setDesigns(results);
        setHasMore(results.length > 0);
      });
    }
  }, [searchQuery, initialDesigns, fetchDesigns]);

  // Fetch more designs for infinite scroll
  const fetchMoreDesigns = async () => {
    if (loading) return; // Prevent multiple requests

    try {
      const newDesigns = await fetchDesigns(searchQuery);

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
      loader={<h4 className="text-center">Loading...</h4>}
      endMessage={<p className="text-center">No more designs.</p>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {designs.map((design) => (
          <DesignCard key={design._id} design={design} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default DesignList;
