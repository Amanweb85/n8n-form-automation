import { useState, type FormEvent } from "react"
import Input from "./ui/Input"
import Spinner from "./ui/Spinner"
import Alert from "./ui/Alert"
import type { FormData } from "../types/form"
import { sendFormData } from "../services/webhook"

export default function ContactForm() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState("")
    const [type, setType] = useState<"success" | "error">("success")

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.message) {
            setType("error")
            setStatus("All fields are required.")
            return
        }

        setLoading(true)

        try {
            const res = await sendFormData(form)
            if (res.ok) {
                setType("success")
                setStatus("Message sent successfully!")
                setForm({ name: "", email: "", message: "" })
            } else {
                setType("error")
                const data = await res.json()
                setStatus(data.message)
            }
        } catch {
            setType("error")
            setStatus("Network error occurred.")
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-4">

                <h2 className="text-2xl font-semibold text-center">
                    Contact Form
                </h2>

                {status && <Alert message={status} type={type} />}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <Input
                        label="Name"
                        name="name"
                        value={form.name}
                        placeholder="Your name"
                        onChange={handleChange}
                    />

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        placeholder="Your email"
                        onChange={handleChange}
                    />

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Message</label>

                        <textarea
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        {loading && <Spinner />}
                        {loading ? "Sending..." : "Submit"}
                    </button>

                </form>
            </div>
        </div>
    )
}