import useFetch from '../hooks/useFetch';
import {useState} from 'react'
import { useRef} from "react";
import { useHistory } from "react-router-dom";

export default function CreateWord(){
  const [isLoading, setIsloading] = useState(false);
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function onSubmit(e){
    e.preventDefault();

    if(!isLoading){
      setIsloading(true)
      fetch(`http://localhost:3001/words/`,{
        method: "POST",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({
          day : dayRef.current.value,
          eng : engRef.current.value,
          kor : korRef.current.value,
          isDone : false,
        }),
      })
      .then(res => {
        if(res.ok){
          alert("생성이 완료되었습니다.")
          history.push(`/day/${dayRef.current.value}`)
          setIsloading(false)
        }
      })
    }
    
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
  <form onSubmit={onSubmit}>
    <div className="input_area">
      <label>Eng</label>
      <input type="text" placeholder="computer" ref={engRef} />
    </div>
    <div className="input_area">
      <label>Kor</label>
      <input type="text" placeholder="컴퓨터" ref={korRef} />
    </div>
    <div className="input_area">
      <label>Day</label>
      <select ref={dayRef}>
        {days.map(day => (
          <option key={day.id} value={day.day}>{day.day}</option>
        ))}
      </select>
    </div>
    <button style={{opacity: isLoading ? 0.3 : 1}}>{isLoading ? "저장중..." : "저장"}</button>
  </form>
  )
}