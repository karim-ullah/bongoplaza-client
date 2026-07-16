"use client";
import { Button, ListBox, SearchField, Select } from "@heroui/react";
import { useRouter,  } from "next/navigation";
import React, { useState } from "react";

const SearchFilterPanel = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("")

  const router = useRouter()


  const handleFilter = ()=>{
    const params = new URLSearchParams()
    if(search){
        params.set('search', search)
    }
    if(category){
        params.set('category', category)
    }

    if(sortBy){
        params.set('sortBy', sortBy)
    }

    router.push(`/shop?${params.toString()}`)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <SearchField className={"flex-1"} name="search" aria-label="search" >
        <SearchField.Group className={"bg-accent/10"}>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search..." value={search} onChange={e=> setSearch(e.target.value)}/>
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Select className="max-w-[256px]" placeholder="Filter by" aria-label="category" value={category} onChange={(value)=>setCategory(value as any)}>
        <Select.Trigger className={'bg-accent/10'}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="" textValue="">
              Search by category..
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="Watch" textValue="Watch">
              Watch
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="Laptop" textValue="Laptop">
              Laptop
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="Headphones" textValue="Headphones">
              Headphones
              <ListBox.ItemIndicator />
            </ListBox.Item>
            
          </ListBox>
        </Select.Popover>
      </Select>


      <Select className="max-w-[256px]" placeholder="Sort by" aria-label="sortBy" value={sortBy} onChange={(value)=>setSortBy(value as any)}>
        <Select.Trigger className={'bg-accent/10'}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="" textValue="">
              Sort by
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="priceAsc" textValue="priceAsc">
              price: Low → High
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="priceDesc" textValue="priceDesc">
              Price: High → Low
              <ListBox.ItemIndicator />
            </ListBox.Item>

            
            
          </ListBox>
        </Select.Popover>
      </Select>

      <Button onClick={handleFilter}>Apply filter</Button>
    </div>
  );
};

export default SearchFilterPanel;
