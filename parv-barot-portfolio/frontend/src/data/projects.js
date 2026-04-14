export const projects = [
  {
    id: "customer-segmentation",
    number: "01",
    title: "Customer Segmentation & Campaign ROI",
    subtitle: "Surfacing 5 revenue-driving personas from 52,847 CRM records to reoptimize $200K+ in quarterly ad spend",
    industry: "Solar / Clean Energy",
    color: "teal",
    tracks: ["Business Analyst", "Consulting"],
    tools: ["Python", "K-Means", "Pandas", "Tableau", "HubSpot CRM", "Excel"],
    dataset: "Aveyo Solar HubSpot CRM Export — internship (Jun–Sep 2025)",
    datasetLink: "https://docs.google.com/spreadsheets/d/1oOE_kOL9XqSkrkErkyYMhj5eusi_i6s9/edit?usp=sharing",
    duration: "4 weeks",
    impact: "$200K+ quarterly spend reoptimized; 4.2× referral ROI gap identified",
    heroStat: "4.2×",
    heroLabel: "referral channel ROI vs. paid search",
    isLive: false,
    excelLink: "https://docs.google.com/spreadsheets/d/1oOE_kOL9XqSkrkErkyYMhj5eusi_i6s9/edit?usp=sharing",
    overview: "Aveyo Solar was spending $200K+ per quarter across 6 acquisition channels with no unified view of which channels produced the highest lifetime-value customers. The marketing team optimized for cost-per-lead — inadvertently over-funding Meta Ads (18% close rate) while underinvesting in referrals (41% close rate). This project reframes the optimization target as cost-per-closed-deal and LTV-per-channel across 52,847 HubSpot CRM records from a 28-month period.",
    objective: "Build a customer segmentation system using K-Means clustering to identify revenue-driving personas, calculate LTV by acquisition channel, and produce a data-driven budget reallocation model that maximizes closed-deal ROI within the existing $200K quarterly spend.",
    problem: {
      title: "Optimizing for the Wrong Metric",
      body: "The marketing team tracked cost-per-lead — a metric that rewarded Meta Ads for volume while masking an 18% close rate and below-average LTV. Meanwhile, the referral channel was chronically underfunded despite a 41% close rate and average LTV 1.6× the company mean. Without a channel-level LTV view, every dollar of budget reallocation was guesswork."
    },
    methodology: [
      {
        step: "01",
        title: "CRM Data Engineering & Cleaning",
        body: "Processed 52,847 lead records from HubSpot export across 30 fields including lead source, appointment outcomes, deal values, system size, credit tier, and behavioral flags. Applied realistic missingness (3.2% monthly bills, 1.8% roof types, 6.1% HOA flags) and validated date logic across lead → appointment → close → install pipeline."
      },
      {
        step: "02",
        title: "LTV Calculation by Channel",
        body: "Defined LTV = Deal Value × (1 − Cancellation Rate) + (Referrals Generated × Avg Deal Value × 0.30). Calculated LTV deciles 1–10 across all 12,863 closed customers. Identified referral channel LTV 1.6× the company average; top 2 deciles account for ~40% of total revenue — a Pareto concentration confirmed in the data."
      },
      {
        step: "03",
        title: "K-Means Persona Clustering",
        body: "Ran K-Means (k=5) on 8 scaled features: LTV decile, days-to-close, contact count, deal value, monthly bill, credit score proxy, close velocity, and referrals generated. Identified 5 personas: Quick Win (fast close, low contacts), High Value (large deals, prime+ credit), Budget Conscious (near-prime, smaller systems), Referral Champion (2+ referrals, highest LTV), and At Risk (high contacts, elevated cancellation rate)."
      },
      {
        step: "04",
        title: "Budget Reallocation Model",
        body: "Built a dynamic Excel financial model comparing current vs. proposed channel allocation. ROI Index = (Channel Close Rate / Blended Close Rate) × (Channel Avg LTV / Overall Avg LTV). Model projects a 15%+ revenue uplift by shifting +10pp to referral and +7pp to organic SEO from Meta and paid search — within the same $200K quarterly envelope."
      }
    ],
    results: [
      { metric: "Records Analyzed", value: "52,847", context: "28-month HubSpot CRM export" },
      { metric: "Referral vs. Paid Search", value: "4.2× ROI", context: "close rate × LTV index" },
      { metric: "Revenue Concentration", value: "~40%", context: "in top 2 LTV deciles" },
      { metric: "Projected Uplift", value: "+15%", context: "from proposed reallocation" }
    ],
    keyLearning: "The most valuable insight wasn't the K-Means output — it was reframing the optimization metric. Cost-per-lead made Meta Ads look efficient. Cost-per-closed-deal × LTV made it look like the most expensive channel in the portfolio. The same data, a different denominator, and the entire budget conversation changed.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://docs.google.com/spreadsheets/d/1oOE_kOL9XqSkrkErkyYMhj5eusi_i6s9/edit?usp=sharing",
    files: ["build_dashboard.py", "Customer_Segmentation_Raw.csv", "Customer_Segmentation_Campaign_ROI.xlsx"]
  },
  {
    id: "retail-forecasting",
    number: "02",
    title: "Retail Demand Forecasting & Inventory Optimization",
    subtitle: "Cutting $180K in annual carrying costs through ML-powered S&OP planning",
    industry: "Retail / FMCG",
    color: "green",
    tracks: ["Supply Chain", "Business Analyst"],
    tools: ["Python", "Prophet", "ARIMA", "Tableau", "Excel"],
    dataset: "Walmart M5 Forecasting Competition — Kaggle",
    datasetLink: "https://www.kaggle.com/competitions/m5-forecasting-accuracy",
    duration: "4 weeks",
    impact: "$180K annual savings (modeled)",
    heroStat: "9.4%",
    heroLabel: "MAPE achieved (down from 18%)",
    isLive: false,
    excelLink: "https://docs.google.com/spreadsheets/d/1KnqN6bYQiUSiTbUpFL8G6W9SwOHRA_aH/view",
    overview: "A regional grocery chain faces $2.3M in annual inventory write-offs due to demand volatility across 3,000 SKUs and 10 store locations. The planning team relies on static 4-week moving averages, missing seasonal spikes and simultaneously generating overstock and stockouts within the same category.",
    objective: "Build a production-ready demand forecasting system that reduces MAPE below 10%, dynamically recalculates reorder points based on forecast error, and surfaces executive-level S&OP insights in a Tableau dashboard.",
    problem: {
      title: "The $2.3M Inventory Problem",
      body: "Static moving-average forecasting fails to capture promotional lift, holiday spikes, and end-of-life demand decay. Without dynamic safety stock tied to actual forecast confidence, the chain was simultaneously overstocked on slow-movers and stocked out on high-velocity SKUs — a double loss that compounded week over week."
    },
    methodology: [
      { step: "01", title: "Exploratory Data Analysis", body: "Analyzed 42,840 daily sales time series across 5 product categories and 10 stores. Computed Coefficient of Variation (CV) per SKU to triage high-risk items. Identified 87 SKUs in the top-volatility decile driving 61% of total write-off exposure." },
      { step: "02", title: "Forecasting Models", body: "Built ARIMA baseline per SKU. Trained Facebook Prophet models incorporating US calendar events, SNAP purchase days, and price markdown effects. Created a weighted ensemble (60% Prophet, 40% ARIMA) that reduced MAPE from 18% to 9.4% on held-out test set." },
      { step: "03", title: "Dynamic Reorder Logic", body: "Computed EOQ and safety stock dynamically using forecast RMSE as the demand uncertainty input, combined with a simulated 3-day supplier lead time. Generated weekly reorder signals for each store-SKU pair." },
      { step: "04", title: "Executive S&OP Dashboard", body: "Built a Tableau dashboard with MAPE by SKU tier, fill rate vs. carrying cost tradeoff curves, weekly reorder signal heatmap, and simulated write-off reduction over a 12-month horizon." }
    ],
    results: [
      { metric: "MAPE", value: "9.4%", context: "down from 18% baseline" },
      { metric: "Stockout Reduction", value: "31%", context: "simulated on holdout period" },
      { metric: "Annual Savings", value: "$180K", context: "carrying cost model" },
      { metric: "High-Risk SKUs", value: "87", context: "flagged for expedited review" }
    ],
    keyLearning: "Forecast accuracy alone is not the business outcome — the real value was in tying RMSE directly to safety stock buffers, so every model improvement automatically translated to a dollar-quantified inventory reduction.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://public.tableau.com",
    files: ["notebook_eda.ipynb", "notebook_forecasting.ipynb", "notebook_inventory.ipynb", "dashboard_sop.twbx"]
  },
  {
    id: "healthcare-diagnostic",
    number: "03",
    title: "Hospital Operational Efficiency Diagnostic",
    subtitle: "Identifying $420K in savings through peer benchmarking and regression-driven root cause analysis",
    industry: "Healthcare",
    color: "blue",
    tracks: ["Consulting", "Business Analyst"],
    tools: ["SQL", "Python", "Power BI", "PowerPoint"],
    dataset: "CMS Hospital Compare — data.cms.gov (public)",
    datasetLink: "https://data.cms.gov/provider-data/topics/hospitals",
    duration: "3 weeks",
    impact: "$420K projected annual savings",
    heroStat: "14.2%",
    heroLabel: "above-benchmark readmission rate gap identified",
    isLive: false,
    excelLink: "https://docs.google.com/spreadsheets/d/16he_HjwJKuM8YTZt3t1UZW8_JdRt0yy8/view",
    overview: "A hospital network's COO needs to understand why 3 of its 8 facilities are underperforming on readmission rates and patient satisfaction scores relative to national CMS benchmarks — and wants a prioritized transformation roadmap before the next audit cycle.",
    objective: "Deliver a consulting-grade diagnostic: peer benchmarking analysis, regression-identified root causes, and a MECE-structured 90-day transformation roadmap with projected financial impact.",
    problem: {
      title: "Flying Blind Before a CMS Audit",
      body: "Hospital administrators had access to their own metrics but lacked a structured peer comparison methodology. Three facilities were 14.2% above their peer group on 30-day readmission rates — representing both a financial penalty exposure and a genuine patient safety concern."
    },
    methodology: [
      { step: "01", title: "Data Engineering in SQL", body: "Joined quality metrics, staffing, spending, and readmission tables from CMS Hospital Compare. Created composite performance index weighting readmission rate (40%), HCAHPS satisfaction (30%), mortality (20%), and safety (10%). Filtered to peer group: community hospitals, 100–500 beds, same census region." },
      { step: "02", title: "Peer Benchmarking Analysis", body: "Computed percentile rankings for all 8 network facilities against 340 peer hospitals. Mapped each facility on a 2x2 performance vs. spend matrix. Identified 3 underperformers in the low-performance / high-spend quadrant." },
      { step: "03", title: "Regression Root Cause Analysis", body: "Ran multivariate OLS regression with 30-day readmission rate as dependent variable. Nurse staffing ratio and discharge protocol adherence explained 68% of readmission variance." },
      { step: "04", title: "Consulting Deliverable", body: "Built MECE issue tree mapping root causes to interventions. Produced a prioritized 4-initiative 90-day roadmap in PowerPoint with projected impact per initiative and risk-adjusted savings estimate of $420K annually." }
    ],
    results: [
      { metric: "Root Causes", value: "3 identified", context: "via regression (R² = 0.68)" },
      { metric: "Peer Gap", value: "14.2%", context: "above benchmark readmissions" },
      { metric: "Projected Savings", value: "$420K", context: "annualized, 4 initiatives" },
      { metric: "KPI Dashboard", value: "8 drilldowns", context: "in Power BI" }
    ],
    keyLearning: "The hardest part was not the regression — it was the peer group definition. Comparing a 120-bed rural hospital to a 450-bed urban trauma center produces meaningless benchmarks. Rigorous segmentation before analysis is the consulting skill that separates signal from noise.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://public.tableau.com",
    files: ["sql_data_prep.sql", "notebook_benchmarking.ipynb", "notebook_regression.ipynb", "roadmap_deck.pptx"]
  },
  {
    id: "ecommerce-logistics",
    number: "04",
    title: "E-Commerce Logistics Network Redesign",
    subtitle: "From 8.4% late delivery rate to a Pareto-driven carrier reallocation strategy",
    industry: "E-Commerce / Logistics",
    color: "amber",
    tracks: ["Supply Chain", "Consulting"],
    tools: ["Python", "Pandas", "Folium", "SQL", "Tableau"],
    dataset: "Brazilian E-Commerce (Olist) — Kaggle",
    datasetLink: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
    duration: "3 weeks",
    impact: "+12.3 pt OTIF improvement (simulated)",
    heroStat: "71%",
    heroLabel: "of delays traced to 22% of order corridors",
    isLive: false,
    excelLink: "https://docs.google.com/spreadsheets/d/1LcfLyqa31p5GJ5eiwuC9L_vBGUCY0WcY/view",
    overview: "An online marketplace growing at 40% YoY is seeing customer satisfaction erode as late delivery rates climb to 8.4%. The VP of Logistics suspects the problem is concentrated in specific seller-to-customer corridors, but has no visibility into which routes, sellers, or carrier partnerships are driving delay variance.",
    objective: "Conduct an OTIF analysis to identify the highest-impact delay corridors, decompose root causes, and deliver a network redesign recommendation with simulated performance impact.",
    problem: {
      title: "Growth Without Visibility",
      body: "Rapid GMV growth masked a logistics network that was quietly breaking. With 100K+ orders across 27 Brazilian states and dozens of seller-carrier combinations, no single view existed of where delays were accumulating."
    },
    methodology: [
      { step: "01", title: "OTIF Analysis", body: "Calculated On-Time In-Full rate by seller state, product category, and carrier. Used SQL window functions to compute each order's promised vs. actual delivery delta. Identified top 10% delay-generating seller-to-customer state corridors." },
      { step: "02", title: "Geospatial Delay Heatmap", body: "Built origin-destination delay heatmap using Python's Folium library. Found that 8 corridors connecting Southeast sellers to North/Northeast customers accounted for 44% of total late deliveries." },
      { step: "03", title: "Root Cause Decomposition", body: "Split total delivery time into seller processing, carrier transit, and last-mile. Applied ANOVA to isolate which component contributed most. Seller lead time explained 58% of total variance." },
      { step: "04", title: "Network Redesign Recommendation", body: "Proposed consolidation hub, seller SLA tiering with penalty triggers, and carrier reallocation. Modeled OTIF improvement of +12.3 percentage points." }
    ],
    results: [
      { metric: "Pareto Finding", value: "22% of corridors", context: "causing 71% of delays" },
      { metric: "Root Cause", value: "Seller lead time", context: "58% of variance explained" },
      { metric: "OTIF Improvement", value: "+12.3 pts", context: "simulated post-redesign" },
      { metric: "Review Score", value: "3.8 → 4.2★", context: "projected recovery" }
    ],
    keyLearning: "The geospatial heatmap was the decision-forcing insight. Every stakeholder had a theory — the map made it undeniable that the real issue was seller processing time in specific origin states, and no carrier renegotiation would have fixed that.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://public.tableau.com",
    files: ["notebook_otif_analysis.ipynb", "notebook_geospatial.ipynb", "notebook_root_cause.ipynb", "network_redesign.pptx"]
  },
  {
    id: "saas-churn",
    number: "05",
    title: "SaaS Churn & Revenue Leakage Analysis",
    subtitle: "ML-powered early warning system flagging $340K ARR at risk 60 days before cancellation",
    industry: "Technology / SaaS",
    color: "coral",
    tracks: ["Business Analyst", "Consulting"],
    tools: ["Python", "scikit-learn", "SHAP", "SQL", "Tableau"],
    dataset: "IBM Telco Customer Churn — Kaggle / UCI",
    datasetLink: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn",
    duration: "3 weeks",
    impact: "$340K ARR at risk flagged 60 days early",
    heroStat: "0.91",
    heroLabel: "AUC-ROC score on test set",
    isLive: false,
    excelLink: "https://docs.google.com/spreadsheets/d/1KnlUydf_ENLt0BW1NTk5yAqkh6cuUKpF/view",
    overview: "A B2B SaaS company's CFO is alarmed that monthly churn has risen from 1.8% to 3.1% over two quarters, quietly eroding $1.2M in ARR. The Customer Success team has no early warning system — they only discover a customer is churning when a cancellation ticket is submitted.",
    objective: "Build an interpretable churn prediction model that generates a revenue-at-risk ranking per account, identify the 3 highest-impact churn drivers using SHAP, and produce a segmented retention playbook.",
    problem: {
      title: "Churn Discovered Too Late",
      body: "Without predictive visibility, CS teams operate reactively. By the time a customer submits a cancellation, the engagement gap has typically been accumulating for 6–8 weeks. For a company with $1.2M in ARR erosion in two quarters, the cost of that lag is significant."
    },
    methodology: [
      { step: "01", title: "SQL Cohort Analysis", body: "Segmented 7,043 customers by contract type, tenure band, and product tier. Month-to-month customers in the 0–12 month tenure band had a 43% churn rate vs. 7% for annual customers." },
      { step: "02", title: "Classification Model", body: "Trained Logistic Regression and Random Forest classifiers on 80/20 train-test split. Final model: 87% accuracy, AUC-ROC 0.91. Precision-recall optimized for CS team workload." },
      { step: "03", title: "SHAP Explainability", body: "Applied SHAP to identify feature-level contribution to each churn prediction. Top 3 global drivers: contract type, tenure under 12 months, and absence of tech support add-on." },
      { step: "04", title: "Revenue-at-Risk Ranking & Playbook", body: "Multiplied churn probability by account ARR to generate revenue-at-risk per customer. Flagged top 60 accounts representing $340K ARR. Built 3-segment retention playbook with 9 specific CS actions." }
    ],
    results: [
      { metric: "Model Accuracy", value: "87%", context: "AUC-ROC: 0.91" },
      { metric: "Top Churn Drivers", value: "3 identified", context: "via SHAP values" },
      { metric: "ARR at Risk", value: "$340K", context: "flagged 60 days early" },
      { metric: "Retention Playbook", value: "3 segments", context: "9 specific CS actions" }
    ],
    keyLearning: "SHAP explainability was not a technical nicety — it was the feature that made the CS team actually use the model. A black-box score prompts skepticism. A SHAP force plot showing exactly why a specific customer is high-risk prompts a phone call.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://public.tableau.com",
    files: ["notebook_cohort_sql.ipynb", "notebook_churn_model.ipynb", "notebook_shap.ipynb", "retention_playbook.xlsx"]
  },
  {
    id: "cpg-market-entry",
    number: "06",
    title: "CPG Market Entry & Pricing Strategy",
    subtitle: "White space identification and $18.4M revenue model for a natural foods national expansion",
    industry: "Consumer Packaged Goods",
    color: "purple",
    tracks: ["Consulting", "Business Analyst"],
    tools: ["Python", "K-Means", "Regression", "Excel", "PowerPoint"],
    dataset: "Open Food Facts — openfoodfacts.org (2.5M products, open source)",
    datasetLink: "https://world.openfoodfacts.org/data",
    duration: "4 weeks",
    impact: "$18.4M base-case 5-year revenue projection",
    heroStat: "2",
    heroLabel: "uncontested white space categories identified",
    isLive: false,
    excelLink: "https://docs.google.com/spreadsheets/d/15t-pVQ6qjIE39Bs8HpB_-nitU30ptVGp/view",
    overview: "A mid-size natural foods brand is planning a national expansion from 3 to 12 markets. The CMO needs to know which categories to enter first, at what price points, and how to differentiate against entrenched private-label competition — all within a $2M launch budget.",
    objective: "Map the competitive landscape using clustering analysis, identify price-nutrition white spaces, model price elasticity for optimal entry pricing, and build a 3-scenario go-to-market financial model with break-even analysis.",
    problem: {
      title: "Expanding Blind in a Crowded Market",
      body: "The natural foods category is simultaneously the fastest-growing and most contested segment of US grocery. Entering 9 new markets with a $2M budget requires surgical precision — the wrong category choice or a pricing error can be the difference between an $18M trajectory and a premature exit."
    },
    methodology: [
      { step: "01", title: "Competitive Landscape Mapping", body: "Applied K-means clustering (k=6) to 500+ SKUs on price per unit, nutrition score, brand tier, and ingredient count. Visualized cluster centroids on price vs. nutrition 2x2 matrix." },
      { step: "02", title: "White Space Analysis", body: "Identified 2 underserved cluster gaps: mid-premium functional beverages ($3.50–$4.50) with high Nutri-Score, and high-protein nut butter at $6–$8 with clean-label positioning." },
      { step: "03", title: "Price Elasticity Modeling", body: "Ran OLS regression of unit volume on price, category, channel, and brand tier. Estimated price elasticity of -1.4 for functional beverages. Optimal entry price: $4.79." },
      { step: "04", title: "Go-to-Market Scenario Model", body: "Built 3-scenario Excel model: Premium, Focused, and Flanker. Modeled 5-year P&L, break-even, and capital efficiency per scenario. Base case: $18.4M Year-5 revenue, break-even Month 14." }
    ],
    results: [
      { metric: "White Spaces Found", value: "2 categories", context: "via clustering + gap analysis" },
      { metric: "Optimal Entry Price", value: "$4.79", context: "functional beverages" },
      { metric: "5-Year Revenue", value: "$18.4M", context: "premium scenario base case" },
      { metric: "Break-Even", value: "Month 14", context: "premium strategy" }
    ],
    keyLearning: "The clustering analysis made competitive white spaces geometrically visible. Once the price-nutrition map was rendered, the gap in mid-premium functional beverages was self-evident to every stakeholder — no further persuasion required.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://public.tableau.com",
    files: ["notebook_clustering.ipynb", "notebook_elasticity.ipynb", "gtm_scenario_model.xlsx", "market_entry_deck.pptx"]
  },
  {
    id: "nexusiq-supply-chain",
    number: "07",
    title: "NexusIQ — Supply Chain Intelligence Platform",
    subtitle: "Full-stack supply chain dashboard built and deployed live — real-time KPI tracking and operational analytics",
    industry: "Supply Chain / SaaS",
    color: "blue",
    tracks: ["Supply Chain", "Business Analyst"],
    tools: ["React", "Node.js", "REST APIs", "Recharts", "Tailwind CSS"],
    dataset: "Live deployed product",
    datasetLink: "https://nexus-iq-front.onrender.com",
    duration: "Ongoing",
    impact: "Live deployed full-stack product",
    heroStat: "Live",
    heroLabel: "deployed supply chain intelligence platform",
    isLive: true,
    liveLink: "https://nexus-iq-front.onrender.com",
    overview: "NexusIQ is a full-stack supply chain intelligence platform I designed and built end-to-end. It provides real-time visibility into supply chain KPIs, operational performance metrics, and data-driven insights for logistics and inventory decision-making — going beyond analysis to a deployed product.",
    objective: "Build a production-grade supply chain dashboard that translates raw operational data into executive-ready intelligence, covering inventory, fulfillment, and supplier performance in a unified real-time view.",
    problem: {
      title: "Supply Chain Visibility Gap",
      body: "Operations teams managing multi-node supply chains typically work across disconnected spreadsheets and ERP exports with no unified real-time view of performance. NexusIQ was built to solve that — bringing KPIs, trends, and alerts into one live, interactive dashboard accessible from anywhere."
    },
    methodology: [
      { step: "01", title: "Information Architecture", body: "Defined which KPIs matter most to supply chain managers and how to surface them at the right granularity. Designed the data model and dashboard hierarchy from first principles — not from a template." },
      { step: "02", title: "Frontend Engineering", body: "Built the full React frontend with interactive Recharts visualizations, filterable KPI views, responsive layout, and a clean operational UI designed for decision-making speed." },
      { step: "03", title: "Backend & API Layer", body: "Built a Node.js backend serving structured supply chain data via REST APIs — enabling real-time data refresh and the foundation for live ERP/WMS integration." },
      { step: "04", title: "Production Deployment", body: "Deployed frontend and backend independently on Render. Configured routing, environment variables, and CI/CD pipeline so every push to main triggers an automatic redeploy." }
    ],
    results: [
      { metric: "Status", value: "Live", context: "fully deployed product" },
      { metric: "Architecture", value: "Full-Stack", context: "React + Node.js" },
      { metric: "Domain", value: "Supply Chain", context: "real-time KPI intelligence" },
      { metric: "Deployment", value: "Render", context: "frontend + backend" }
    ],
    keyLearning: "Building a real product forces decisions that no analysis project does — what to show, what to hide, what to make interactive, and how to handle loading states and errors gracefully. Every product decision is also a UX decision and a data decision at the same time.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://nexus-iq-front.onrender.com",
    files: ["frontend/", "backend/", "README.md"]
  },
  {
    id: "strata-market-validation",
    number: "08",
    title: "STRATA — AI-Powered Market Validation Platform",
    subtitle: "Strategy intelligence platform running AI customer profiling, product gap scoring, and GTM positioning across 10+ frameworks",
    industry: "AI / Strategy / Product",
    color: "purple",
    tracks: ["Consulting", "Business Analyst"],
    tools: ["React", "LLM APIs", "Node.js", "Strategy Frameworks", "Product Design"],
    dataset: "Live deployed product",
    datasetLink: "https://strata-frontend.onrender.com",
    duration: "Ongoing",
    impact: "10+ live strategy frameworks, 3 stage modes",
    heroStat: "10+",
    heroLabel: "live strategy frameworks — BCG, Bass, JTBD, Porter's 5, VRIO",
    isLive: true,
    liveLink: "https://strata-frontend.onrender.com",
    overview: "STRATA is an AI-powered business strategy platform I designed and built that runs customer profiling, product gap analysis, and positioning strategy on a user's actual business. It supports Startup, Growth Stage, and Enterprise modes — each surfacing the frameworks most relevant to that business stage.",
    objective: "Replace expensive strategy consulting engagements with an AI platform that delivers the same analytical outputs — customer personas, PMF scoring, competitive positioning, GTM playbooks — in minutes, tailored to the user's specific product and market.",
    problem: {
      title: "Strategy Is Inaccessible Without a Consulting Firm",
      body: "Most early-stage and growth-stage companies cannot afford McKinsey or BCG. Yet the frameworks consultants use — Bass Diffusion, BCG matrix, VRIO scoring, Jobs-To-Be-Done — are well-established and teachable. STRATA wraps AI around these frameworks to democratize strategic analysis. The same outputs a strategy firm produces in 6 weeks, delivered in one session."
    },
    methodology: [
      { step: "01", title: "Framework Architecture", body: "Curated and implemented 10+ strategy frameworks: PMF validation (Sean Ellis 40% threshold), Bass Diffusion modelling with p/q coefficients, BCG Growth-Share Matrix, VRIO moat scoring, Porter's Five Forces, Jobs-To-Be-Done, Ansoff Growth Matrix, Unit Economics Engine (CAC/LTV/Payback), STP Segmentation, and Stakeholder Alignment Matrix." },
      { step: "02", title: "AI Integration", body: "Integrated LLM APIs to accept a user's product and market description as natural language input and generate framework-specific outputs — customer personas, product gap scores, competitive positioning guardrails — all contextualised to their specific business." },
      { step: "03", title: "Stage-Based Product Design", body: "Designed three distinct platform modes: Startup (pre-revenue to Series A, focused on PMF validation and ICP discovery), Growth Stage (Series A to pre-IPO, focused on chasm crossing and unit economics), and Enterprise ($30M+ organisations, focused on BCG portfolio analysis and board-ready positioning briefs)." },
      { step: "04", title: "Production Deployment", body: "Shipped as a live beta at strata-frontend.onrender.com with full landing page, stage selector, and working AI-powered analysis platform. Backend handles LLM API orchestration and framework computation." }
    ],
    results: [
      { metric: "Frameworks", value: "10+", context: "live and interactive" },
      { metric: "Stage Modes", value: "3", context: "Startup / Growth / Enterprise" },
      { metric: "Time to Insight", value: "~5 min", context: "vs weeks of consulting" },
      { metric: "Status", value: "Live Beta", context: "strata-frontend.onrender.com" }
    ],
    keyLearning: "The hardest part of STRATA was not the AI integration — it was knowing which frameworks to include and at which business stage they matter most. That required genuinely understanding what a strategy consultant does at each stage of company growth, knowledge that came directly from the MBA curriculum and the Trembo Innovation Sprint work.",
    githubLink: "https://github.com/parvbarot",
    tableauLink: "https://strata-frontend.onrender.com",
    files: ["frontend/", "backend/", "README.md"]
  }
];

