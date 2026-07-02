import type { Metadata } from "next";
import { business } from "@/data/site";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${business.legalName} — how we collect and use information from quote requests and contact forms.`,
  alternates: { canonical: `${business.siteUrl}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Privacy" title="Privacy Policy" effectiveDate="July 1, 2026">
      <p>
        {business.legalName} (“we,” “us,” or “our”) respects your privacy. This policy explains what
        information we collect through our website ({business.siteUrl}), how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <p>When you request a quote or contact us we may collect:</p>
      <ul>
        <li>Your name.</li>
        <li>Your phone number.</li>
        <li>Your email address (optional).</li>
        <li>Your address or the neighborhood where you need service.</li>
        <li>The service you’re interested in and a message describing your job.</li>
      </ul>
      <p>
        Our website may also log basic technical information (IP address, browser type, timestamps, pages viewed) for security, analytics, and to keep the site working properly.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your quote request or question.</li>
        <li>To schedule and perform the junk-removal service you request.</li>
        <li>To send you follow-up messages related to your job (confirmation, arrival window, invoice).</li>
        <li>To improve our website and services.</li>
        <li>To comply with applicable law.</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>
        We do <strong>not</strong> sell or rent your information. We share it only with:
      </p>
      <ul>
        <li>Service providers that help us operate the website and send email (for example, our hosting provider and transactional email service).</li>
        <li>Law enforcement or government authorities when required by law.</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        We retain quote requests and job records for as long as needed to provide and support our services, and to meet tax, accounting, or legal requirements. If you’d like your data deleted, contact us and we’ll do so unless we’re legally required to keep it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        Our website may use cookies or similar technologies for basic analytics and performance. You can control cookies through your browser settings. Disabling cookies may affect how some features work.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our site may link to third-party sites (for example, our social media pages). We are not responsible for the privacy practices of those sites — review their policies before sharing information with them.
      </p>

      <h2>Children</h2>
      <p>
        Our services are directed to adults. We do not knowingly collect personal information from children under 13.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can ask us what information we have about you.</li>
        <li>You can ask us to correct or delete it.</li>
        <li>You can opt out of non-essential emails at any time.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach out at{" "}
        <a href={business.emailHref}>{business.email}</a> or {business.phone}.
      </p>
    </LegalPage>
  );
}
