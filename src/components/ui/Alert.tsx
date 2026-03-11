type Props = {
    message: string
    success: boolean
}

export default function Alert({ message, success }: Props) {
    return (
        <div className={`p-3 rounded-lg text-sm  ${success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
        </div>
    )
}