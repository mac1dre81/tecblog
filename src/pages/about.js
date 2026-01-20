import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About TecMarketa" description="Learn about TecMarketa and our mission">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About TecMarketa</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            TecMarketa exists to help non-technical makers automate their business tasks 
            without learning to code. We believe everyone deserves access to powerful automation tools.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Zapier tutorials and automation templates</li>
            <li>Make (formerly Integromat) workflows</li>
            <li>ChatGPT and AI tool integrations</li>
            <li>Airtable database automation</li>
            <li>Email and marketing automation</li>
            <li>Cybersecurity automation for teams</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">
            Have a question or suggestion? Email us at{' '}
            <a href="mailto:hello@tecmarketa.com" className="text-blue-600 font-bold">
              hello@tecmarketa.com
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
