import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQXMYCidytreKpCj_H2t2y6DqAiZkTvnA",
  authDomain: "mech-test-fb8c9.firebaseapp.com",
  projectId: "mech-test-fb8c9",
  storageBucket: "mech-test-fb8c9.appspot.com",
  messagingSenderId: "27929812195",
  appId: "1:27929812195:web:ccfc5fc8bb04fa20b779d6"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
