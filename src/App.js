import "./App.css";
import Counter from "./component/counter/Counter";
import Header from "./component/header/Header";
import Auth from "./component/auth/Auth";
import UserProfile from "./component/userProfile/UserProfile";
import { useSelector } from "react-redux";
function App() {
  let isAuthValue = useSelector((state) => {
    return state.authSliceReducer.isAuthenticated;
  });

  return (
    <div className="app-sec">
      <Header />
      {!isAuthValue && <Auth />}
      {isAuthValue && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
