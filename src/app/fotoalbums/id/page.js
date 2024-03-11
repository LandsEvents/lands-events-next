import Image from "next/image";

export default function Events() {
    return(
        <main className="max-w-screen min-h-screen bg-lands-bg">
            {/*Main Container v  */}
            <div className="max-w-full h-full">
                {/*Banner*/}
                <section>
                    <div className="border-b-[1px] border-black bg-lands-accent max-w-screen h-[200px] pb-20">
                        <div className="pt-10 pl-10 text-md text-white hover:underline">
                            <a href="/fotoalbums">← Terug naar albums</a>
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-3xl text-white">Album titel</h1>
                        </div>
                        <div className="mb-24 flex justify-center">
                            <h2 className="text-lg font-thin text-white">XX/XX/XXXX - Landstede Harderwijk</h2>
                        </div>
                    </div>
                </section>
                {/*Thumbnail Display/Slider*/}
                <section>
                    <div className="py-20">
                        <div className="max-w-full h-auto flex justify-center">
                            <div className="h-[500px] w-[1000px] rounded-3xl bg-white border-2 border-black"></div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <div className="pb-20 w-3/5 border-t-2 border-black"></div>
                </div>
                {/*Foto Grid*/}
                <section>
                    <div className="min-h-[600px] max-w-screen flex justify-center space-x-10">
                        <button className="bg-gray-800 w-1/5 h-[200px] shadow-md shadow-lands-accent hover:shadow-lg hover:shadow-lands-accent border-[1px] border-lands-accent hover:border-2 rounded-lg">
                            <img className="h-auto max-w-full" src="" alt="image"></img>
                        </button>
                        <button className="w-1/5 h-[200px] bg-gray-800 shadow-md shadow-lands-accent hover:shadow-lg hover:shadow-lands-accent border-[1px] border-lands-accent hover:border-2 rounded-lg">
                            <img className="h-auto max-w-full" src="" alt="image"></img>
                        </button>
                        <button className="w-1/5 h-[200px] bg-gray-800 shadow-md shadow-lands-accent hover:shadow-lg hover:shadow-lands-accent border-[1px] border-lands-accent hover:border-2 rounded-lg">
                            <img className="h-auto max-w-full" src="" alt="image"></img>
                        </button>
                        <button className="w-1/5 h-[200px] bg-gray-800 shadow-md shadow-lands-accent hover:shadow-lg hover:shadow-lands-accent border-[1px] border-lands-accent hover:border-2 rounded-lg">
                            <img className="h-auto max-w-full" src="" alt="image"></img>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}