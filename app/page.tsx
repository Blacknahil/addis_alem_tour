// import Image from "next/image";
// import { useRouter } from "next/router";
import Navigation from "../components/navigation/navigation";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navigation />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Main body here</p>
      </main>
      {/* <button onClick={Rout.} */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer here
      </footer>
    </div>
  );
}
