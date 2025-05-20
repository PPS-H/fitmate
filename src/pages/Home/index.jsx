
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
     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {!user ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="mb-4">Please login to continue</p>
            <Link to="/signin" className="text-blue-500 underline hover:text-blue-700">
              Sign in
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-2xl mb-4">Welcome {user.user_metadata.full_name || user.email}</h1>
            <button
              onClick={() => supabase.auth.signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
