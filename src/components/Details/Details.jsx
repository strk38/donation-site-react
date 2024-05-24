import { useLoaderData, useParams } from "react-router-dom";
import { SaveDonations } from "../../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donate => donate.id === idInt);

    const handleDonations = () => {
        SaveDonations(idInt);
        toast("Donated Successfully !!");
    }

    // console.log(donation);

    return (
        <>
            <Helmet>
                <title>
                    Donation C | {donation.category}
                </title>
            </Helmet>
            <div className="mx-4">
                <div className="relative">
                    <img src={donation.image} className="max-h-96 w-full rounded-md"></img>
                    <div className="absolute  sm:inset-0 md:inset-x-0 md:top-72 md:h-24 w-full  bg-black opacity-50"></div>

                    <button onClick={handleDonations} className="btn rounded bg-red-600 border-none absolute bottom-5 left-10 z-10"><span className="text-white">Donate {donation.price}</span></button>
                    <ToastContainer />

                </div>
                <h2 className="text-3xl font-bold my-4">{donation.title}</h2>
                <p>{donation.description}</p>
            </div>
        </>
    );
};

export default Details;