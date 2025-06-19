interface Props {
    options: {
        value: string
        label: string
    }[]
    placeholder?: string
}

export default function Select({ ...props }: React.ComponentProps<"select"> & Props) {
    return (
        <div className="px-4 py-2 border-2 border-zinc-700 rounded-xl bg-zinc-800 w-full">
            <select className="w-full disabled:cursor-not-allowed disabled:text-zinc-600" {...props}>
                <option value="">{props.placeholder ?? "Select"}</option>
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}