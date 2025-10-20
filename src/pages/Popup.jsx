import PopupEl from "../components/layout/PopupEl"

export default function Popup(){
    const container = `flex flex-col items-center gap-6 mt-6 px-4 lg:flex-row lg:justify-center lg:mt-10`
    const section = `w-11/12 lg:w-4/12`
    const sectionToasts = `flex flex-wrap gap-2`
    const h2 = `font-bold text-xl text-stone-700 mb-2 lg:mb-5`
    return(
        <section className={container}>
            <section className={section}>
                <h2 className={h2}>Lightmode:</h2>
                <section className={sectionToasts}>
                    <PopupEl variant="success" title="Success">
                        Your work has been saved.
                    </PopupEl>
                    <PopupEl variant="warning" title="Warning">
                        A network error was detected.
                    </PopupEl>
                    <PopupEl  title="Information">
                        Please read updated information.
                    </PopupEl>
                    <PopupEl variant="error" title="Error">
                        Please re-save your work again.
                    </PopupEl>
                </section>
            </section>
            <section className={section}>
                <h2 className={h2}>Darkmode:</h2>
                <section className={sectionToasts}>
                    <PopupEl variant="success" title="Success" darkmode>
                        Your work has been saved.
                    </PopupEl>
                    <PopupEl variant="warning" title="Warning" darkmode>
                        A network error was detected.
                    </PopupEl>
                    <PopupEl title="Information" darkmode>
                        Please read updated information.
                    </PopupEl>
                    <PopupEl variant="error" title="Error" darkmode>
                        Please re-save your work again
                    </PopupEl>
                </section>
            </section>
        </section>
    )
}