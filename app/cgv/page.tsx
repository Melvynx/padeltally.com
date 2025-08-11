import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - PadelTally",
  description: "Terms of service for PadelTally - The fastest padel scoring app for Apple Watch",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: August 11, 2025
            </p>
          </div>

          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using PadelTally ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>

            <h2>2. Service Description</h2>
            <p>
              PadelTally is a padel score tracking application designed for Apple Watch and iPhone that allows users to:
            </p>
            <ul>
              <li>Track padel match scores in real-time</li>
              <li>Record match history and statistics</li>
              <li>Export and share match results</li>
              <li>Use one-tap scoring with haptic feedback</li>
              <li>Automatically detect game and set progressions</li>
            </ul>

            <h2>3. User Accounts</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              You may be required to create an account to use certain features of the App. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h3>3.2 Account Eligibility</h3>
            <p>
              You must be at least 13 years old to use this App. By using the App, you represent and warrant that you meet this age requirement.
            </p>

            <h2>4. Acceptable Use</h2>
            <h3>4.1 Permitted Uses</h3>
            <p>You may use PadelTally to:</p>
            <ul>
              <li>Track your padel matches and scores</li>
              <li>Store and review your match history</li>
              <li>Share match results with other users</li>
              <li>Use the App for personal, non-commercial purposes</li>
            </ul>

            <h3>4.2 Prohibited Actions</h3>
            <p>You may not:</p>
            <ul>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer, decompile, or hack the App</li>
              <li>Upload or share inappropriate, offensive, or harmful content</li>
              <li>Interfere with the App's functionality or security features</li>
              <li>Use the App to harass, abuse, or harm another person</li>
              <li>Violate any local, state, national, or international law</li>
            </ul>

            <h2>5. Service Availability</h2>
            <p>
              We strive to keep PadelTally available at all times, but we cannot guarantee uninterrupted access. The App may be temporarily unavailable due to:
            </p>
            <ul>
              <li>Maintenance and updates</li>
              <li>Technical difficulties</li>
              <li>Factors beyond our control</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue the App at any time without prior notice.
            </p>

            <h2>6. Data and Privacy</h2>
            <p>
              Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the App, you consent to our collection and use of your data as described in the Privacy Policy.
            </p>

            <h2>7. Intellectual Property</h2>
            <h3>7.1 Our Rights</h3>
            <p>
              PadelTally and all related content, features, and functionality are owned by us and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3>7.2 Your Content</h3>
            <p>
              You retain ownership of any match data, statistics, or other content you create using the App. By using the App, you grant us a limited license to store, process, and display your content solely for the purpose of providing the service.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION ARISING OUT OF OR RELATING TO YOUR USE OF THE APP.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE PAID FOR THE APP IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>

            <h2>9. Termination</h2>
            <h3>9.1 By You</h3>
            <p>
              You may stop using the App at any time by deleting it from your device(s).
            </p>

            <h3>9.2 By Us</h3>
            <p>
              We may terminate or suspend your access to the App immediately, without prior notice, if you:
            </p>
            <ul>
              <li>Violate these Terms</li>
              <li>Use the App inappropriately</li>
              <li>Engage in fraudulent or harmful activity</li>
            </ul>

            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated Terms in the App</li>
              <li>Sending you a notification through the App or email</li>
              <li>Updating the "Last updated" date at the top of these Terms</li>
            </ul>
            <p>
              Your continued use of the App after any changes constitutes acceptance of the new Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the United States and the state where our business is located, without regard to conflict of law principles.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> support@padeltally.app
            </p>
            <p>
              We will respond to your inquiry within 48 hours.
            </p>

            <hr className="my-8" />
            
            <p className="text-sm text-muted-foreground">
              By using PadelTally, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}