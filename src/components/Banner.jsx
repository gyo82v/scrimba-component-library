import {AiOutlineCheckCircle, AiOutlineWarning, AiOutlineCloseCircle, AiOutlineInfoCircle,} from "react-icons/ai";


export default function Banner({variant = "neutral", title, width, children}){
    const variants = {
        success : `from-green-200 to-green-100 text-green-700`,
        warning : `from-yellow-200 to-yellow-100 text-yellow-700`,
        error : `from-red-200 to-red-100 text-red-700`,
        neutral: `from-blue-200 to-blue-100 text-blue-700`
    }
    const style = `bg-gradient-to-br  flex gap-2 p-4
                   ${variants[variant] || ""} ${width || "w-full"}`

    const iconType = variant === "success" ? <AiOutlineCheckCircle className="mt-1" /> :
                     variant === "warning" ? <AiOutlineWarning className="mt-1" /> :
                     variant === "error" ? <AiOutlineCloseCircle className="mt-1" /> :
                                           <AiOutlineInfoCircle className="mt-1" />
                
    return(
        <section className={style}>
            <div>{iconType}</div>
            <div>
                <p className="font-bold">{title}</p>
                {children && <p>{children}</p>}
            </div>
        </section>
    )
}