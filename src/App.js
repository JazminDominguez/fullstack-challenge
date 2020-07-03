import DirectoryList from "ui/components/DirectoryList";
import CustomHeader from "ui/components/CustomHeader";
import "./index.scss";

export default function App() {
    const [offerList, setOfferList] = useState([]);
    // default value 1 to fetch the first page
    const [page, setPage] = useState(1);

    const URL = `https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?epp=10&p=${page}`;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                setOfferList(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, [page]);

    // known numbers of pages from the API whith 10 elements per page.
    const pagesArray = [1, 2, 3];

    // takes the pagesArray and maps through it to generate the pagination to avoid code repeat for the buttons
    const pagination = pagesArray.map(index => {
        return (
            <button
                key={index}
                onClick={() => setPage(index)}
                className={page === index ? "-active" : "-inactive"}>
                {index}
            </button>
        );
    });

    return (
        <>
            <CustomHeader />
            <DirectoryList offerList={offerList} />

            <div className="pagination-container">{pagination}</div>
        </>
    );
}
