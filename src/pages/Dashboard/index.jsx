import Header from "../../components/Header";
import search from "../../images/svg/search.svg";

const Dashboard = () => {
  return (
    <>
      <Header />
      <section>
        <h2>Conversas 1:1</h2>
        <img src={search} alt="pesquisa" />
      </section>

      <div>
        <button>1:1 Agendadas</button>
        <button>1:1 Realizadas</button>
      </div>
      <main></main>
    </>
  );
};

export default Dashboard;
