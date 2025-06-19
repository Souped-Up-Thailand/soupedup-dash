interface TableRankData {
    pos: number;
    driver: string;
    team?: string;
    elapsed_time: number;
    speed: number;
    reaction_time: number;
    status?: string | React.ReactNode;
}

interface Props {
    data?: TableRankData[];
}

export default function TableRank(props: Props) {
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
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            E.T.
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            Speed
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            R.T.
                        </th>
                        <th scope="col" className="px-6 py-3 text-zinc-400">
                            Status
                        </th>
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
                            <td className="px-6 py-2 text-green-400 font-bold md:text-lg">
                                {result.elapsed_time.toFixed(3)}s
                            </td>
                            <td className="px-6 py-2 text-blue-400 font-bold md:text-lg whitespace-nowrap">
                                {result.speed.toFixed(2)} km/h
                            </td>
                            <td className="px-6 py-2 text-yellow-400 font-bold md:text-lg">
                                {result.reaction_time.toFixed(3)}s
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}