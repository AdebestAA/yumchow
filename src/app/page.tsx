import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
  <h1 className="">player</h1>
  <img src="yumChow.png"/>
  <Link href={"/signup"}>Sign up</Link>
  <br />
  <Link href={"/signin"}>Sign in</Link>
    </div>
  );
}
