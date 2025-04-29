import React from "react";
import { useLabelsStore } from "../store/useLabelsStore";

const Loading: React.FC = () => {
  const loadingLabel = useLabelsStore((state) => state.loadingLabel);

  return (
    <div style={styles.container}>
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
    backgroundColor: "#f9f9f9",
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

const styleSheet = document.styleSheets[0];
const keyframes = `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
if (styleSheet) {
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default Loading;
