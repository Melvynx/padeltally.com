import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PadelTally",
  description: "Privacy policy for PadelTally - Learn how we protect your data in our padel scoring app",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: August 11, 2025
            </p>
          </div>

          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how PadelTally ("we," "our," or "us") collects, uses, and protects your personal information when you use our padel score tracking application.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect and store the following information:</p>
            
            <h3>2.1 Personal Information</h3>
            <ul>
              <li><strong>Email address</strong> - Required for account creation and support</li>
              <li><strong>Name</strong> - Optional, used for personalization</li>
            </ul>

            <h3>2.2 Match Data</h3>
            <ul>
              <li>Match scores and statistics</li>
              <li>Game duration and timestamps</li>
              <li>Match history and results</li>
              <li>Playing patterns and preferences</li>
            </ul>

            <h3>2.3 Device Information</h3>
            <ul>
              <li>Device type and model (iPhone, Apple Watch)</li>
              <li>Operating system version</li>
              <li>App version and usage analytics</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain the PadelTally service</li>
              <li>Store and sync your match data across devices</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve app functionality and user experience</li>
              <li>Send important updates about the service</li>
              <li>Analyze usage patterns to enhance features</li>
            </ul>

            <h2>4. Data Protection Commitment</h2>
            <p>
              <strong>We do NOT sell your data to third parties.</strong>
            </p>
            <p>
              Your padel match data and personal information are kept private and secure. We only use your data to provide and improve the PadelTally service.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We use the following third-party services that may receive limited user data strictly to provide their functionality:
            </p>

            <h3>5.1 Apple App Store & iCloud</h3>
            <ul>
              <li><strong>Purpose:</strong> App distribution and data sync</li>
              <li><strong>Data shared:</strong> App usage, device information</li>
              <li><strong>Privacy policy:</strong> <a href="https://www.apple.com/privacy/">Apple Privacy Policy</a></li>
            </ul>

            <h3>5.2 Stripe (if applicable)</h3>
            <ul>
              <li><strong>Purpose:</strong> Payment processing for premium features</li>
              <li><strong>Data shared:</strong> Email address, payment information</li>
              <li><strong>Privacy policy:</strong> <a href="https://stripe.com/privacy">Stripe Privacy Policy</a></li>
            </ul>

            <h3>5.3 Analytics Services</h3>
            <ul>
              <li><strong>Purpose:</strong> App performance and usage analytics</li>
              <li><strong>Data shared:</strong> Anonymized usage patterns, device information</li>
              <li><strong>Note:</strong> All analytics data is aggregated and anonymized</li>
            </ul>

            <h2>6. Data Storage and Security</h2>
            <h3>6.1 Local Storage</h3>
            <p>
              Your match data is primarily stored locally on your device to ensure:
            </p>
            <ul>
              <li>Offline functionality</li>
              <li>Fast access and performance</li>
              <li>Data privacy and control</li>
            </ul>

            <h3>6.2 Cloud Backup</h3>
            <p>
              We may store encrypted backups of your data to:
            </p>
            <ul>
              <li>Enable data sync between devices</li>
              <li>Prevent data loss</li>
              <li>Facilitate account recovery</li>
            </ul>

            <h3>6.3 Security Measures</h3>
            <ul>
              <li>Data encryption in transit and at rest</li>
              <li>Secure authentication protocols</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal data</li>
            </ul>

            <h2>7. Your Privacy Rights</h2>
            <h3>7.1 Data Access and Control</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Update or correct your information</li>
              <li>Export your match data</li>
              <li>Delete your account and data</li>
            </ul>

            <h3>7.2 Data Deletion</h3>
            <p>
              You can request complete deletion of your data by:
            </p>
            <ul>
              <li>Using the "Delete Account" option in the app settings</li>
              <li>Contacting us at support@padeltally.app</li>
            </ul>
            <p>
              We will permanently delete your data within 30 days of your request.
            </p>

            <h2>8. International Users</h2>
            <h3>8.1 Global Availability</h3>
            <p>
              PadelTally is available worldwide. By using the app, you consent to the transfer and processing of your data in accordance with this Privacy Policy.
            </p>

            <h3>8.2 European Users (GDPR)</h3>
            <p>
              For users in the European Economic Area:
            </p>
            <ul>
              <li>We process data based on legitimate interests and user consent</li>
              <li>You have additional rights under GDPR including data portability</li>
              <li>You may contact us for any GDPR-related requests</li>
              <li>Data processing occurs primarily on your device and in secure cloud infrastructure</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>
              PadelTally is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy in the app</li>
              <li>Sending you a notification</li>
              <li>Updating the "Last updated" date</li>
            </ul>
            <p>
              Your continued use of PadelTally after any changes indicates your acceptance of the updated Privacy Policy.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or need to exercise your privacy rights, please contact us:
            </p>
            <p>
              📧 <strong>support@padeltally.app</strong>
            </p>
            <p>
              We will respond to your inquiry within 48 hours.
            </p>

            <h2>12. Data Protection Officer</h2>
            <p>
              For privacy-related inquiries or concerns, you can reach our data protection team at the email address above.
            </p>

            <hr className="my-8" />
            
            <p className="text-sm text-muted-foreground">
              This Privacy Policy is effective as of the date listed above and applies to all users of PadelTally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}