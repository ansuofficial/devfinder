import LogoWhite from "./assets/logo-white.svg";
import LogoDark from "./assets/logo-dark.svg";

// import IconSearch from "./assets/icon-search.svg"

// import octocat from "./assets/octocat.svg";
import UserStat from "./components/UserStat";
import UserMeta from "./components/UserMeta";
import IconLocation from "./components/icons/IconLocation";
import IconTwitter from "./components/icons/IconTwitter";
import IconWebsite from "./components/icons/IconWebsite";
import IconCompany from "./components/icons/IconCompany";
import IconSun from "./components/icons/IconSun";
import IconSearch from "./components/icons/IconSearch";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("ansuofficial");
  const [val, setval] = useState("");

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // put your fetch (search user) code here
    const getUser = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const res = await response.json();
      setUser(res);
    };
    getUser();
  }, [val]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setval(username);
  };

  const handleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-dark-primary-800 text-light-secondary"
          : "bg-white text-black"
      } min-h-screen flex items-center justify-center duration-300 ease-in-out`}
    >
      <div className="w-full max-w-screen-md 2xl:max-w-[840px] mx-auto sm:py-4 sm:px-8 p-2 px-4">
        <div className="flex justify-between items-center">
          <h1>
            {theme == "dark" ? (
              <img src={LogoWhite} alt="Logo" />
            ) : (
              <img src={LogoDark} alt="Logo" />
            )}
          </h1>

          <div className="inline-flex space-x-4 items-center">
            <span className="font-semibold uppercase text-sm tracking-wider">
              Theme
            </span>
            <select
              name=""
              id=""
              className="bg-transparent border-none outline-none focus:outline-none"
              onClick={handleTheme}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>

            {/* <IconSun /> */}
          </div>
        </div>
        <div className="w-full mt-10">
          <form onSubmit={handleSubmit}>
            <div className="w-full relative ">
              <IconSearch className="absolute left-8 top-1/2 -translate-y-1/2 text-primary-500" />

              <input
                type="text"
                className={`w-full ${
                  theme == "dark" ? "bg-dark-primary-600" : "bg-slate-200"
                } border-0 leading-10 sm:py-4 py-2 rounded-xl pl-20 sm:text-lg text-sm tracking-wider placeholder:text-inherit`}
                placeholder="Search GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="bg-primary-500 text-white leading-8 sm:py-2.5 py-1.5 sm:px-5 px-2  rounded-xl font-semibold tracking-wide absolute right-3.5 top-1/2 -translate-y-1/2">
                Search
              </button>
            </div>
          </form>
        </div>

        <div
          className={`${
            theme == "dark" ? "bg-dark-primary-600" : "bg-slate-200"
          } rounded-xl mt-8 py-8 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-4 gap-y-4 gap-x-6`}
        >
          <div className="col-span-1 relative">
            <img
              src={user.avatar_url}
              alt={"octocat"}
              className="sm:absolute -top-4 sm:w-full w-2/4 rounded-full"
            />
          </div>
          <div className="col-span-3 flex flex-col sm:flex-row items-start justify-between mt-4 sm:mt-0">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold leading-5">
                {user.name}
              </h2>
              <span className="text-primary-500 inline-block mt-2">
                {user.login}
              </span>
            </div>
            <div className="sm:block hidden">
              <p>{user.created_at}</p>
            </div>
          </div>
          <div className="col-span-3 col-start-1 sm:col-start-2  sm:mt-0">
            <p>{user.bio}</p>
          </div>
          <div
            className={`col-span-3 col-start-1 sm:col-start-2 bg-${
              theme == "dark" ? "dark-primary-600" : "slate-200"
            } py-4 px-6 grid grid-cols-3 gap-x-4 rounded-lg mt-6 shadow-lg`}
          >
            <UserStat label="Repos" number={user.public_repos} />
            <UserStat label="Followers" number={user.followers} />
            <UserStat label="Following" number={user.following} />
          </div>
          <div
            className={`col-span-3 col-start-1 sm:col-start-2 grid grid-cols-2 gap-y-4 gap-x-8 mt-6 ${
              theme == "dark" ? "text-white" : "text-black"
            }`}
          >
            <UserMeta
              icon={<IconLocation />}
              text={user.location}
              className="space-x-4"
            />
            <UserMeta icon={<IconTwitter />} text={null} link={null} />
            <UserMeta
              icon={<IconWebsite />}
              text={"https://github.blog"}
              link={"https://github.blog"}
              className="space-x-4"
            />
            <UserMeta icon={<IconCompany />} text={"@github"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
