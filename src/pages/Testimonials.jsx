import Testimonial from "../components/Testimonial"
import avatar from "../images/woman-office.png"

export default function Testimonials(){
    const container = `flex flex-col items-center md:flex-row gap-10 md:gap-2 mt-6 md:mt-16 px-4`
    const section = `w-11/12 lg:w-10/12 md:flex md:flex-col md:items-center md:justify-center`
    return(
        <section className={container}>
            <section className={section}>
                <h2 className="font-bold text-xl text-stone-700 mb-20 md:mb-12">With photo:</h2>
                <section>
                    <Testimonial photo={avatar} title="engineer" name="Sarah Smith">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                        culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                    </Testimonial>
                </section>
            </section>
            <section className={section}>
                <h2 className="font-bold text-xl text-stone-700 mb-8 md:mb-12">No photo:</h2>
                <section>
                    <Testimonial title="engineer" name="Sarah Smith">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                        culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                    </Testimonial>
                </section>
            </section>
        </section>
    )
}