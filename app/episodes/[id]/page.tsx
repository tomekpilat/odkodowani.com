import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EPISODES } from "../../../lib/episodes";
import {
  SpotifyIcon,
  ApplePodcastsIcon,
  OvercastIcon,
  PocketCastsIcon
} from "../../../components/icons";
import { ThemeToggle } from "../../../components/theme-toggle";

const SPOTIFY_SHOW_URL =
  "https://open.spotify.com/show/6AI42YAqrAT4cUxFQwWLm7";
const EPISODE_ART_SRC = "/EpisodeArt.png";

type EpisodePageProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({
  params
}: EpisodePageProps): Metadata {
  const episode = EPISODES.find((e) => e.id === params.id);

  if (!episode) {
    return {
      title: "Odcinek podcastu Odkodowani",
      description:
        "Szczegóły odcinka podcastu Odkodowani – historie polskich specjalistów IT za granicą."
    };
  }

  const title = `${episode.guest} – ${episode.country} | Odkodowani`;

  return {
    title,
    description: episode.short,
    alternates: {
      canonical: `/episodes/${episode.id}`
    },
    openGraph: {
      type: "article",
      url: `/episodes/${episode.id}`,
      title,
      description: episode.short
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: episode.short
    }
  };
}

export default function EpisodePage({ params }: EpisodePageProps) {
  const episode = EPISODES.find((e) => e.id === params.id);

  if (!episode) {
    notFound();
  }

  const otherEpisodes = EPISODES.filter((e) => e.id !== episode.id);

  return (
    <div className="binary-bg min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 px-4 pb-16 pt-8 text-zinc-900 dark:from-[#020617] dark:via-[#020617] dark:to-[#020617] dark:text-zinc-50 sm:px-6 sm:pt-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-300 dark:hover:text-zinc-50"
        >
          <span aria-hidden>←</span>
          <span>Wróć na stronę główną</span>
        </Link>
        <ThemeToggle />
      </div>

      <main className="mx-auto mt-6 max-w-5xl">
        <div className="rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-sm dark:border-zinc-800 dark:bg-[#020617]/95 sm:p-6 md:p-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
            <section className="space-y-6">
              <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={EPISODE_ART_SRC}
                    alt={`Okładka odcinka z gościem ${episode.guest}`}
                    fill
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <header className="space-y-3">
                <p className="inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span aria-hidden className="text-lg">
                    {episode.flag}
                  </span>
                  <span>{episode.country}</span>
                </p>
                <h1 className="font-heading text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                  {episode.guest}
                </h1>
                <p className="episode-role max-w-xl text-sm text-zinc-600 dark:text-zinc-300">
                  {episode.role}
                </p>
              </header>

          <section className="space-y-3">
            <h2 className="font-heading text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Transkrypcja (placeholder)
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Tu pojawi się pełna transkrypcja odcinka z {episode.guest}. Na
              razie to tylko tekst zastępczy. Możesz użyć tego miejsca na
              dokładny zapis rozmowy, podział na sekcje tematyczne i
              znaczniki czasu.
            </p>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Możesz też dodać tu wyróżnione cytaty gościa, linki do artykułów,
              które wspominacie w rozmowie, oraz krótkie podsumowanie
              najważniejszych wniosków z odcinka.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Linki do odcinka (placeholder)
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <li>
                <a
                  href={SPOTIFY_SHOW_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#1DB954] underline-offset-4 hover:underline"
                >
                  <SpotifyIcon className="h-5 w-5" />
                  <span>Odcinek na Spotify</span>
                </a>
              </li>
              <li>
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#A855F7] underline-offset-4 hover:underline"
                >
                  <ApplePodcastsIcon className="h-5 w-5" />
                  <span>Odcinek w Apple Podcasts</span>
                </a>
              </li>
              <li>
                <a
                  href="https://overcast.fm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#f97316] underline-offset-4 hover:underline"
                >
                  <OvercastIcon className="h-5 w-5" />
                  <span>Odcinek w Overcast</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pocketcasts.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#ef4444] underline-offset-4 hover:underline"
                >
                  <PocketCastsIcon className="h-5 w-5" />
                  <span>Odcinek w Pocket Casts</span>
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Zdjęcia z odcinka (placeholder)
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="h-28 rounded-xl border border-dashed border-zinc-300 bg-zinc-100/60 dark:border-zinc-700 dark:bg-zinc-900/40" />
              <div className="h-28 rounded-xl border border-dashed border-zinc-300 bg-zinc-100/60 dark:border-zinc-700 dark:bg-zinc-900/40" />
              <div className="h-28 rounded-xl border border-dashed border-zinc-300 bg-zinc-100/60 dark:border-zinc-700 dark:bg-zinc-900/40" />
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Tu możesz dodać zdjęcia gościa, zrzuty ekranu, grafiki lub inne
              materiały wizualne związane z odcinkiem.
            </p>
          </section>
            </section>

            <aside className="space-y-6">
              <section className="space-y-3 rounded-2xl border border-zinc-200 bg-white px-4 py-4 shadow-sm dark:border-zinc-800 dark:bg-[#050816] sm:px-5 sm:py-5">
                <h2 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Lista odcinków
                </h2>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                  {EPISODES.map((ep) => (
                    <li key={ep.id}>
                      <Link
                        href={`/episodes/${ep.id}`}
                        className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs transition hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                          ep.id === episode.id
                            ? "bg-zinc-100 font-semibold dark:bg-zinc-800"
                            : ""
                        }`}
                      >
                        <span aria-hidden className="text-base">
                          {ep.flag}
                        </span>
                        <span>
                          {ep.guest} – {ep.country}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3 rounded-2xl border border-dashed border-zinc-200 bg-white/60 px-4 py-4 text-xs text-zinc-600 shadow-sm dark:border-zinc-700 dark:bg-[#050816]/60 dark:text-zinc-300 sm:px-5 sm:py-5">
                <h2 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Notatki do odcinka (placeholder)
                </h2>
                <p>
                  Tu możesz dodać krótkie notatki, linki do wspomnianych
                  narzędzi, książek, artykułów albo repozytoriów. Na razie to
                  tylko miejsce pomocnicze.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}


