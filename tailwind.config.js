/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Editorial: serif sang trọng cho tiêu đề, sans gọn cho thân
        sans: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      colors: {
        // Giữ tên token "brand" nhưng đổi sang tông WINE / đỏ rượu
        brand: {
          50: "#fdf2f4",
          100: "#fbe3e7",
          200: "#f6c9d2",
          300: "#eaa1b2",
          400: "#db6e87",
          500: "#c64a64",
          600: "#ad3450",
          700: "#8f2840",
          800: "#78233a",
          900: "#652035",
          950: "#3a0e1b",
        },
        ink: {
          DEFAULT: "#211a17",
          soft: "#3a302b",
          muted: "#6b5d57",
        },
        paper: "#faf6f0",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(173,52,80,0.12), 0 20px 50px -18px rgba(120,35,58,0.35)",
        card: "0 8px 30px -14px rgba(58,16,27,0.18)",
        soft: "0 4px 18px -8px rgba(58,16,27,0.14)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(33,26,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,26,23,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
