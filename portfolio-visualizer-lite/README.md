# Portfolio Visualizer Lite

A lightweight frontend tool that lets users build and analyze a mock investment portfolio. Users can add, edit, and allocate weights to various assets, then visualize the portfolio allocation with a pie chart.

This project was created as part of the **Reqs to Repos** initiative — where real job responsibilities from job posts are translated into short, focused projects that showcase practical, relevant skills.

## 🔍 Features

- Add and edit assets with custom names and allocation weights.
- Real-time validation for duplicate assets and missing fields.
- Auto-calculation of total allocation weight.
- Beautiful, responsive pie chart using Recharts to visualize the portfolio.
- State management via Redux for predictable and scalable data flow.
- Tailwind CSS for styling with utility-first design.

## 🧑‍💻 Tech Stack

- React (with Vite)
- Redux Toolkit
- Recharts
- Tailwind CSS

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/your-username/portfolio-visualizer-lite.git
cd portfolio-visualizer-lite
```
Install dependencies:

```bash
npm install
```

Run the app:
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.


---

## ⚠️ Limitations

- Portfolio data is not persisted across reloads (no backend or localStorage).
- No authentication or user management.
- Only supports percentage-based weights (no dollar values or returns simulation).

---

## 📌 Future Improvements

- Store data in localStorage or backend.
- Add historical performance and risk simulation (Sharpe ratio, standard deviation, etc.).
- Export portfolio as CSV or PDF.
- Mobile UX enhancements.

---

## 💡 Inspiration

Built based on a real frontend job posting that asked for skills in:

- React + Redux  
- UI/UX collaboration  
- Clean code and reusable components  
- State and form management  

---

## 📄 License

MIT

This project is part of **Reqs to Repos**: building proof-of-work from job responsibilities.
