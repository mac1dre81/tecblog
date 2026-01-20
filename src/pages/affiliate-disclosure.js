import Layout from '../components/Layout';

export default function AffiliateDisclosure() {
  return (
    <Layout title="Affiliate Disclosure" description="TecMarketa Affiliate Disclosure">
      <div className="max-w-3xl prose prose-lg">
        <h1>Affiliate Disclosure</h1>

        <p>
          TecMarketa participates in affiliate marketing programs. When you click on product 
          links and make a purchase, we may earn a commission at no extra cost to you.
        </p>

        <h2>Programs We're Part Of:</h2>
        <ul>
          <li><strong>Zapier:</strong> Affiliate commission on paid plans</li>
          <li><strong>Make:</strong> Affiliate commission on paid plans</li>
          <li><strong>Airtable:</strong> Affiliate commission on paid plans</li>
          <li><strong>OpenAI/ChatGPT:</strong> Referral commission on subscriptions</li>
          <li><strong>Amazon Associates:</strong> Commission on Amazon purchases</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          We only recommend products we genuinely use and believe will help our readers. 
          Our recommendations are based on real experience, not commission rates.
        </p>

        <h2>Questions?</h2>
        <p>Email: hello@tecmarketa.com</p>
      </div>
    </Layout>
  );
}
