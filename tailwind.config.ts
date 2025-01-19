/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--mm-background)",

        // Game
        "board-bg": "var(--mm-board-background)",
        "board-text": "var(--mm-board-text)",
        // Game colors
        "board-white": "var(--mm-board-white)",
        "board-red": "var(--mm-board-red)",
        "board-yellow": "var(--mm-board-yellow)",
        "board-green": "var(--mm-board-green)",
        "board-blue": "var(--mm-board-blue)",
        "board-brown": "var(--mm-board-brown)",
        "board-light-blue": "var(--mm-board-light-blue)",
        "board-pink": "var(--mm-board-pink)",
        "board-orange": "var(--mm-board-orange)",
        // Game gradients
        "board-chance-gradient": "var(--mm-board-chance-gradient)",
        "board-community-chest-gradient":
          "var(--mm-board-community-chest-gradient)",
      },
      fontFamily: {
        game: "Kabel, sans-serif",
        instruction: "Helvetica, sans-serif",
      },
      fontWeight: {
        // Medium
        m: 500,
        // Demi
        d: 600,
        // Bold
        b: 700,
      },
      fontSize: {
        "24": "24px",
        "20": "20px",
        "16": "16px",
        "14": "14px",
        "13": "13px",
        "12": "12px",
        "9": "9px",
        "7": "7px",
      },
      lineHeight: {
        "28": "28px",
        "22": "22px",
        "18": "18px",
        "16": "16px",
        "15": "15px",
        "14": "14px",
        "11": "11px",
        "8": "8px",
      },
      letterSpacing: {
        "3": "0.03em",
        "2": "0.02em",
        "1": "0.01em",
      },
    },
  },
  plugins: [],
};
