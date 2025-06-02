declare module "#not-for-import/feDashboard/components/HomePage" {
    type HomePageProps = {
        bankName: string;
        message: string;
    };
    const HomePage: React.FC<HomePageProps>;
    export default HomePage;
}
declare module "dashboard/App" {
    import React from "react";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "./styles/App.css";
    const App: React.FC;
    export default App;
}
