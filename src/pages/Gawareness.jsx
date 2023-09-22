import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

const ResultTile = ({ result }) => {
    return (
    <div className="w-2/5 text-sm font-normal bg-orange-100 rounded-lg px-5 py-3 shadow-lg my-4  hover:scale-105 transition-all duration-150 cursor-pointer hover:outline-slate-800">
        <a href={result.url} target="_blank">
            <h3 className="font-bold text-xl text-amber-800">{result.title}</h3>
            <p className="">{result.text}</p>
        </a>
    </div>
    )
}

export default function Gawareness() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const res = [
            {
                title: "This is title",
                text: "This is a sample text",
                url: "https://www.google.com"
            },
            {
                title: "This is title",
                text: "This is a laksjdf;j jkjasldf jljasdf jkja;df jlafdj kjsakdfjalf lkasdfkjasldf lasjdflkjaflj ljasldkfjasdf flkjsdkfjlkjf jlsjdfkjsldfj jljsdkfjsdf jljlksjdfsd  akljfaskfjda jkjsldfj lkdfksdjf lsjdflksdf  ljlkjfksjdf jkdflksdf ll kajaj text",
                url: "https://www.google.com"
            },
            {
                title: "This is title",
                text: "This is a sample text",
                url: "https://www.google.com"
            },
        ]
        setResults(res)
    }, [])
    return (
        <>
            <div className="text-3xl font-bold  flex-1 justify-self-stretch px-5 pt-4 ">
                <div className="flex justify-center">
                <div className="flex  items-center justify-center border-2 text-sm lg:w-2/6 px-5 py-1 my-2 focus-within:outline-gray-200 focus-within:bg-white rounded-xl shadow-sm hover:shadow-md transition-all ease-in-out duration-200">
                    <FiSearch size={20} className="text-gray-700" />
                    <input type="text" className="ml-2 px-3 py-2 focus:border-none focus:outline-none bg-transparent" placeholder="Search for document" />
                </div>
                </div>
                
                {results.map((result, index) => <div className="flex  justify-center"> <ResultTile key={index} result={result} /></div> )}
            </div>

        </>
    )
}