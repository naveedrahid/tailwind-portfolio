import AuthenticatedRoutes from "./routes/AuthenticatedRoutes"
import './App.css'
// import { apiService } from "./services/ApiServices"
// import { configVariable } from "../sample.config"
// import { useEffect } from "react"

function App() {

  // const getPosts = async () => {
  //   try {
  //     const postData = await apiService.get(`${configVariable.basUrl}portfolio`)
  //     console.log(postData.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <>
      <AuthenticatedRoutes />
    </>
  )
}

export default App
