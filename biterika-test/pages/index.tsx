import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import Title from "@/components/Title";

export default function Home() {
  return (
    <Layout>
      <main className="main flex-column">
        <section className="lk-section flex-column flex-auto">
          <div className="container flex-column flex-auto">
            <div className="lk-wrapper full">
              <Sidebar />
              <div className="lk-content flex-column flex-auto">
                <Title />
                <div className="filter-tabs js-tabs mt-2 mt-lg-25">
                  <Filter />
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
