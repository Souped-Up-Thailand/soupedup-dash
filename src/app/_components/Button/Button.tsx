interface Props {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
}

export default function Button({ ...props }: React.ComponentProps<"button"> & Props) {
    return (
        <button
            {...props}
            className="px-4 py-2 border-2 border-zinc-700 rounded-xl bg-zinc-800 flex items-center gap-2 hover:bg-zinc-700 transition-colors cursor-pointer">
            {props.children}
        </button>
    )
}