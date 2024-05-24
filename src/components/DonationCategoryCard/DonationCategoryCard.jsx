import { Link } from "react-router-dom";

const DonationCategoryCard = ({ donationList }) => {
    const { id, image, title, category, colors } = donationList;
    //console.log(donationList);
    //console.log(category, colors);


    return (
        <div className="mb-4">
            <Link to={`/details/${id}`}>
                <div className="card card-compact sm:w-24 md:w-64 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <div className={`card-body bg-green-50`}>
                        <h2 className={`font-bold bg-red-100 w-fit p-1 text-${colors}-500`}>{category}</h2>
                        <p className={`text-${colors}-600 font-semibold`}>{title}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default DonationCategoryCard;