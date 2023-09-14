import Logo from "../public/logo/logo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-screen max-w-mb_base bg-red">
        <h1 className="font-light text-4xl">INIT</h1>
        <h1 className="font-normal text-4xl">INIT</h1>
        <h1 className="font-bold text-4xl">INIT</h1>
        <Logo />
      </div>
    </main>
  );
}
