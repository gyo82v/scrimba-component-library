import Banner from "../components/Banner"

export default function Banners(){

    return (
        <section className="flex flex-col items-center gap-6 mt-6 px-4 mb-6">
            <section className="w-11/12 lg:w-10/12">
                <h2 className="font-bold text-xl text-stone-700 mb-2 lg:mb-5">Multi-line:</h2>
                <section className="flex flex-wrap gap-2">
                    <Banner variant="success" title="Congratulations">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Aliquid pariatur, ipsum similique veniam.
                    </Banner>
                    <Banner variant="warning" title="Attention">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Aliquid pariatur, ipsum similique veniam.
                    </Banner>
                    <Banner variant="error" title="Error">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Aliquid pariatur, ipsum similique veniam.
                    </Banner>
                    <Banner title="Update available">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Aliquid pariatur, ipsum similique veniam.
                    </Banner>
                </section>
            </section>
            <section className="w-11/12 lg:w-10/12">
                <h2 className="font-bold text-xl text-stone-700 mb-2 lg:mb-5">Single-line:</h2>
                <section className="flex flex-wrap gap-2">
                    <Banner variant="success" title="Congratulations" />
                    <Banner variant="warning" title="Attention"/>
                    <Banner variant="error" title="Error"/>
                    <Banner title="Update available" />
                </section>
            </section>
        </section>
    )

}