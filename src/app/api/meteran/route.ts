import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        seri : 'xyz1150',
        status : 'aktif',
        // tipe : 'konvensional',
        image : 'https://apollo.olx.co.id/v1/files/65ee723a9258e-ID/image;s=780x0;q=60',
    },
    {
        id: 2,
        seri : 'xyz3131',
        status : 'nonaktif',
        image : 'https://apollo.olx.co.id/v1/files/662089e3cced7-ID/image;s=780x0;q=60',
    },
    {
        id: 3,
        seri : 'tst101',
        status : 'nonaktif',
        image : 'https://apollo.olx.co.id/v1/files/65deeef46855d-ID/image;s=780x0;q=60',
    },
    {
        id: 4,
        seri : 'tst101',
        status : 'nonaktif',
        image : 'https://apollo.olx.co.id/v1/files/65deeef46855d-ID/image;s=780x0;q=60',
    },
    {
        id: 5,
        seri : 'tst101',
        status : 'nonaktif',
        image : 'https://apollo.olx.co.id/v1/files/65deeef46855d-ID/image;s=780x0;q=60',
    }
];

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    
    if (id){
        const detailMeter = await retrieveDataById("meteran", id);
        if(detailMeter){
            return NextResponse.json({ status: 200, message:"suscces" , data : detailMeter});
        }
    
    return NextResponse.json({
         status: 404, 
         message:"Not Found" , 
         data : {},
        });

    }    

    const meteran = await retrieveData('meteran');

    return NextResponse.json({ status: 200, message:"suscces" , data: meteran});
}