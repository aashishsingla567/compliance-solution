import Footer from "./Footer";
import Header from "./Header";

const PreLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-theme={"light"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PreLogin;
