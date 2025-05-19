
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { Link } from "react-router-dom";

const Home = () => {

  const [name, setName] = useState("");
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session && session.user) {
        console.log("User is logged in via Google:", session.user);
        setName(session.user.user_metadata.full_name);
      }
    };

    getSession();
  }, []);
  return (
    <div>
      {name == "" ? (
        <div>
          Please login{" "}
          <Link to="/signin" className=" underline ">
            here
          </Link>
        </div>
      ) : (
        <div>Hello {name}</div>
      )}
    </div>
  );
};

export default Home;
