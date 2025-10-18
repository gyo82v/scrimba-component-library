import { FaHome } from "react-icons/fa"


export default function Testimonial({photo, name, title, children}){
    const container = `shadow-lg p-3 font-semibold relative flex flex-col max-w-160
                      ${photo ? `bg-blue-500 text-neutral-50 pt-28 pb-8 
                                  md:flex-row md:gap-4 md:pt-8` :
                                 `bg-neutral-200 py-10 md:items-center`
                        }`
    const img = `rounded-xl w-11/12 absolute -top-15 h-34  md:-top-5 md:h-50
                 md:w-60 `
    const div = `flex items-center gap-1 mb-4 mx-auto md:mb-6`
    const section = `flex flex-col ${photo ? `` : `md:items-center`}`
    const pChildren = `${photo ? "" : "md:text-center md:w-8/12"}`
    const div2 = `text-sm mt-4 ${photo ? `` : `md:flex gap-2 md:mx-auto md:mt-6 `} `
    const ptitle = `${photo ? "text-neutral-200" : "text-neutral-400"}`

    return(
        <section className={container}>
            { photo ? 
                 <img className={img} alt="avater" src={photo} /> :
              <div className={div}>
                <FaHome className="text-blue-500" />
                <p className="font-bold">Work<span className="text-blue-500">cation</span></p>
              </div>
            }
            <section className={section}>
                <p className={pChildren}>&ldquo;{children}&rdquo;</p>
                <div className={div2}>
                    <p>{name}<span className="hidden text-blue-500 md:inline-flex md:ml-2">/</span></p>
                    <p className={ptitle}>{title}</p>
                </div>
            </section>
        </section>
    )
}