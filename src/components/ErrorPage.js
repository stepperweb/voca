import {Link} from "react-router-dom"

export default function ErrorPage() {
  return (
    <div>
      <h1>잘못된 페이지입니다!</h1>
      <p><Link to ='/'>메인페이지로 가기</Link></p>
    </div>
  )
}

 

