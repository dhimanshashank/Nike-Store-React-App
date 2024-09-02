import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative bg-gray-100">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="px-8 py-8 bg-blue-50">
      <CustomerReviews />
    </section>
    <section className="px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="px-8 pt-8 bg-black pb-8">
      <Footer />
    </section>
  </main>
);

export default App;