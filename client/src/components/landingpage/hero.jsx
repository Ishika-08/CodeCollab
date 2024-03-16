

export default function hero() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (

        < section
            className="relative h-[640px] bg-green-200/[.25] "
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl mt-[-150px] text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-green-700"> Forever Home. </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="w-[50%]">
                    <img className=" w-full mt-[-185px] ml-[235px] " src="public\images\interview.jpg" alt="interview-img" />
                </div>
            </div>
        </section>

    );
}
