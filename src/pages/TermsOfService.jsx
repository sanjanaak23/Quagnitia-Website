import React, { useEffect } from "react";
import { useLayoutContext } from "./Layout";

export default function TermsOfService() {
  const { theme } = useLayoutContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | Quagnitia Systems Pvt. Ltd.";
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
        Terms of Service
      </h1>
      
      <div className="space-y-8" style={{ color: theme.muted }}>
        <section>
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Quagnitia Systems Pvt. Ltd. ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>1. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Quagnitia Systems Pvt. Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Quagnitia Systems Pvt. Ltd.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>2. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Quagnitia Systems Pvt. Ltd.
          </p>
          <p>
            Quagnitia Systems Pvt. Ltd. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Quagnitia Systems Pvt. Ltd. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>3. Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>4. Limitation of Liability</h2>
          <p>
            In no event shall Quagnitia Systems Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>5. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="mt-4">
             <p className="font-semibold" style={{ color: theme.text }}>Quagnitia Systems Pvt. Ltd.</p>
             <p>Email: info@quagnitia.co.in</p>
          </div>
        </section>
      </div>
    </div>
  );
}
