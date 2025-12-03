import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto bg-zinc-900/70 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-zinc-400 mb-8">Last Updated: 04 April 2025</p>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6">
              At Khalil Graphics (www.khalilgraphics.com), we respect your privacy and are committed to protecting your
              personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Personal Information:</strong> When you contact us or place an order, we may collect your name,
                email, phone number, and billing details.
              </li>
              <li>
                <strong>Usage Data:</strong> We may gather information about how you interact with our website,
                including IP address, browser type, and device information.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the collected data to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide and improve our design services.</li>
              <li>Process payments and send invoices.</li>
              <li>Respond to inquiries and customer support requests.</li>
              <li>Improve website functionality and user experience.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Data Protection</h2>
            <p className="mb-6">
              We implement security measures to protect your personal information. However, no method of online data
              transmission is 100% secure.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-6">
              We may use cookies to enhance your browsing experience. You can disable cookies through your browser
              settings.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
            <p className="mb-6">
              We do not sell or share your personal information with third parties, except when necessary for service
              fulfillment (e.g., payment processors).
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of marketing emails.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-3">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mb-2">📧 Email: contact@khalilgraphics.com</p>
            <p>📍 Address: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  )
}
