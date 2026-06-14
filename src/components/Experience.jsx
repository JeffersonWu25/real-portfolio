import { education, experience, skills } from "../data/projects";

function TimelineItem({ item, isLast }) {
  return (
    <div
      className={`relative pl-12 before:absolute before:top-2 before:left-0 before:h-4 before:w-4 before:rounded-full ${
        item.active ? "before:bg-primary" : "before:bg-outline-variant"
      } ${!isLast ? "after:absolute after:top-6 after:bottom-[-48px] after:left-2 after:w-px after:bg-outline-variant/30" : ""}`}
    >
      <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <h4 className="font-display text-[32px] font-medium leading-10 text-surface">
          {item.title}
        </h4>
        <span
          className={`w-fit rounded px-3 py-1 font-body text-sm font-semibold tracking-wide ${
            item.active
              ? "bg-primary/10 text-primary"
              : "text-surface/50"
          }`}
        >
          {item.period}
        </span>
      </div>
      <p className="mb-4 font-display text-base font-medium text-surface/80">
        {item.company}
      </p>
      <ul className="max-w-xl list-disc space-y-2 pl-5 font-body text-base leading-6 text-surface-variant">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-slate py-[var(--spacing-section-gap)] text-neutral"
    >
      <div className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <div className="space-y-4 rounded-2xl border border-surface-container-highest/10 bg-white/5 p-8">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <h3 className="font-display text-[32px] font-medium text-peach">
                  {education.school}
                </h3>
                <span className="w-fit font-body text-sm font-semibold tracking-wide text-surface/50">
                  {education.period}
                </span>
              </div>
              <p className="font-display text-base font-medium text-surface/80">
                {education.degree} · GPA {education.gpa} · {education.location}
              </p>
              <div className="space-y-3">
                <p className="font-body text-sm font-semibold tracking-wide text-surface/60 uppercase">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-surface-variant/20 bg-white/10 px-3 py-1 font-body text-sm text-neutral"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-body text-sm font-semibold tracking-wide text-surface/60 uppercase">
                  Awards &amp; Organizations
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.awards.map((award) => (
                    <span
                      key={award}
                      className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 font-body text-sm font-semibold text-peach"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 rounded-2xl border border-surface-container-highest/10 bg-white/5 p-8">
              <h3 className="font-display text-[32px] font-medium text-peach">
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-surface-variant/20 bg-white/10 px-3 py-1 font-body text-sm font-semibold tracking-wide text-neutral"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-16 lg:col-span-7">
            <div className="flex items-center justify-between">
              <span className="font-body text-sm font-semibold tracking-[0.3em] text-outline uppercase">
                History
              </span>
              <div className="mx-8 h-px flex-1 bg-outline-variant/20" />
            </div>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  isLast={index === experience.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
