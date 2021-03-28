import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w)
  const [isShow, setIsshow ] = useState(false)
  const [isDone, setIsdone ] = useState(word.isDone)
  console.log(word)
  
  //영단어 뜻 감추기/보이기
  const toggleShow = () => {
    setIsshow(!isShow)
  }

  // 기존의 데이터 수정 
  const toggleDone = () => {
    //setIsdone(!isDone)
    fetch(`http://localhost:3001/words/${word.id}`,{
      method: "PUT",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...word, isDone: !isDone,
      }),
    })
    .then(res => {
      if(res.ok){
        setIsdone(!isDone)
      }
    })
  }

  

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  }

  if(word.id === 0){
    return null
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td><input type="checkbox" checked={isDone} onChange={toggleDone} /></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>   
  )
}

