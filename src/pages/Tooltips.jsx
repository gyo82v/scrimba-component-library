import Tooltip from "../components/Tooltip"

export default function Tooltips(){
    const container = `flex flex-col items-center gap-6 mt-6 px-4 lg:flex-row lg:justify-center lg:mt-10`
    const section = `w-11/12 lg:w-4/12`
    const sectionTools = `flex flex-wrap gap-2`
    const h2 = `font-bold text-xl text-stone-700 mb-2 lg:mb-5`
    return(
        <section className={container}>
            <section className={section}>
                <h2 className={h2}>lightmode:</h2>
                <section className={sectionTools}>
                    <Tooltip title="Archive notes">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip>
                    <Tooltip title="Archive notes" variant="blue">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip>
                    <Tooltip title="Archive notes" variant="purple">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip>
                    <Tooltip title="Archive notes" variant="green">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                    </Tooltip>
                </section>
            </section>
            <section className={section}>
                <h2 className={h2}>Darkmode:</h2>
                <section className={sectionTools}>
                <Tooltip title="Archive notes" darkmode>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
                <Tooltip title="Archive notes" variant="blue" darkmode>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
                <Tooltip title="Archive notes" variant="purple" darkmode>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
                <Tooltip title="Archive notes" variant="green" darkmode>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
                </section>
            </section>
        </section>
    )
}