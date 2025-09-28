export default function Signup() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6",
      }}
    >
      <form
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          required
          style={{ padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #ccc" }}
        />

        <input
          type="email"
          placeholder="Email"
          required
          style={{ padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={{ padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "0.75rem",
            borderRadius: "0.25rem",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}
