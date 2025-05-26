type HomePageProps = {
  bankName: string;
  message: string;
};

const HomePage: React.FC<HomePageProps> = ({ bankName, message }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>{message}</h1>
      <div className="mt-4">
        <img
          src="https://cdn-icons-png.freepik.com/512/14238/14238769.png"
          alt={bankName}
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
export default HomePage;
