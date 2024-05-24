import { useEffect, useState, useContext } from "react";
import DonationCategoryCard from "../DonationCategoryCard/DonationCategoryCard";
import { AssetSearch } from "../Home/Home";

const DonationCategory = () => {
    const [donationsList, setDonationsList] = useState([]);
    // const [donationsDisplayList, setDonationsDisplayList] = useState([]);

    const [search, setSearch] = useContext(AssetSearch);
    //console.log('donationCategory ', search);
    //console.log('donationsList ', donationsList);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonationsList(data))
    }, [])


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 mx-4">
            {search === '' ?
                <>
                    {
                        donationsList.map(donationList => <DonationCategoryCard
                            key={donationList.id}
                            donationList={donationList}>
                        </DonationCategoryCard>)
                    }</> :
                <>
                    {
                        donationsList.filter(donationList => donationList.category === search).map(donationList => <DonationCategoryCard
                            key={donationList.id}
                            donationList={donationList}>
                        </DonationCategoryCard>)
                    }</>
            }
        </div>
    );
};

export default DonationCategory;