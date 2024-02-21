import "../App.css";
import Footer from "../components/Footer/Footer";
import Hearder from "../components/Hearder/Hearder";

export default function Error() {
  return (
    <>
    <Hearder/>
      <section className=" flex text-base py-64  items-center justify-center flex-col">
        <span className="text-9xl  font-bold text-red-700">404</span>{" "}
        <br />
        <strong className="text-xl    font-bold text-red-700">
          Página Não Localizada!
        </strong>
      </section>
      <Footer/>
    </>
  );
}
