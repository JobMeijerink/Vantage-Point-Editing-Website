import ContentPage, { H2, List } from "@/components/ContentPage";

const EMAIL = "vantagepointediting@gmail.com";

export default function Privacy() {
  return (
    <ContentPage title="Privacy Policy" updated="24 November 2026">
      <p>
        This policy explains what personal data Vantage Point Editing ("we", "us") handles when you visit
        vantagepointediting.com, and what your rights are. We keep it short because we collect very little.
      </p>

      <H2>Who we are</H2>
      <p>
        Vantage Point Editing is run by Job Meijerink. For any privacy question or request, email{" "}
        <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-4">
          {EMAIL}
        </a>
        .
      </p>

      <H2>What we collect on this website</H2>
      <List>
        <li>
          <strong>No accounts, forms or tracking cookies.</strong> This website has no sign-up form, does not set
          tracking or advertising cookies, and does not run analytics scripts.
        </li>
        <li>
          <strong>Hosting logs.</strong> Our host, Vercel, processes technical data such as your IP address and
          browser type to deliver the site and keep it secure.
        </li>
        <li>
          <strong>Fonts.</strong> Our fonts load from Google Fonts, so your browser connects to Google's servers,
          which receive your IP address.
        </li>
        <li>
          <strong>Email.</strong> If you email us, we use your email address and message only to reply to you.
        </li>
      </List>

      <H2>The course and community</H2>
      <p>
        Our course and community run on Skool (skool.com). When you join, sign up or pay there, Skool processes
        your data under its own privacy policy. We see the profile information you share with the community and
        use it only to run the course and support you.
      </p>

      <H2>Links to other websites</H2>
      <p>
        We link to tools we use and recommend, such as Adobe Premiere Pro. Some of these links may be affiliate
        links (see our{" "}
        <a href="/affiliate-disclosure" className="text-primary underline underline-offset-4">
          affiliate disclosure
        </a>
        ). When you click one, the other website may set its own cookies to record that you came from us. Their
        privacy policies apply on their websites.
      </p>

      <H2>Why we use your data</H2>
      <p>
        We use the data above to deliver and secure this website, to answer your messages, and to run the
        course. We do not sell your personal data.
      </p>

      <H2>How long we keep it</H2>
      <p>
        We keep emails only as long as we need them to help you. Hosting logs are kept by Vercel under its own
        retention rules.
      </p>

      <H2>Your rights</H2>
      <p>
        Under the GDPR you can ask to see, correct or delete your personal data, object to its use, or ask for a
        copy. Email us and we'll respond within one month. You can also complain to your local data protection
        authority (in the Netherlands, the Autoriteit Persoonsgegevens).
      </p>

      <H2>Changes</H2>
      <p>If we change how we handle data, we'll update this page and the date at the top.</p>
    </ContentPage>
  );
}
