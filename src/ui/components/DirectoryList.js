export default function DirectoryList({ offerList, ...props }) {
    log.debug("Here is your offers list", offerList);

    const mapOfferList = offerList.map(offer => {
        return (
            <div key={offer.id}>
                <h3>{offer.name}</h3>
            </div>
        );
    });
    return <div>{mapOfferList}</div>;
}
