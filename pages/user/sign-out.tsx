import { NextPage } from "next";
// import Link from "next/link";

const Signout: NextPage = (props) => {
    return (
        <a href="/">
          <p className="cursor-pointer text-stone-200 text-xl pt-1 hover:text-stone-400">sign out</p>
        </a>
    )
};

export default Signout;