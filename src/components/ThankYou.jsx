import thankYou from "../assets/images/icon-thank-you.svg";
export default function ThankYou() {
  return (
    <>
      <section className="sectionFive d-flex">
        <img src={thankYou} alt="thank you" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at adewalestephennifemi@gmail.com.
        </p>
      </section>
    </>
  );
}
