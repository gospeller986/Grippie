"use client";

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";

const filters = ["Today", "Tomorrow", "This Weekend", "Concerts", "Comedy", "Workshops"];

export default function EventsFilterBar() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(["Today", "Tomorrow", "This Weekend", "Concerts", "Comedy", "Workshops"]);

    const toggleFilter = (filter: string) => {
        setSelectedFilters((prev) =>
            prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
        );
    };

    const removeFilter = (filter: string) => {
        setSelectedFilters((prev) => prev.filter((f) => f !== filter));
    };

    return (
        <div className="w-full">
            {/* Mobile: Scrollable pills */}
            <div className="flex w-full space-x-3 overflow-x-auto px-2 md:hidden ">
                <button className="flex items-center space-x-2 bg-[#8A54F0] text-white  rounded-[15px] px-4 py-2 font-medium w-full">
                    <span style={{ fontFamily: "ProximaNovaL" }}>Filters</span>
                </button>
                {filters.map((label, i) => (
                    <Button
                        key={i}
                        variant="outline"
                        className="border-[#A362FF] text-white font-[600] whitespace-nowrap rounded-[15px] px-4 py-2"
                        style={{ fontFamily: "ProximaNovaT" }}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            {/* Desktop: Dropdown + selected filter pills */}
            <div className="hidden md:block mt-4 space-y-4">
                {/* Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-[#8A54F0] text-white rounded-[15px] px-4 py-2">
                            Filters <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mt-2 bg-white border-[#8A54F0]">
                        {filters.map((filter, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => toggleFilter(filter)}
                                className="cursor-pointer "
                                style={{ fontFamily: "ProximaNovaA" }}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <span>{filter}</span>
                                    {selectedFilters.includes(filter) && <span className="text-sm text-purple-600">✓</span>}
                                </div>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Selected Pills */}
                {selectedFilters.length > 0 && (
                    <div className="overflow-x-auto mt-2">
                        <div className="flex space-x-2 w-max">
                            {selectedFilters.map((filter, i) => (
                                <div
                                    key={i}
                                    className="flex items-center bg-[#A362FF] text-white px-3 py-1 rounded-full text-sm whitespace-nowrap"
                                    style={{ fontFamily: "ProximaNovaT" }}
                                >
                                    {filter}
                                    <button
                                        onClick={() => removeFilter(filter)}
                                        className="ml-2 text-white hover:text-gray-200"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
