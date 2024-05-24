import Banner from "../Banner/Banner";
import DonationCategory from "../DonationCategoryList/DonationCategory";
import { Helmet } from 'react-helmet-async';
import { createContext, useState } from "react";

export const AssetSearch = createContext('');

const Home = () => {
    const [search, setSearch] = useState('');
    //console.log('home', search);
    return (
        <>
            <Helmet>
                <title>
                    Donation C| Home
                </title>
            </Helmet>
            <AssetSearch.Provider value={[search, setSearch]}>
                <Banner ></Banner>
                <DonationCategory></DonationCategory>
            </AssetSearch.Provider>

        </>
    );
};

export default Home;