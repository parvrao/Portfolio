import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form endpoint
// In production: replace console.log with nodemailer or a service like Resend/SendGrid
app.post('/api/contact', (req, res) => {
  const { name, email, message, role } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Log submission (replace with email service in production)
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Interested in: ${role || 'not specified'}`);
  console.log(`Message: ${message}`);
  console.log('-----------------------------------');

  res.json({ success: true, message: 'Message received. Parv will be in touch shortly.' });
});

// Projects summary endpoint (optional — frontend reads from static data directly)
app.get('/api/projects', (req, res) => {
  res.json({
    total: 7,
    tracks: ['Supply Chain', 'Business Analyst', 'Consulting'],
    liveProjects: ['nexusiq-supply-chain', 'strata-market-validation'],
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio backend running on port ${PORT}`);
});
