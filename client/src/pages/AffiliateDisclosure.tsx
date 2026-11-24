import ContentPage, { H2, List } from "@/components/ContentPage";

const EMAIL = "vantagepointediting@gmail.com";

export default function AffiliateDisclosure() {
  return (
    <ContentPage title="Affiliate Disclosure" updated="24 November 2026">
      <p>
        Some links on this website, in our course and in our community are affiliate links. If you buy
        something through one of them, we may earn a commission. It never costs you anything extra.
      </p>

      <H2>How we choose what to recommend</H2>
      <List>
        <li>
          We only recommend tools we actually use in our own client work or teach in the course, such as Adobe
          Premiere Pro.
        </li>
        <li>
          A commission never decides what we recommend. Where a cheaper or free option does the job, we say so.
        </li>
        <li>We mark affiliate links where they appear, so you always know.</li>
      </List>

      <H2>Questions</H2>
      <p>
        If you have a question about a recommendation, email{" "}
        <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-4">
          {EMAIL}
        </a>
        .
      </p>
    </ContentPage>
  );
}
