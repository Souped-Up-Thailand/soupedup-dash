interface Props {
    children: React.ReactNode;
}

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

export default function Layout(props: Props) {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
            {/* <div className="flex overflow-auto whitespace-nowrap">
                {classCar.map((car, index) => (
                    <div
                        key={index}
                        className="flex-1 p-4 text-center border-b border-zinc-700 hover:bg-zinc-800 transition-colors"
                    >
                        {car}
                    </div>
                ))}
            </div> */}
            {props.children}
        </div>
    )
}