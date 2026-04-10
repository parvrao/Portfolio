# Parv Barot — MBA Portfolio

Full portfolio repository with frontend, backend, and analysis notebooks.

---

## Folder Structure

```
parv-barot-portfolio/
│
├── frontend/          ← React website (deploy this to Render)
│   ├── src/
│   │   ├── data/
│   │   │   └── projects.js    ← ALL your content lives here
│   │   ├── components/
│   │   │   ├── Nav.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectDetail.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   └── Parv_Barot_Resume.pdf   ← Drop your resume here
│   ├── package.json
│   ├── vite.config.js
│   └── render.yaml               ← Render auto-detects this
│
├── backend/           ← Express API server (optional, deploy separately)
│   ├── src/
│   │   └── server.js
│   └── package.json
│
└── analysis/          ← Python notebooks for the 5 case study projects
    └── notebooks/
        ├── 01_retail_forecasting.ipynb
        ├── 02_hospital_diagnostic.ipynb
        ├── 03_ecommerce_logistics.ipynb
        ├── 04_saas_churn.ipynb
        └── 05_cpg_market_entry.ipynb
```

---

## Deploy the Frontend to Render (5 steps)

### 1. Push to GitHub
```bash
cd parv-barot-portfolio
git init
git add .
git commit -m "Portfolio launch"
```
Create a repo at github.com/new called parv-barot-portfolio, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/parv-barot-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Render
1. Go to render.com → New + → Static Site
2. Connect your GitHub repo
3. Set Root Directory to: `frontend`
4. Render auto-detects render.yaml — click Apply → Create Static Site
5. Live URL appears at the top

### 3. Every future update
```bash
git add .
git commit -m "Updated"
git push
```
Render redeploys in ~60 seconds automatically.

---

## Deploy the Backend to Render (optional)

Only needed if you want the contact form to actually send emails.

1. Go to render.com → New + → Web Service
2. Same repo, set Root Directory to: `backend`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Copy the backend URL (e.g. https://parv-portfolio-api.onrender.com)
6. In frontend/src/pages/Contact.jsx, update the fetch URL to point to your backend

---

## Update Your Content

Everything is in `frontend/src/data/projects.js`.

**To update a project's numbers:**
Find the project by its `id` and edit any field in `results`, `heroStat`, or `heroLabel`.

**To add your real GitHub/Tableau links:**
Replace `https://github.com/parvbarot` and `https://public.tableau.com` with actual URLs.

**To add your resume:**
Drop `Parv_Barot_Resume.pdf` into the `frontend/public/` folder.

---

## Run Locally

```bash
# Frontend
cd frontend
npm install
npm run dev
# Opens at http://localhost:5173

# Backend (optional)
cd backend
npm install
npm run dev
# Runs at http://localhost:3001
```

---

## Run the Analysis Notebooks

```bash
pip install jupyter pandas numpy scikit-learn matplotlib seaborn statsmodels shap folium openpyxl
cd analysis
jupyter notebook
```

All notebooks run on synthetic data automatically — no dataset download required to run them. Download the real datasets from Kaggle for full results.
