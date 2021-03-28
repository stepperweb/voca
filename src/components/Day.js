//import {useEffect, useState} from "react"
import useFetch from '../hooks/useFetch';
import {useParams} from "react-router-dom";
import Word from "./Word";

export default function Day() {
  //const [words, setWords ] = useState([]);
  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`)

  
  const wordList = words.filter(word => word.day === day);
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`).then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setWords(data)
  //   })
  // },[day])

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>  
  )
}




