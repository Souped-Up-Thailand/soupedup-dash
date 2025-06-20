import { useCallback, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import clsx from "clsx";

export default function Time() {

    const isMobile = useMediaQuery("(max-width: 768px)");

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = useCallback(() => {
        setDate(new Date());
    }, []);

    const optionsTime: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Bangkok",
        timeZoneName: "shortOffset",
        second: "2-digit",
    };

    const optionsDate: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }
    const timeString = useMemo(() => date.toLocaleTimeString("en-GB", optionsTime), [date]);
    const dateString = useMemo(() => date.toLocaleDateString("en-GB", optionsDate), [date]);

    return (
        <div className={clsx("flex flex-col md:flex-row items-end gap-x-2")}>
            <span className="uppercase text-lg">{dateString}</span>
            <span className="whitespace-nowrap text-lg">{timeString}</span>
        </div>
    )
}