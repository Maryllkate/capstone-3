import Cards from "../components/Cards"


export default function Home(){
    return(
    <div className="container">
        <div className="text-center mt-3">
            <h1>BIG SALE ON SELECTED ITEMS!</h1>
            
        </div>

        <div className="card-container">
            <div className="">
                <Cards />
            </div>
        </div>

    </div>
    )


}