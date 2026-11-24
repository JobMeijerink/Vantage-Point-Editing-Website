import { useEffect, type ReactNode } from "react";
import Footer from "@/components/Footer";

interface ContentPageProps {
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  updated?: string;
  children: ReactNode;
}

/**
 * Simple long-form page layout used for the free guide and the legal pages.
 * Matches the landing page's dark theme and typography.
 */
export default function ContentPage({ title, eyebrow, intro, updated, children }: ContentPageProps) {
  useEffect(() => {
    document.title = `${title} | Vantage Point Editing`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <a href="/" className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vantage Point Editing
          </a>
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to home
          </a>
        </div>
      </header>

      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{eyebrow}</p>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">{title}</h1>
          {updated && <p className="text-sm text-muted-foreground mb-6">Last updated: {updated}</p>}
          {intro && <div className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">{intro}</div>}
          <div className="content-prose space-y-6 text-base lg:text-lg leading-relaxed text-foreground/90">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl lg:text-3xl font-bold text-white pt-6">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-white pt-2">{children}</h3>;
}

export function List({ children, ordered = false }: { children: ReactNode; ordered?: boolean }) {
  const cls = `space-y-2 pl-6 ${ordered ? "list-decimal" : "list-disc"} marker:text-primary`;
  return ordered ? <ol className={cls}>{children}</ol> : <ul className={cls}>{children}</ul>;
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-primary/30 bg-primary/10 p-5 lg:p-6">{children}</div>
  );
}
