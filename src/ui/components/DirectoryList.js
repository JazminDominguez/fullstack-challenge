import { Flex, Box } from "rebass";

export default function DirectoryList({ offerList, ...props }) {
    log.debug("Here is your offers list", offerList);

    const mapOfferList = offerList.map(offer => {
        // converts timestamp to date using toLocalDateString (spanish - Mexico format)
        const unixTime = offer.created;
        const date = new Date(unixTime * 1000);

        return (
            <Box
                key={offer.id}
                width={[1, 1, 1, 1 / 4]}
                px={[4, 3, 4]}
                py={[3, 3, 4]}
                my={[2, 3]}
                mx={[0, 1, 3]}
                className="offer-container">
                <h3>{offer.name}</h3>
                <Flex flexDirection="row">
                    <h4>Created:</h4>
                    <p>{date.toLocaleDateString("es-MX")}</p>
                </Flex>
            </Box>
        );
    });
    return (
        <Flex
            flexWrap="wrap"
            flexDirection={["column", "row"]}
            justifyContent="center"
            mx={[4, 5]}
            my={[2]}>
            {mapOfferList}
        </Flex>
    );
}
