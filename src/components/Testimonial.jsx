import { FaHome } from "react-icons/fa"

export default function Testimonial({photo, name, title, children}){
    const container = ``
    const img = ``
    const div = ``
    const icon = ``
    const p = ``
    const span = ``
    return(
        <section className={container}>
            { photo ? 
              <img className={img} alt="avater" src={photo} /> :
              <div className={div}>
                <FaHome className={icon} />
                <p className={p}>Work<span className={span}>cation</span></p>
              </div>
            }
            <section>
                <p>{children}</p>
                <p>{name} / {title}</p>
            </section>
        </section>
    )
}