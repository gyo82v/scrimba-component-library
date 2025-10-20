export default function Tooltip({variant = "default", darkmode = false, title, children}){

    const variants = {
        default : `from-neutral-200 to-neutral-100 text-neutral-700`,
        blue : `from-blue-200 to-blue-100 text-blue-700`,
        purple : `from-purple-200 to-purple-100 text-purple-700`,
        green : `from-green-200 to-green-100 text-green-700`

    }
    const darkVariants = {
        default : `from-neutral-700 to-neutral-600 text-neutral-100`,
        blue : `from-blue-700 to-blue-600 text-blue-100`,
        purple : `from-purple-700 to-purple-600 text-purple-100`,
        green : `from-green-700 to-green-600 text-green-100`
    }

    const container = `bg-gradient-to-br p-3 rounded-lg shadow-lg
                       ${!darkmode ? variants[variant] : darkVariants[variant]}`
    return(
        <section className={container}>
            <div></div>
            <div>
                <p>{title}</p>
                <p>{children}</p>
            </div>
        </section>
    )

}