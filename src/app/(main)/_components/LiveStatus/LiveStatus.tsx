import { IconPoint, IconPointFilled } from "@tabler/icons-react"

export default function LiveStatus() {
    return (
        <div className="flex items-center text-lg">
            <IconPointFilled size={30} color="red" />
            <div className="uppercase">
                Live
            </div>
        </div>
    )
}