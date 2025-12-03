import { ImageResponse } from "next/og"

export const alt = "Khalil Graphics - Professional Graphic Design Services"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#f8fafc",
        padding: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          backgroundColor: "white",
          padding: 40,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "90%",
          height: "90%",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#0f172a",
          }}
        >
          Khalil<span style={{ color: "#0ea5e9" }}>Graphics</span>
        </h1>
        <p
          style={{
            fontSize: 32,
            marginBottom: 40,
            color: "#64748b",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Professional Graphic Design Services
        </p>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div
            style={{
              padding: "12px 24px",
              backgroundColor: "#0ea5e9",
              color: "white",
              borderRadius: 8,
              fontWeight: "bold",
            }}
          >
            View My Work
          </div>
          <div
            style={{
              padding: "12px 24px",
              border: "2px solid #0ea5e9",
              color: "#0ea5e9",
              borderRadius: 8,
              fontWeight: "bold",
            }}
          >
            Contact Me
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  )
}
