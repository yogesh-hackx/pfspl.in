import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 lg:container py-6 mx-auto md:px-6 md:py-12 mt-7">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
