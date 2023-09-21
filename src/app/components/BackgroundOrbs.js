export default function BackgroundOrbs() {
    return (
        <div className="overflow-hidden">
            <div className="absolute top-1/4 left-2/4 w-72 h-72 p-5 bg-brand-quaternary rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob"></div>
            <div className="absolute -top-20 left-80 w-72 h-72 p-5 bg-brand-secondary rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob"></div>
        </div>
    )
}