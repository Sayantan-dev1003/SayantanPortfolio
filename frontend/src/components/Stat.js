export default function Stats() {
    const stats = [
        { count: "10+", label: "Technologies Mastered" },
        { count: "6+", label: "Hackathons Participated" },
        { count: "10+", label: "Projects Completed" },
        { count: "2+", label: "Years of Experience" },
    ];

    return (
        <div className="bg-[#242424] text-white py-12">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx}>
                        <h2 className="text-5xl font-extrabold">{stat.count}</h2>
                        <p className="mt-2 text-base font-semibold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}  