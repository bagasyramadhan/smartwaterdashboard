import { getData } from "@/services/meteran";
import Link from "next/link";

    type MeteranPageProps = {params:{slug:string}};

    export default async function MeteranPage(props: MeteranPageProps) {
        const {params} = props;
        const meteran = await getData('http://localhost:3000/api/meteran');
        
        return(
            <div className="grid grid-cols-4 mt-5 place-items-center">
                {/* <h1>{params.slug ? "detail meter page" : " Meter Page"}</h1> */}
                {meteran.data.length > 0 && 
                    meteran.data.map((meteran:any) => (
                        <Link 
                        href={`/meteran/detail/${meteran.id}`} 
                        key={meteran.id} 
                        className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">

                                <img className="p-8 rounded-t-lg object-cover h-96 w-full" 
                                src={meteran.image} 
                                alt="product image" />

                            <div className="px-5 pb-5">

                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{meteran.seri}</h5>

                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{meteran.status}</span>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lihat Detail</button>
                                </div>
                            </div>
                        </Link>

                )

                )}
                {params.slug && (
                    <>
                        <p>Seri : {params.slug[0]}</p>
                        <p>Status : {params.slug[1]}</p>
                        <p>Tipe : {params.slug[2]}</p>
                    </>
                )}
            </div>
        );
    }