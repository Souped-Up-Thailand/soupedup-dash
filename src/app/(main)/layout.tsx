interface Props {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
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