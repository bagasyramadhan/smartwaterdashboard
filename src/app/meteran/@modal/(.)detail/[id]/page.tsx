import Modal from "@/components/core/Modal";
import { getData } from "@/services/meteran";

export default async function DetailMeteranPage(props : any) {
    const {params} = props;
    const meteran = await getData('http://localhost:3000/api/meteran/?id='+ params.id);
    console.log(meteran.data);
    return (
        <Modal>
            <img 
                src={meteran.data.image} 
                alt="" 
                className="w-full object-cover aspect-square col-span-2"
                />
                <div className="bg-white p-4 px-6">
                    <h3>Seri : {meteran.data.seri}</h3>
                    <p>Status : {meteran.data.status}</p>
                </div>
        </Modal>
                
            
    );
}