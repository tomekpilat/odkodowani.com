"use client";

import Image from "next/image";
import Link from "next/link";
import { EPISODES, type Episode } from "../lib/episodes";

const PLACEHOLDER_FACE_SRC = "/EpisodeArt.png"; // dodaj ten plik do katalogu public

type EpisodeCardProps = {
  episode: Episode;
};

function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${episode.id}`}
      className="group flex min-w-[260px] max-w-sm shrink-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md hover:shadow-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#042780]/40 dark:border-zinc-700 dark:bg-[#050816] dark:shadow-[#020617] sm:min-w-[300px] sm:max-w-xs"
    >
      <div className="relative w-full pt-[100%]">
        <Image
          src={PLACEHOLDER_FACE_SRC}
          alt={`Okładka odcinka z gościem ${episode.guest}`}
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Dostępny w Spotify
            </p>
            <h3 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-50 sm:text-base">
              {episode.guest}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
              <span className="mr-1" aria-hidden="true">
                {episode.flag}
              </span>
              <span>{episode.country}</span>
              {episode.role ? (
                <>
                  <br />
                  <span className="episode-role text-zinc-400 dark:text-zinc-500">
                    {episode.role}
                  </span>
                </>
              ) : null}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#042780] dark:text-[#d3ddff]">
            <span className="hidden text-[11px] sm:inline">Zobacz szczegóły</span>
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-[11px] text-zinc-600 transition-transform group-hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:group-hover:bg-zinc-700"
            >
              →
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 px-4 pb-4 text-sm text-zinc-700 dark:text-zinc-200 sm:px-5">
        <p>{episode.short}</p>
      </div>
    </Link>
  );
}

export function EpisodesSection() {
  const live = EPISODES.filter((e) => e.type === "live");

  return (
    <section id="episodes" aria-labelledby="episodes-heading" className="py-14">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <h2
            id="episodes-heading"
            className="font-heading text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Dotychczasowe odcinki
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Kliknij w kartę, żeby zobaczyć więcej szczegółów. Wszystkich
            odcinków posłuchasz w aplikacji Spotify.
          </p>
        </div>

        {live.length > 0 && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {live.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


