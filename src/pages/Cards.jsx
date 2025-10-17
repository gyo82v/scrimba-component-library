import Card from "../components/Card"

export default function Cards(){
    return(
        <section className="flex flex-col items-center md:flex-row gap-10 md:gap-2 mt-6 md:mt-16 px-4">
            <section className="w-11/12 lg:w-10/12 md:flex md:flex-col md:items-center md:justify-center">
                <h2 className="font-bold text-xl text-stone-700 mb-8 md:mb-12">Light mode:</h2>
                <section>
                    <Card title="Easy Deployement">
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                        Et magna sit morbi lobortis.
                    </Card>
                </section>
            </section>
            <section className="w-11/12 lg:w-10/12 md:flex md:flex-col md:items-center md:justify-center"> 
                <h2 className="font-bold text-xl text-stone-700 mb-8 md:mb-12">Dark mode:</h2>
                <section>
                    <Card darkmode title="Easy Deployement">
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                        Et magna sit morbi lobortis.
                    </Card>
                </section>
            </section>
        </section>
    )
}