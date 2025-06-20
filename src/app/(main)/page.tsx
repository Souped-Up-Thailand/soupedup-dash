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
import Time from "./_components/Time/Time";
import LiveStatus from "./_components/LiveStatus/LiveStatus";

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
        <div className="px-4 py-5 flex flex-col gap-4 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-start">
                <EventTitle />
                <div className="flex flex-col items-end ">
                    <LiveStatus />
                    <Time />
                </div>
            </div>
            <div className="h-0.5 bg-zinc-700"></div>
            <div className="flex gap-2 overflow-x-auto scrollbar-style">

                <div className="h-[7rem] w-full rounded-2xl p-3 bg-gradient-to-br from-zinc-700 to-zinc-900 lg:flex flex-col scale-90 hidden text-zinc-500">
                    <div className="flex justify-between h-full">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div className="text-lg font-bold t">สยาม บุญช่วย</div>
                                <div className="text-sm">Siam Prototype</div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-2xl font-bold">558</div>
                                <span className="text-sm ">PRO DRAGSTER</span>
                            </div>
                        </div>
                        <div className="flex gap-2 h-fit items-center">
                            <div className="font-bold">Already raced</div>
                        </div>
                    </div>
                </div>
                <div className="h-[7rem] w-full rounded-2xl p-3 bg-gradient-to-br from-blue-500 to-zinc-900 flex flex-col">
                    <div className="flex justify-between h-full">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div className="text-lg font-bold t">สยาม บุญช่วย</div>
                                <div className="text-sm text-zinc-200">Siam Prototype</div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-2xl font-bold">558</div>
                                <span className="text-sm text-zinc-200">PRO DRAGSTER</span>
                            </div>
                        </div>
                        <div className="flex gap-2 h-fit items-center">
                            <span className="w-[10px] h-[10px] animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <div className="font-bold">On the track</div>
                        </div>
                    </div>
                </div>
                <div className="h-[7rem] w-full rounded-2xl p-3 bg-gradient-to-br from-zinc-500 to-zinc-900 lg:flex flex-col scale-90 hidden">
                    <div className="flex justify-between h-full">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div className="text-lg font-bold">สยาม บุญช่วย</div>
                                <div className="text-sm text-zinc-200">Siam Prototype</div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-2xl font-bold">558</div>
                                <span className="text-sm text-zinc-200">PRO DRAGSTER</span>
                            </div>
                        </div>
                        <div className="flex gap-2 h-fit items-center">
                            <span className="w-[10px] h-[10px] animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                            <div className="font-bold">Next up</div>
                        </div>
                    </div>
                </div>

            </div>
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
            {/* <div className="text-lg">{selectedClass} - {selectedStage}</div> */}
            <TableRank data={Ranking.map((item, index) => ({
                ...item,
                pos: index + 1, // Add position based on index
                speed: Math.random() * 100 + 200, // Random speed between 200 and 300 km/h
                reaction_time: Math.random() * 0.5 + 0.1 // Random reaction time between 0.1 and 0.6 seconds
            }))} />
        </div>
    )
}