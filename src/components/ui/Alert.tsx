type Props = {
    message: string;
    type: "success" | "error"
}

export default function Alert({ message, type }: Props) {
    return (
        <div className={`p-3 rounded-lg text-sm  ${type == "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
        </div>
    )
}