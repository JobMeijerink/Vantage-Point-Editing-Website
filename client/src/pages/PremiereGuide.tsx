import ContentPage, { H2, H3, List, Callout } from "@/components/ContentPage";

const SKOOL_URL = "https://www.skool.com/vantage-point-editing-6309";

export default function PremiereGuide() {
  return (
    <ContentPage
      eyebrow="Free guide"
      title="Getting started with Adobe Premiere Pro"
      intro={
        <p>
          The setup and color basics we teach every new student, free. This guide covers why we edit in
          Premiere Pro, what your computer needs, how to get set up, and how to deal with the three kinds of
          footage clients will send you.
        </p>
      }
    >
      <H2>1. Why Premiere Pro</H2>
      <p>
        Every editor in our community works in Adobe Premiere Pro. We have tried the alternatives, and for
        freelance client work Premiere wins for three reasons:
      </p>
      <List ordered>
        <li>
          <strong>Clients expect it.</strong> Agencies and creators share projects across teams. Premiere keeps
          everyone on the same page, so nobody has to convert or rebuild a timeline.
        </li>
        <li>
          <strong>It's the industry standard.</strong> No client will push you toward a different program, and
          the skills transfer to every job you take.
        </li>
        <li>
          <strong>It connects to the rest of your workflow.</strong> Media Encoder, After Effects, Photoshop and
          Adobe's built-in AI tools all work with the same project. Don't save a few dollars on a lighter
          editor and limit what you can deliver.
        </li>
      </List>
      <p>
        "Free" editors are rarely free once you need their full feature set, so compare the real cost before
        you choose.
      </p>

      <H2>2. Check your computer first</H2>
      <List>
        <li>
          <strong>Mac:</strong> runs Premiere the smoothest. Any recent MacBook or Mac with Apple silicon is a
          great editing machine.
        </li>
        <li>
          <strong>Windows:</strong> works well too. Make sure you have at least 16 GB of RAM. More is smoother,
          especially with 4K footage.
        </li>
        <li>
          <strong>Storage:</strong> keep enough free space for footage. Some phone formats are huge (see section
          4).
        </li>
      </List>
      <p>
        Always check Adobe's current{" "}
        <a
          href="https://helpx.adobe.com/premiere-pro/system-requirements.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          Premiere Pro system requirements
        </a>{" "}
        before you install.
      </p>

      <H2>3. Install and set up</H2>
      <List ordered>
        <li>
          <strong>Start with the free trial.</strong> Adobe offers a free trial of Premiere Pro on{" "}
          <a
            href="https://www.adobe.com/products/premiere.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            adobe.com
          </a>
          . Use it to follow along with your first edits before you commit to a plan. Check Adobe's site for
          current plans and offers.
        </li>
        <li>
          <strong>Install Media Encoder at the same time.</strong> You'll use it to export and to batch-render in
          the background while you keep editing.
        </li>
        <li>
          <strong>Learn the keyboard shortcuts early.</strong> Shortcuts are the biggest speed difference between
          beginners and pros. Premiere lets you load a custom shortcut file under{" "}
          <em>Premiere Pro → Keyboard Shortcuts</em> (Mac) or <em>Edit → Keyboard Shortcuts</em> (Windows).
          Members get my personal shortcut file.
        </li>
      </List>

      <H2>4. The three kinds of footage you'll receive</H2>
      <p>The amount of color work depends on how the footage was shot:</p>
      <List ordered>
        <li>
          <strong>Standard (Rec.709).</strong> Color is already "baked in". Most phone footage looks like this.
          Least flexible, but ready to use.
        </li>
        <li>
          <strong>Log.</strong> Looks flat and grey on purpose, so it keeps more detail. It needs a LUT before it
          looks normal.
        </li>
        <li>
          <strong>RAW.</strong> The most flexible, and the most work.
        </li>
      </List>
      <Callout>
        <p>
          <strong>Watch out for iPhone ProRes Log.</strong> iPhone 13 Pro and newer can shoot ProRes Log. It looks
          great after grading, but the files are huge: 20 seconds can easily take 1 GB or more. Ask before the
          client sends it, so neither of you is surprised by the upload.
        </p>
      </Callout>

      <H2>5. Technical LUTs vs. creative LUTs</H2>
      <H3>Technical LUT</H3>
      <p>
        Converts Log footage to normal (Rec.709) color. This isn't a creative choice; it's your starting point.
        Apply it at 100%.
      </p>
      <H3>Creative LUT</H3>
      <p>
        A style on top of footage that's already in a standard color space. Apply it only as strongly as looks
        right, and lower the intensity until it stops fighting the image.
      </p>

      <H2>6. Not sure which LUT you need?</H2>
      <List ordered>
        <li>
          <strong>Ask who shot it:</strong> "What camera and picture profile was this shot on?"
        </li>
        <li>
          <strong>Check the manufacturer:</strong> search for <em>[camera] + [profile] + "LUT download"</em>. Most
          camera brands publish official technical LUTs for free.
        </li>
        <li>
          <strong>Ask an AI assistant</strong> to narrow it down: "What LUT do I need for [camera] shot in
          [profile]?"
        </li>
        <li>
          <strong>Fall back to Premiere:</strong> <em>Lumetri Color → Creative → Look</em>.
        </li>
      </List>
      <p>
        Premiere's Auto Color and Color Match features can also get you most of the way quickly. No tool
        replaces your own trained eye for the last 10–20%, but they get you up and running.
      </p>

      <H2>Want the rest?</H2>
      <p>
        This guide is the first lesson of the Vantage Point Editing course. The full program takes you from your
        first edit in Premiere Pro to your first paying client: editing technique, practice sessions on real
        footage with personal feedback, client acquisition, and AI in your workflow.
      </p>
      <p>
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Join the free community
        </a>
      </p>
    </ContentPage>
  );
}
