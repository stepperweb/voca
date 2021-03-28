import useFetch from '../hooks/useFetch';
import { useHistory } from "react-router-dom";

export default function CreateDay(){
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const addDays = () => {
    fetch(`http://localhost:3001/days/`,{
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({
        day : days.length + 1,
      }),
    })
    .then(res => {
      if(res.ok){
        alert("생성이 완료되었습니다.")
        history.push(`/`)
      }
    })
  }
  return(
    <div>
        <h2>현재 일수 : {days.length}일 </h2>
        <button onClick={addDays}>날짜 추가</button>
    </div>
  )
}