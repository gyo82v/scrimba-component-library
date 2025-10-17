import { HiCloudUpload } from "react-icons/hi";

export default function Card({title, darkmode = false, children}){
    const isDarkmode = darkmode ?
                     `bg-neutral-700 text-neutral-200 hover:bg-neutral-600` :
                     `bg-neutral-200 text-neutral-700 hover:bg-neutral-300` 
    const card = `inline-flex flex flex-col items-center gap-4 
                  p-6 max-w-96 rounded-lg relative shadow-lg 
                  transition-transform transition-colors transition-shadow duration-300 ease-in-out
                  hover:scale-105 hover:shadow-xl hover:cursor-pointer         
                  ${isDarkmode}`
    const icon = `absolute p-2 text-neutral-50 rounded-lg bg-blue-500 -top-4 
                   items-center justify-center  w-11 h-11  fill-current  `
    return(
        <section className={card}>
            <p className="font-bold text-xl mt-8">{title}</p>
            <p className="text-center">{children}</p>
            <HiCloudUpload className={icon} />
        </section>
    )
}