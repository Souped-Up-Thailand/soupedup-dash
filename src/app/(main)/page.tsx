const classCar = [
    "PRO DRAGSTER",
    "PRO MAX",
    "PRO 6",
    "PRO 4",
    "PRO 4 FWD",
    "PRO TRUCK",
    "PRO F55",
    "PRO TURBO 3000 BY FLEX",
    "PRO 1.9 BY BRC",
    "PRO OPEN 4 N/A",
    "PRO 4 N/A",
    "PRO 275 6 CYL (Class A)",
    "PRO 275 6 CYL (Class B)",
    "PRO 275 4 CYL (Class A)",
    "PRO STREET AWD",
    "STREET TRUCK 1,400 Kg. BY MONZA"
]

const stages = [
    "Qualifying Round",
    "Playoff Round"
]

const reultMockup = [
    {
        driver: "สยาม บุญช่วย",
        team: "Siam Prototype",
    },
    {
        driver: "ธนพล ชูเจริญผล",
        team: "ยูแปดครัว อภิชาตฟาร์มไก่ HYB BY อู่ช่างวัฒน์",
    },
    {
        driver: "เบญจรงค์ ชมายกุล",
        team: "Mactec, ONE POINT, Singha RPM, AOR77, สุพรรณแกรนโฮเทลอ่างทอง"
    },
    {
        driver: "อนุวัฒน์ มณีอินทร์",
        team: "เอ็ม เอกชาติ&หนุ่ย-เป๋อ สุพรรณ"
    },
    {
        driver: "ภิรมย์ ขันทอง",
        team: "Ver Technical Garage & S-CAR"
    }
]

export default function Page() {
    return (
        <div className="px-4 py-5 flex flex-col gap-5">
            <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-extrabold">
                    SOUPED UP GRAND PRIX 2024
                </div>
                <div className="text-sm md:text-lg text-zinc-400">
                    5-7 December 2024
                </div>
            </div>
            <div className="flex gap-3">
                <div className="px-4 py-2 border-2 border-zinc-700 rounded-xl bg-zinc-800 w-full">
                    <select className="w-full">
                        <option value="">Select Class</option>
                        {classCar.map((car, index) => (
                            <option key={index} value={car}>
                                {car}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="px-4 py-2 border-2 border-zinc-700 rounded-xl bg-zinc-800 w-full">
                    <select className="w-full" defaultValue="Qualifying Round">
                        <option value="">Select Stage</option>
                        {stages.map((stage, index) => (
                            <option key={index} value={stage}>
                                {stage}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


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
                        {reultMockup.map((result, index) => (
                            <tr className="border-b dark:border-gray-700 border-gray-200" key={index}>
                                <th scope="row" className="pl-1 py-4 text-lg text-gray-900 whitespace-nowrap dark:text-white font-bold">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap max-w-[15rem] md:w-fit truncate">
                                    <div className="flex flex-col">
                                        <div className="text-lg font-bold">{result.driver}</div>
                                        <div className="text-sm text-zinc-400">{result.team}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-green-400 font-bold md:text-lg">
                                    7.325s
                                </td>
                                <td className="px-6 py-4 text-blue-400 font-bold md:text-lg whitespace-nowrap">
                                    320.5 km/h
                                </td>
                                <td className="px-6 py-4 text-yellow-400 font-bold md:text-lg">
                                    0.123s
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}