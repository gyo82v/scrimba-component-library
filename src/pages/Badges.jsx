import Badge from "../components/Badge"

export default function Badges(){

    return(
        <section className="flex flex-col items-center gap-6 mt-6 px-4 lg:flex-row lg:justify-center lg:mt-10">
            <section className="w-11/12 lg:w-4/12">
                <h2 className="font-bold text-xl text-stone-700 mb-2 lg:mb-5">Square badges: </h2>
                <section className="flex flex-wrap gap-2">
                    <Badge>first</Badge>
                    <Badge variant="orange">second</Badge>
                    <Badge variant="yellow">third</Badge>
                    <Badge variant="green">fourth</Badge>
                    <Badge variant="blue">fifth</Badge>
                    <Badge variant="indigo">sixth</Badge>
                    <Badge variant="purple">seventh</Badge>
                    <Badge variant="pink">eight</Badge>
                </section>
            </section>
            <section className="w-11/12 lg:w-4/12">
                <h2 className="font-bold text-xl text-stone-700 mb-2 lg:mb-5">Pill badges: </h2>
                <section className="flex flex-wrap gap-2">
                    <Badge shape="rounded">first</Badge>
                    <Badge shape="rounded" variant="orange">second</Badge>
                    <Badge shape="rounded" variant="yellow">third</Badge>
                    <Badge shape="rounded" variant="green">fourth</Badge>
                    <Badge shape="rounded" variant="blue">fifth</Badge>
                    <Badge shape="rounded" variant="indigo">sixth</Badge>
                    <Badge shape="rounded" variant="purple">seventh</Badge>
                    <Badge shape="rounded" variant="pink">eight</Badge>
                </section>
            </section>
        </section>
    )
}