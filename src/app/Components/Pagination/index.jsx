'use client'
import React from "react";
import {Pagination, PaginationItemType} from "@nextui-org/react";
import {ChevronIcon} from "./ChevronIcon";
import { cn } from "@nextui-org/react";

export default function Pagi() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
        if (currentPage === 10) {
            return null; // Hide PREV on the first page
        }
        return (
        <button key={key} className={cn(className, "bg-primaria min-w-8 w-8 h-8")} onClick={onNext}>
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      if (currentPage === 1) {
        return null; // Hide PREV on the first page
      }
      return (
        <button key={key} className={cn(className, "bg-primaria min-w-8 w-8 h-8")} onClick={onPrevious}>
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive &&
          "text-white bg-primaria from-indigo-500 to-pink-500 font-bold",
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={10}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
      onChange={(e) => {console.log(e)}}
    />
  );
}