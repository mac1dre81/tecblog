import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy" description="TecMarketa Privacy Policy">
      <div className="max-w-3xl prose prose-lg">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: January 19, 2025</strong></p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>Email address (if you subscribe to our newsletter)</li>
          <li>Website analytics data (pages viewed, time on site, referral source)</li>
          <li>Browser and device information</li>
        </ul>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>Send weekly automation tutorials</li>
          <li>Improve our website and content</li>
          <li>Track which tutorials are most popular</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <ul>
          <li><strong>Google Analytics:</strong> Tracks website usage (anonymized)</li>
          <li><strong>Substack:</strong> Manages our email newsletter</li>
          <li><strong>Affiliate Links:</strong> Zapier, Make, Airtable may track clicks</li>
        </ul>

        <h2>4. Your Rights (GDPR/CCPA)</h2>
        <p>You can:</p>
        <ul>
          <li>Unsubscribe from emails anytime</li>
          <li>Request your data be deleted</li>
          <li>Opt-out of analytics tracking</li>
        </ul>

        <h2>5. Contact</h2>
        <p>Email: hello@tecmarketa.com</p>
      </div>
    </Layout>
  );
}
