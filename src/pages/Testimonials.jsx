import Testimonial from "../components/Testimonial"

export default function Testimonials(){
    const container = `flex flex-col items-center md:flex-row gap-10 md:gap-2 mt-6 md:mt-16 px-4`
    const section = `w-11/12 lg:w-10/12 md:flex md:flex-col md:items-center md:justify-center`
    return(
        <section className={container}>
            <section className={section}>
                <h2 className="font-bold text-xl text-stone-700 mb-8 md:mb-12">With photo:</h2>
            </section>
            <section className={section}>
                <h2 className="font-bold text-xl text-stone-700 mb-8 md:mb-12">no photo:</h2>
            </section>
        </section>
    )
}