interface TableRankData {
    pos: number;
    driver: string;
    team?: string;
    class?: string;
    elapsed_time: number;
    speed: number;
    reaction_time: number;
    status?: string | React.ReactNode;
}

interface Props {
    data?: TableRankData[];

}

export default function TableRank(props: Props) {

    const calculateSecondDifference = (currentIndex: number): string => {
        // compare with the first item in the array
        if (currentIndex > 0 && props.data && props.data.length > 0) {
            const currentTime = props.data[currentIndex]?.elapsed_time;
            const firstTime = props.data[0]?.elapsed_time;
            if (currentTime !== undefined && firstTime !== undefined) {
                const diff = currentTime - firstTime;
                return `${diff >= 0 ? "+" : ""}${diff.toFixed(3)}`;
            }
        }
        return "+0.000";
    };

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-left">
                <thead className="text-xs uppercase ">
                    <tr>
                        <th scope="col" className="pl-1 py-3 text-zinc-400">
                            POS.
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            Driver
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400" align="right">
                            E.T.
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            Speed
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            R.T.
                        </th>
                        {/* <th scope="col" className="px-6 py-3 text-zinc-400">
                            Status
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {props.data?.map((result, index) => (
                        <tr className="border-b dark:border-gray-700 border-gray-200" key={index}>
                            <th scope="row" className="pl-1 py-2 text-lg text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                {index + 1}
                            </th>
                            <td className="px-6 py-2 whitespace-nowrap max-w-[15rem] md:w-fit truncate">
                                <div className="flex flex-col">
                                    <div className="text-lg font-bold">{result.driver}</div>
                                    <div className="text-sm text-zinc-400">{result.team}</div>
                                </div>
                            </td>
                            <td className="px-6 py-2 font-bold md:text-lg">
                                <div className="flex flex-col items-end justify-items-start">
                                    <div>{result.elapsed_time.toFixed(3)}<span className="text-zinc-400">s</span></div>
                                    <div className="text-green-400 text-xs">{calculateSecondDifference(index)}</div>
                                </div>
                            </td>
                            <td className="px-6 py-2 font-bold md:text-lg whitespace-nowrap" >
                                {result.speed.toFixed(2)} <span className="text-zinc-400">km/h</span>
                            </td>
                            <td className="px-6 py-2 font-bold md:text-lg">
                                {result.reaction_time.toFixed(3)}<span className="text-zinc-400">s</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}