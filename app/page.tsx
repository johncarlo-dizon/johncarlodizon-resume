export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, height: "100vh", background: "#111" }}>
      <iframe
        src="/resume.pdf"
        style={{ width: "100%", height: "100vh", border: "none", display: "block" }}
        title="John Carlo V. Dizon — Resume"
      />
    </main>
  );
}
