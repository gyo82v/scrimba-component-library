export default function Badge({variant = "default", shape = "square", children}){
    const variants = {
        default : `from-gray-300 to-gray-200 text-gray-700`,
        orange : `from-orange-300 to-orange-200 text-orange-700`,
        yellow : `from-yellow-300 to-yellow-200 text-yellow-700`,
        green : `from-green-300 to-green-200 text-green-700`,
        blue : `from-blue-300 to-blue-200 text-blue-700`,
        indigo : `from-indigo-300 to-indigo-200 text-indigo-700`,
        purple : `from-purple-300 to-purple-200 text-purple-700`,
        pink : `from-pink-300 to-pink-200 text-pink-700`
    }
    const style = `py-1 px-4 font-semibold bg-gradient-to-br inline-flex
                   flex items-center justify-center whitespace-normal flex-wrap
                   ${shape === "rounded" ? "rounded-full" : ""}
                   ${variants[variant] || ""}`
    return(
        <div className={`${style}`}>
            {children}
        </div>
    )
}