export const skills = {
  analytics: [
    { name: "Python", level: 4, note: "pandas, scikit-learn, Prophet, SHAP, K-Means" },
    { name: "SQL", level: 4, note: "BigQuery, CTEs, window functions" },
    { name: "Tableau", level: 4, note: "Public dashboards, S&OP views" },
    { name: "Power BI", level: 3, note: "KPI dashboards, drilldowns" },
    { name: "Excel", level: 5, note: "Scenario models, Solver, Macros, openpyxl" },
    { name: "R", level: 2, note: "Statistical modeling" },
  ],
  supplyChain: [
    { name: "Demand Forecasting", level: 4, note: "ARIMA, Prophet, ensemble" },
    { name: "Inventory Optimization", level: 4, note: "EOQ, safety stock, reorder" },
    { name: "S&OP Execution", level: 3, note: "KPI dashboarding, planning cycles" },
    { name: "OTIF Analysis", level: 4, note: "Delivery performance, root cause" },
    { name: "Lean / Six Sigma", level: 3, note: "DMAIC, value stream mapping" },
    { name: "3PL & Vendor Mgmt", level: 3, note: "Sourcing, SLA, lead times" },
  ],
  strategy: [
    { name: "Hypothesis-Driven Problem Solving", level: 5, note: "MECE, issue trees" },
    { name: "Market Sizing (TAM/SAM/SOM)", level: 5, note: "Bass Diffusion, bottom-up" },
    { name: "Competitive Analysis", level: 4, note: "Benchmarking, Blue Ocean" },
    { name: "Financial Modeling", level: 4, note: "DCF, P&L, scenario analysis" },
    { name: "Stakeholder Communication", level: 5, note: "Exec briefs, slide decks" },
    { name: "A/B Testing", level: 4, note: "Campaign & product experiments" },
    { name: "Customer Segmentation", level: 4, note: "K-Means, LTV deciling, cohort analysis" },
    { name: "CRM Analytics", level: 4, note: "HubSpot, pipeline analysis, channel ROI" },
  ]
};

