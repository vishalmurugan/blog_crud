import AddForm from "./components/AddPost";
import EditForm from "./components/EditPost";
import Home from "./components/Home";
import Layout from "./components/Layout";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ViewCommments from "./components/ViewComments";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer 
		autoClose={2500}
			closeOnClick={true}
			pauseOnFocusLoss={false}
			pauseOnHover={ false}
		/>{/* Toster */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-form" element={<AddForm />} />
          <Route path="/edit-form/:id" element={<EditForm />} />
          <Route path="/post/:id" element={<ViewCommments />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
