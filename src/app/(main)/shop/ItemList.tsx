"use client";
import React, { useState, useEffect } from "react";
import { Item } from "typings";
import ItemCard from "./ItemCard";

const ItemList = ({ marketSelected }: { marketSelected: string }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (marketSelected === "Champions") {
      fetch("/data/championsStore.json")
        .then((response) => response.json())
        .then((data) => setItems(data));
    } else if (marketSelected === "Tobias") {
      fetch("/data/tobiasStore.json")
        .then((response) => response.json())
        .then((data) => setItems(data));
    }
  }, [marketSelected]);

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll  max-h-[45rem] px-4  py-1 rounded-lg">
      {items.map((item, index) => (
        <ItemCard {...item} key={index} />
      ))}
    </div>
  );
};

export default ItemList;
