import profilePhoto from "../assets/profile.jpg";

const iconButtonClass =
  "inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all hover:scale-105 hover:shadow-lg md:h-14 md:w-14";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="relative shrink-0 overflow-hidden pt-6 pb-4 md:pt-10 md:pb-6">
      <div className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="flex-1 space-y-4 text-center md:space-y-5 md:text-left">
            <div className="inline-block rounded-full bg-primary-container px-4 py-1.5 font-body text-sm font-semibold tracking-wide text-on-primary-container">
              Software Engineering Intern @ Verkada
            </div>

            <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight text-on-surface md:text-[52px] md:leading-[60px]">
              Hi, I&apos;m{" "}
              <span className="text-primary">Jefferson Wu</span> <br /> I build
              full-stack apps.
            </h1>

            <p className="mx-auto max-w-xl font-body text-lg leading-7 text-on-surface-variant md:mx-0 md:text-xl md:leading-8">
              I&apos;m a CS and Economics student at Northwestern University. I'm a 3x hackathon winner passionate about productivity and financial technology.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-1 md:justify-start md:pt-2">
              <a
                href="https://github.com/JeffersonWu25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`${iconButtonClass} bg-primary text-on-primary`}
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jwu6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`${iconButtonClass} bg-surface-container-high text-on-surface`}
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:jwu6@u.northwestern.edu"
                aria-label="Email jwu6@u.northwestern.edu"
                className={`${iconButtonClass} bg-surface-container-high text-on-surface`}
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          <div className="hidden w-full max-w-[220px] shrink-0 md:block lg:max-w-[260px]">
            <div className="group relative">
              <div className="absolute inset-0 scale-105 rotate-3 rounded-xl bg-primary-container transition-transform duration-500 group-hover:rotate-1" />
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Jefferson Wu"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
