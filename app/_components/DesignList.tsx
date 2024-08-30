"use client";

import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Design } from "../../types/design";
import DesignCard from "./DesignCard";
import Loader from "./Loader";

interface DesignListProps {
  initialDesigns: Design[];
  searchQuery: string;
}

const DesignList = ({ initialDesigns, searchQuery }: DesignListProps) => {
  const [designs, setDesigns] = useState<Design[]>([]);
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
      // If there's no search query, set designs to initial designs
      setDesigns(initialDesigns);
      setHasMore(true);
    } else {
      fetchDesigns(searchQuery).then((results) => {
        setDesigns(results);
        setHasMore(results.length > 0);
        setHasMore(results.length > 20);
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

  if (designs.length === 0 && !loading) {
    return (
      <p className="text-[#ADADAD] text-center mt-7">
        No result found for{" "}
        <span className="text-white text-lg font-medium"> {searchQuery}</span>
      </p>
    );
  }

  const endMessage = !loading ? (
    <p className="text-center">No more designs.</p>
  ) : null;

  return (
    <InfiniteScroll
      dataLength={designs.length}
      next={fetchMoreDesigns}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={endMessage}
    >
      {searchQuery && (
        <h1 className="text-[#ADADAD] text-center mt-3">
          Showing results for{" "}
          <span className="text-white text-lg font-medium"> {searchQuery}</span>
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {designs.map((design) => (
          <DesignCard key={design._id} design={design} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default DesignList;
