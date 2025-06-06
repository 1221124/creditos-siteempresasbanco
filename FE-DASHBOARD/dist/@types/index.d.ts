declare module "#not-for-import/feDashboard/components/HomePage" {
    type HomePageProps = {
        bankName: string;
        message: string;
    };
    const HomePage: React.FC<HomePageProps>;
    export default HomePage;
}
declare module "feDashboard/App" {
    import React from "react";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "utils/styles";
    const App: React.FC;
    export default App;
}
