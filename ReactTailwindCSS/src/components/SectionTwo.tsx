function SectionTwo() {
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                <p className="lg:w-7/8 mx-auto leading-relaxed text-base">Simple, predictable pricing that scales with your team — from hobby projects to enterprise deployments. Choose a plan that fits your build needs and growth trajectory.</p>
                </div>
                <div className="lg:w-5/6 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Throughput</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-3">Starter</td>
                        <td className="px-4 py-3">Basic builds</td>
                        <td className="px-4 py-3">5 GB</td>
                        <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                        <td className="w-10 text-center">
                        <input name="plan" type="radio"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Parallel builds</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">50 GB</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24/mo</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">High concurrency</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">200 GB</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$150/mo</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio"></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Enterprise</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Dedicated support</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">1 TB</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Contact Us</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio"></input>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Explore plans
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <button className="flex ml-auto text-gray-700 bg-indigo-500 border-0 py-2 px-6 focus-visible:outline focus-visible:outline-2 hover:bg-indigo-600 rounded">Contact Sales</button>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;