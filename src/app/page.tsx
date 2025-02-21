import {Loader} from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { fetchAuthUserDetails } from "./actions/userAuth";

export default async function Home() {
  const userAuth = await fetchAuthUserDetails()
  console.log(userAuth);
  
  return (
    // <>
    // <Loader/>
    // </>
    <div className="">
  <h1 className="">player</h1>
  <img src="yumChow.png"/>
  <br />
  <br />
  <span className="w-5 h-5 border-2 border-[red] border-t-transparent rounded-full animate-spin"></span>
  <br />
  <h1>welcome back {userAuth.success && userAuth.data.username}</h1>
  <Link href={"/signup"}>Sign up</Link>
  <br />
  <Link href={"/signin"}>Sign in</Link>
    </div>
  );
}
