import thankYou from "../assets/images/icon-thank-you.svg";
import ConnectButton from "../components/ConnectButton";
import { Github, LinkedIn, X } from "../components/Svgs";
export default function ThankYou() {
  return (
    <>
      <section className="flex-col justify-center items-center text-center flex">
        <img src={thankYou} alt="thank you" />
        <header className="my-4">
          <h1 className="text-3xl font-medium mb-2">Thank you!</h1>
          <p className="leading-6">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to connect
            with me.
          </p>
        </header>
        <div>
          <p className="uppercase font-medium mb-4">Connect with developer</p>
          <div className="flex gap-4 justify-center">
            <ConnectButton href="//github.com/DemoStephen" icon={<Github />} />
            <ConnectButton href="//x.com/codewithstephen" icon={<X />} />
            <ConnectButton
              href="//www.linkedin.com/in/codewithstephen/"
              icon={<LinkedIn />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
