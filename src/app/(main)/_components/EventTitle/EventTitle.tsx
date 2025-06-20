interface Props {
    subtitle?: string;
}

export default function EventTitle(props: Props) {
    return (
        <div className="flex flex-col">
            <div className="text-2xl md:text-3xl font-extrabold">
                SOUPED UP GRAND PRIX 2024
            </div>
            <div className="flex gap-1">
                {props.subtitle ? (
                    <div className="text-sm md:text-lg text-zinc-400">
                        {props.subtitle}
                    </div>
                ) :
                    <div className="text-sm md:text-lg text-zinc-400">
                        5-7 December 2024
                    </div>
                }
            </div>
        </div>
    )
}