import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto bg-zinc-900/70 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms and Services</h1>
          <p className="text-zinc-400 mb-8">Last Updated: 04 April 2025</p>

          <div className="prose prose-invert max-w-none">
            <p className="mb-6">
              Welcome to Khalil Graphics (www.khalilgraphics.com). By accessing or using our website and services, you
              agree to comply with the following terms and conditions.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Services</h2>
            <p className="mb-3">
              Khalil Graphics provides graphic design and related services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Logo and branding design</li>
              <li>Social media graphics</li>
              <li>Print design (brochures, business cards, etc.)</li>
              <li>Digital content creation</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Payment & Pricing</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Prices for our services are subject to change without prior notice.</li>
              <li>Full or partial payment may be required before project commencement.</li>
              <li>Payments are non-refundable once the project has started, unless stated otherwise.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                All designs created by Khalil Graphics remain our intellectual property until full payment is received.
              </li>
              <li>Clients are granted the right to use the final designs for personal or business purposes.</li>
              <li>
                Khalil Graphics reserves the right to showcase completed projects in our portfolio unless otherwise
                agreed upon.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Revisions & Modifications</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>The number of revisions allowed will be specified in the project agreement.</li>
              <li>Additional revisions beyond the agreed limit may incur extra charges.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Clients must provide accurate and complete information necessary for project completion.</li>
              <li>Any delay in response from the client may result in project timeline adjustments.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Khalil Graphics is not responsible for any damages, losses, or legal issues arising from the use of our
                designs.
              </li>
              <li>We do not guarantee the success of marketing or branding outcomes based on our designs.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Termination of Services</h2>
            <p className="mb-6">
              Khalil Graphics reserves the right to refuse or terminate services if a client violates our terms or
              engages in unethical behavior.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Governing Law</h2>
            <p className="mb-6">These terms shall be governed and interpreted according to the laws of Bangladesh.</p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-3">If you have any questions about our Terms and Services, please contact us:</p>
            <p className="mb-2">📧 Email: contact@khalilgraphics.com</p>
            <p>📍 Address: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  )
}