export const experience = [
  {
    role: "Marketing & Business Analytics Intern",
    company: "Aveyo Solar",
    period: "Jun 2025 – Sep 2025",
    location: "Corona, CA",
    highlights: [
      "Built interactive dashboard on 52,847 CRM records, segmenting by LTV decile, acquisition channel, and behavioral cohort to optimize $200K+ in marketing spend; applied K-Means clustering to surface 5 revenue-driving personas with 4.2× referral-channel ROI advantage over paid search",
      "Improved CTR by 22% and reduced cost-per-lead by $12 through data-driven creative testing across 3 digital channels",
      "Designed multi-variable customer segmentation models, lifting email conversion by 15%",
      "Built Python ETL pipeline saving 15 hrs/week in manual effort",
      "Shifted $40K in ad spend to higher-performing channels via LTV/CAC analysis"
    ]
  },
  {
    role: "Data Analytics Intern",
    company: "California Air Resources Board (CARB)",
    period: "Sep 2025 – Dec 2025",
    location: "Riverside, CA",
    highlights: [
      "Validated statewide datasets spanning millions of records using Python and SQL",
      "Supported $10M+ budget planning decisions through executive-ready analytical summaries",
      "Cut reporting turnaround by 2 weeks through cross-functional workflow automation",
      "Validated California's EMFAC emissions forecasting model against 5 federal benchmarks"
    ]
  }
];
