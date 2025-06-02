import React from "react";
import { useLabelsStore } from "../store/useLabelsStore";

const Loading: React.FC = () => {
  const loadingLabel = useLabelsStore((state) => state.loadingLabel);

  return (
    <div data-testid="loading" style={styles.container}>
      <div style={styles.spinner} />
      <p style={styles.text}>{loadingLabel}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    height: "80vh",
    backgroundColor: "#fff",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #ccc",
    borderTop: "6px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#555",
  },
};

const injectKeyframes = () => {
  if (document.getElementById("spinner-keyframes")) return;
  const style = document.createElement("style");
  style.id = "spinner-keyframes";
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
};

injectKeyframes();

export default Loading;
