import {AiOutlineCheckCircle, AiOutlineWarning, AiOutlineCloseCircle, AiOutlineInfoCircle,} from "react-icons/ai";

export default function PopupEl({variant = "info", title, darkmode = false, position, children}){

    const variants = {
        info : `from-sky-200 to-sky-100 text-sky-700`,
        success : `from-green-200 to-green-100 text-green-700`,
        warning : `from-yellow-200 to-yellow-100 text-yellow-700`,
        error : `from-red-200 to-red-100 text-red-700`
    }

    const darkVariants = {
        info : `from-sky-700 to-sky-600 text-sky-100`,
        success : `from-green-700 to-green-600 text-green-100`,
        warning : `from-yellow-700 to-yellow-600 text-yellow-100`,
        error : `from-red-700 to-red-600 text-red-100`
    }

    const container = ` bg-gradient-to-br flex gap-2 p-4 rounded-lg min-w-90
                       ${!darkmode ? variants[variant] : darkVariants[variant]}
                       ${position || ""}`
    const icon = `mt-1 h-5 w-5`

    const iconType  = variant === "success" ? <AiOutlineCheckCircle className={icon} /> :
                      variant === "warning" ? <AiOutlineWarning className={icon} /> :
                      variant === "error" ? <AiOutlineCloseCircle className={icon} /> :
                                            <AiOutlineInfoCircle className={icon} />

    return(
        <section className={container}>
            <div>{iconType}</div>
            <div>
                <p className="font-bold">{title}</p>
                <p>{children}</p>
            </div>
        </section>
    )
}