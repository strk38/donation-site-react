import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDonationData } from "../../Utility/localStorage";
import { Helmet } from 'react-helmet-async';

const Donations = () => {
    const donationLists = useLoaderData();
    const [donations, setDonations] = useState([]);




    const [displayDonationsLength, setDisplayDonations] = useState(4);

    useEffect(() => {
        const storeDonationIds = getDonationData();

        if (donationLists.length > 0) {
            const donation = donationLists.filter(donationList => storeDonationIds.includes(donationList.id))
            setDonations(donation);
        }
    }, [])



    return (
        <div className="my-8">
            <Helmet>
                <title>
                    Donation C | Donations
                </title>
            </Helmet>
            {donations.length === 0 ? <h2 className="text-center font-bold text-red-500 text-3xl my-12">No donations have been made yet</h2> : ""}

            <div className="grid md:grid-cols-2 gap-4 mx-4 my-12">

                {
                    donations.slice(0, displayDonationsLength).map(donation =>
                        <div key={donation.id} className=" card card-side w-full bg-base-50 shadow-xl">
                            <figure className="w-1/2 h-full"><img src={donation.image} alt="" /></figure>
                            <div className="card-body bg-green-50">
                                <h2 className={`font-semibold text-sm bg-red-100 w-fit px-2 py-1 text-${donation.colors}-500 rounded-md`}>{donation.category}</h2>
                                <p className={`text-${donation.colors}-600 font-semibold`}>{donation.title}</p>
                                <button className="btn bg-purple-500 text-white font-bold">
                                    <Link to={`/details/${donation.id}`}>
                                        View Details
                                    </Link>
                                </button>
                            </div>


                        </div>)
                }

            </div>

            {displayDonationsLength >= donations.length ?
                <div className="text-center">
                    <button onClick={() => setDisplayDonations(4)} className="btn bg-green-600 text-white font-bold">Show Less</button>
                </div > :
                <div className="text-center">
                    <button onClick={() => setDisplayDonations(donations.length)} className="btn bg-green-600 text-white font-bold">Show All</button>
                </div >
            }
        </div>
    );
};

export default Donations;