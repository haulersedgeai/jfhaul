import type { Metadata } from "next";
import { business } from "@/data/site";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${business.legalName} — junk removal service in Birmingham, AL.`,
  alternates: { canonical: `${business.siteUrl}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage kicker="Terms" title="Terms of Service" effectiveDate="July 1, 2026">
      <p>
        These Terms of Service (“Terms”) govern your use of our website ({business.siteUrl}) and the junk-removal services provided by {business.legalName} (“J&F Haul,” “we,” “us”). By using the site or booking a job with us, you agree to these Terms.
      </p>

      <h2>Our services</h2>
      <p>
        We provide junk removal, furniture and appliance removal, mattress removal, hot tub removal, shed removal, cleanouts (property, house, garage, estate, hoarder, eviction, apartment, office), and valet trash service in and around Birmingham, Alabama.
      </p>

      <h2>Quotes and estimates</h2>
      <p>
        Any pricing given over the phone, by text, or through our online form is a good-faith <strong>estimate</strong> based on the information you provide. Final pricing is confirmed on-site after our crew sees the actual load. We’ll tell you the final price <strong>before</strong> we start work — if you don’t want to proceed, you don’t owe us anything.
      </p>

      <h2>Scheduling</h2>
      <ul>
        <li>Same-day service is offered when our schedule allows.</li>
        <li>Arrival windows are estimates; we’ll communicate updates if we’re running behind.</li>
        <li>If you need to cancel, please let us know as soon as possible.</li>
      </ul>

      <h2>Payment</h2>
      <p>
        Payment is due upon completion of the job unless we agree otherwise in writing. We accept common payment methods; specific options will be confirmed when you book.
      </p>

      <h2>What we can’t take</h2>
      <p>
        For safety and legal reasons, we do not haul hazardous materials — including but not limited to paint solvents, oils, gasoline, asbestos, medical waste, or ammunition. If you have items you’re unsure about, ask us before we arrive.
      </p>

      <h2>Access and property</h2>
      <p>
        You represent that you have the right to have the items removed and to grant us access to the property. We take reasonable care with your home, driveway, floors, and landscaping. Please point out anything fragile or restricted before we start.
      </p>

      <h2>Donation and disposal</h2>
      <p>
        Where possible we donate usable items to local charities and recycle metal, cardboard, and electronics. Once items leave your property they become our responsibility for lawful disposal.
      </p>

      <h2>Liability</h2>
      <p>
        We are licensed and insured. Our liability for any claim relating to a job is limited to the amount you paid for that job, except where a higher limit is required by applicable law. We are not liable for indirect, incidental, or consequential damages.
      </p>

      <h2>Website use</h2>
      <p>
        The website is provided “as is.” Content is for informational purposes; we may update it at any time. Don’t use the site to attempt to compromise its security, scrape at unreasonable volume, or infringe intellectual property.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Alabama, without regard to conflict-of-law rules. Any disputes will be resolved in the state or federal courts located in Jefferson County, Alabama.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The “Effective” date at the top will reflect the most recent revision. Continued use of the site or our services after changes means you accept the new Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Reach out at <a href={business.emailHref}>{business.email}</a> or {business.phone}.
      </p>
    </LegalPage>
  );
}
