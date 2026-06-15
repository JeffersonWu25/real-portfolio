import { useState, useCallback, useRef, useEffect } from "react";
import { projects } from "../data/projects";

function hasLiveDemo(url) {
  return url && url !== "#";
}

function LoopingVideoPlayer({ src, loopStart, loopEnd, playbackRate = 1, scale = 1 }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const applyPlaybackRate = () => {
      video.playbackRate = playbackRate;
    };

    applyPlaybackRate();

    const seekToThumbnail = () => {
      video.currentTime = loopStart;
    };

    const startPlayback = () => {
      if (
        video.currentTime < loopStart ||
        (loopEnd != null && video.currentTime >= loopEnd)
      ) {
        video.currentTime = loopStart;
      }
      video.playbackRate = playbackRate;
      video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          startPlayback();
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.5, 1] },
    );

    const handleTimeUpdate = () => {
      if (loopEnd != null && video.currentTime >= loopEnd) {
        video.currentTime = loopStart;
      }
    };

    const handleEnded = () => {
      if (loopEnd != null) return;
      video.currentTime = loopStart;
      video.play().catch(() => {});
    };

    observer.observe(container);
    video.addEventListener("loadedmetadata", seekToThumbnail);
    video.addEventListener("loadeddata", seekToThumbnail);
    video.addEventListener("loadedmetadata", applyPlaybackRate);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      seekToThumbnail();
    }

    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", seekToThumbnail);
      video.removeEventListener("loadeddata", seekToThumbnail);
      video.removeEventListener("loadedmetadata", applyPlaybackRate);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [loopStart, loopEnd, playbackRate]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        src={loopStart > 0 ? `${src}#t=${loopStart}` : src}
        muted
        playsInline
        preload="auto"
        className="h-full w-full origin-center object-cover"
        style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}
      />
    </div>
  );
}

function DemoPlayer({ project }) {
  const live = hasLiveDemo(project.demo);
  const hasVideo = Boolean(project.video);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate shadow-2xl">
      {hasVideo ? (
        <LoopingVideoPlayer
          key={project.id}
          src={project.video.src}
          loopStart={project.video.loopStart}
          loopEnd={project.video.loopEnd}
          playbackRate={project.video.playbackRate}
          scale={project.video.scale}
        />
      ) : live ? (
        <iframe
          key={project.id}
          src={project.demo}
          title={`${project.label} demo`}
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
          loading="lazy"
          tabIndex={-1}
        />
      ) : (
        <div
          key={project.id}
          className="h-full w-full bg-cover bg-center brightness-75 transition-all duration-700"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
      )}

      {!live && !hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/90 text-on-primary-container shadow-xl md:h-20 md:w-20">
            <span className="material-symbols-outlined text-3xl md:text-4xl">
              play_arrow
            </span>
          </div>
        </div>
      )}

      {live && !hasVideo && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate/40 to-transparent" />
      )}
    </div>
  );
}

function ProjectDetail({ project, visible }) {
  return (
    <div
      className={`mx-auto max-w-3xl px-4 text-center transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="rounded-xl border border-outline-variant/30 bg-surface p-8 shadow-sm">
        {project.tech && (
          <p className="mb-4 font-body text-sm font-semibold tracking-wide text-primary uppercase">
            {project.tech.join(" · ")}
          </p>
        )}
        <p className="mb-8 font-body text-xl leading-8 text-on-surface-variant">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-base font-medium text-on-primary transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <span className="material-symbols-outlined text-xl">code</span>
            View on GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-6 py-3 font-display text-base font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/5"
          >
            <span className="material-symbols-outlined text-xl">open_in_new</span>
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects({ demoRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailVisible, setDetailVisible] = useState(true);

  const activeProject = projects[activeIndex];

  const handleSelect = useCallback(
    (index) => {
      if (index === activeIndex) return;

      setDetailVisible(false);
      setTimeout(() => {
        setActiveIndex(index);
        setDetailVisible(true);
      }, 300);
    },
    [activeIndex],
  );

  return (
    <section
      id="featured-projects"
      className="scroll-mt-20 pb-[var(--spacing-section-gap)] pt-6 md:pt-8"
    >
      <div className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="mb-6 space-y-2 text-center md:mb-8 md:space-y-3">
          <h2 className="font-display text-[28px] font-semibold text-on-surface md:text-[40px] md:leading-[48px]">
            Featured Projects
          </h2>
          <div
            className="flex items-center justify-center gap-1 text-primary md:gap-2"
            aria-hidden="true"
          >
            {projects.map((_, i) => (
              <span key={i} className="caret-down">
                keyboard_arrow_down
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          <div ref={demoRef}>
            <DemoPlayer project={activeProject} />
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => handleSelect(index)}
                    className={`rounded-full border-2 px-5 py-2.5 font-display text-sm font-medium transition-all duration-300 md:px-8 md:py-3 md:text-base ${
                      isActive
                        ? "border-primary bg-primary text-on-primary shadow-md"
                        : "border-transparent bg-surface text-on-surface-variant hover:border-primary/50"
                    }`}
                    aria-pressed={isActive}
                  >
                    {project.label}
                  </button>
                );
              })}
            </div>

            <ProjectDetail project={activeProject} visible={detailVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
