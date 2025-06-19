"use client";

import { IconExternalLink } from "@tabler/icons-react";
import Button from "../_components/Button/Button";
import EventTitle from "./_components/EventTitle/EventTitle";
import Select from "../_components/Select/Select";
import TableRank from "./_components/TableRank/TableRank";
import ClassCar from "@/assets/mockData/classCar.json"
import Ranking from "@/assets/mockData/driverRanking.json"
import Stages from "@/assets/mockData/stages.json"
import { useState } from "react";

export default function Page() {
    const [selectedClass, setSelectedClass] = useState<string>("All Classes");
    const [selectedStage, setSelectedStage] = useState<string>("All Stages");

    const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "") {
            setSelectedClass("All Classes");
            setSelectedStage("All Stages");
            return;
        }
        setSelectedClass(e.target.value);
    };

    const handleStageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "") {
            setSelectedStage("All Stages");
            return;
        }
        setSelectedStage(e.target.value);
    };

    return (
        <div className="px-4 py-5 flex flex-col gap-4">
            <EventTitle />
            <div className="h-0.5 bg-zinc-700"></div>
            <div className="flex gap-3">
                <Select
                    options={ClassCar.map((car) => ({ value: car, label: car }))}
                    placeholder="All Classes"
                    onChange={handleClassChange}
                />
                <Select
                    options={Stages.map((stage) => ({ value: stage, label: stage }))}
                    placeholder="All Stages"
                    onChange={handleStageChange}
                    defaultValue=""
                    disabled={!selectedClass || selectedClass === "All Classes"}
                />
                <Button>
                    <IconExternalLink />
                </Button>
            </div>
            <div className="text-lg">{selectedClass} - {selectedStage}</div>
            <TableRank data={Ranking.map((item, index) => ({
                ...item,
                pos: index + 1, // Add position based on index
                elapsed_time: Math.random() * 10 + 5, // Random time between 5 and 15 seconds
                speed: Math.random() * 100 + 200, // Random speed between 200 and 300 km/h
                reaction_time: Math.random() * 0.5 + 0.1 // Random reaction time between 0.1 and 0.6 seconds
            }))} />
        </div>
    )
}