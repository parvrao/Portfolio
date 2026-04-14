{
    id: "customer-segmentation",
    number: "08",
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
      body: "The marketing team tracked cost-per-lead — a metric that rewarded Meta Ads for volume while masking a 18% close rate and below-average LTV. Meanwhile, the referral channel was chronically underfunded despite a 41% close rate and average LTV 1.6× the company mean. Without a channel-level LTV view, every dollar of budget reallocation was guesswork."
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
