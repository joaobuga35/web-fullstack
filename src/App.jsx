import { AuthProvider } from "./context/authcontext";
import { RoutesMain } from "./routes";
import Global from "./styles/Global";

const App = () => {
  return (
    <>
      <Global />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

export default App;
