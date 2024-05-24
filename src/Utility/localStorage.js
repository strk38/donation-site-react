const getDonationData = () => {
    const storedDonation = localStorage.getItem('Donation-list');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    } else {
        return [];
    }
}

const SaveDonations = id => {
    const storedDonations = getDonationData();
    const exists = storedDonations.find(donationId => donationId === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('Donation-list', JSON.stringify(storedDonations))
    }
}

export { getDonationData, SaveDonations }