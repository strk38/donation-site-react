import { useContext } from "react";
import { AssetSearch } from "../Home/Home";

const Banner = () => {

    const [search, setSearch] = useContext(AssetSearch);

    const handleSearch = e => {
        e.preventDefault();
        //setSearch(e.target.value);    doesnt work
        //console.log('hs ', search);
    }

    const handleCategoryChange = e => {
        // console.log(name);
        setSearch(e.target.value);
    }



    return (
        <div>
            <div className="hero max-h-screen bg-base-200">
                <div className="hero-content text-center my-16">
                    <div className="min-w-full">
                        <h1 className="text-4xl font-bold mb-4">I Grow By Helping People In Need</h1>
                        <div className="join mb-4">
                            <input onChange={handleCategoryChange} type="text" name='search' placeholder="Search here..." className="input input-bordered join-item" />
                            <button onClick={handleSearch} className="btn btn-primary join-item">Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;