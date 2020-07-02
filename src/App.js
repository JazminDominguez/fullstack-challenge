import DirectoryList from "ui/components/DirectoryList";

const URL =
    "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory";

/*const fetchOffersList = () => {
  fetch(URL)
  .then(response => response.json())
  .then( res => {
      return res.data
  })
  .catch(err => {
      console.log(err)
  });
  
};
*/

export default function App() {
    const [offerList, setOfferList] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                setOfferList(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <p class="py-4 text-lg text-center">Start here :) Good luck!</p>

            <DirectoryList offerList={offerList} />
        </>
    );
}
