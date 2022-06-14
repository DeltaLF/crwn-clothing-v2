import { Routes, Route } from "react-router-dom";

import { useEffect, lazy, Suspense } from "react";
import { getCurrentUser } from "./utils/firebase/firebase.utils";
import { checkUserSession } from "./store/user/user.action";

import Spinner from "./components/spinner/spinner.component";
import { useDispatch } from "react-redux";

import { GlobalStyle } from "./global.style";

const Home = lazy(() => import("./components/routes/home/home.component"));
const Authentication = lazy(() =>
  import("./components/routes/authentication/authentication.component")
);
const Navigation = lazy(() =>
  import("./components/navigation/navigation.component")
);
const Shop = lazy(() => import("./components/routes/shop/shop.component"));
const Checkout = lazy(() =>
  import("./components/routes/checkout/checkout.component")
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    //getCurrentUser().then((user) => console.log(user));
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <div className="body">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
