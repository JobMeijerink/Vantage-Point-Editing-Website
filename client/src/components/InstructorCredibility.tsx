import IMG_7598 from "@assets/optimized/instructor-workspace.webp";
import IMG_7347 from "@assets/optimized/instructor-mountains.webp";
import IMG_beach from "@assets/optimized/instructor-beach.webp";
import ScrollReveal from "./ScrollReveal";

const YouTubeLogo = () => (
  <svg viewBox="0 0 28 20" className="inline-block h-[1.1em] w-auto align-[-0.2em] mx-0.5" aria-label="YouTube" role="img"><rect width="28" height="20" rx="5" fill="#FF0000"/><path d="M11 5.5v9l8-4.5z" fill="#fff"/></svg>
);

const stats = [
  { value: "500M+", label: <>Views Generated</>, emoji: "👁️", gradient: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-500/20" },
  { value: "3", label: <>YouTube <YouTubeLogo /> Channels Grown With 100K+ Subscribers</>, emoji: "📈", gradient: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/20" },
  { value: "15+", label: <>Countries Worked From</>, emoji: "🏝️", gradient: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/20" },
  { value: "5-10K$", label: <>Monthly Income</>, emoji: "💰", gradient: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/20" },
];

const photos = [
  { src: IMG_7347, alt: "Course instructor in mountains", pos: "object-[50%_50%]", testId: "img-instructor-mountains" },
  { src: IMG_7598, alt: "Course instructor workspace", pos: "object-center", testId: "img-instructor-workspace" },
  { src: IMG_beach, alt: "Course instructor at beach", pos: "object-[50%_55%]", testId: "img-instructor-beach" },
];

export default function InstructorCredibility() {
  return (
    <section className="py-12 lg:py-20 bg-background section-pattern relative">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-bright-white">
              Who's Teaching You?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Photos: 3 side by side */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {photos.map((photo) => (
                <div key={photo.testId} className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-chart-2 rounded-2xl opacity-20 blur-xl" />
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1067}
                    className={`relative w-full aspect-[3/4] rounded-xl border-2 border-primary/30 object-cover ${photo.pos}`}
                    data-testid={photo.testId}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Stats: 2x2, content laid out horizontally */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-3 lg:p-5 rounded-xl backdrop-blur-md bg-gradient-to-r ${stat.gradient} ${stat.border} border flex items-center gap-3`}
                  data-testid={`stat-${index}`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-[11px] lg:text-xs uppercase tracking-wider text-muted-foreground mt-0.5 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                  <span className="text-2xl lg:text-3xl flex-shrink-0" aria-hidden="true">{stat.emoji}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
