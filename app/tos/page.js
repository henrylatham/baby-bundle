import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://babytravel.us
// - Name: Baby Travel Bag
// - Contact information: henry@babytravel.us
// - Description: Find the right travel suggestions, tips & products to travel stress-free with your baby
// - Ownership: No purchases are directly made with our company.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://babytravel.ux/privacy-policy
// - Governing Law: United Kingdom
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: September 23, 2024

Welcome to Baby Travel Bag! By accessing or using our website (https://babytravel.us), you agree to comply with and be bound by the following Terms & Services. If you do not agree to these terms, please do not use our site.

1. Services Provided
Baby Travel Bag offers travel suggestions, tips, and product recommendations for traveling with your baby. We do not directly sell any products or services. All purchases or transactions are handled by third parties.

2. User Data Collection
We collect personal information such as your name, email address, and payment information when you interact with our site. For more details, please review our Privacy Policy.

3. Non-Personal Data Collection
We may collect non-personal data through cookies to improve your experience on our site. By using our website, you consent to the use of cookies.

4. Updates to Terms & Services
These terms may be updated periodically. When changes occur, we will notify users via email. Please check back regularly to stay informed of any updates.

5. Governing Law
These Terms & Services are governed by the laws of the United Kingdom. Any legal disputes will be resolved under UK law.

6. Contact Information
If you have any questions regarding these Terms & Services, please contact us at henry@babytravel.us.

By using this site, you acknowledge that you have read and agree to these Terms & Services.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
