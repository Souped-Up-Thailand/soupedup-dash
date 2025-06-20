"use client";

import { useState } from 'react';

import Button from '@/app/_components/Button/Button';
import Select from '@/app/_components/Select/Select';
import ClassCar from '@/assets/mockData/classCar.json';
import Ranking from '@/assets/mockData/driverRanking.json';
import Stages from '@/assets/mockData/stages.json';
import { IconExternalLink } from '@tabler/icons-react';

import EventTitle from '../_components/EventTitle/EventTitle';
import LiveStatus from '../_components/LiveStatus/LiveStatus';
import TableRank from '../_components/TableRank/TableRank';
import Time from '../_components/Time/Time';

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
        <div className="px-4 py-5 flex flex-col gap-4 max-w-7xl mx-auto w-full select-none">
            <div className="flex justify-between items-start">
                <EventTitle subtitle='asdf' />
                <div className="flex flex-col items-end ">
                    <LiveStatus />
                    <Time />
                </div>
            </div>
            <div className="h-0.5 bg-zinc-700"></div>
            <TableRank data={Ranking.map((item, index) => ({
                ...item,
                pos: index + 1, // Add position based on index
                speed: Math.random() * 100 + 200, // Random speed between 200 and 300 km/h
                reaction_time: Math.random() * 0.5 + 0.1 // Random reaction time between 0.1 and 0.6 seconds
            }))} />
        </div>
    )
}