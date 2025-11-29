import Image from "next/image";
import Link from "next/link";
import { EpisodesSection } from "../components/episodes-section";
import { ThemeToggle } from "../components/theme-toggle";
import {
  SpotifyIcon,
  ApplePodcastsIcon,
  OvercastIcon,
  PocketCastsIcon,
  PodcastMicIcon
} from "../components/icons";

const SPOTIFY_SHOW_URL =
  "https://open.spotify.com/show/6AI42YAqrAT4cUxFQwWLm7";
const EPISODE_ART_SRC = "/EpisodeArt.png";

export default function HomePage() {
  return (
    <div className="binary-bg min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]">
      <main className="px-4 pb-16 pt-6 text-zinc-900 sm:px-6 sm:pt-8 dark:text-zinc-50">
        <div className="mx-auto mb-8 flex max-w-4xl items-center justify-between">
          <p className="hidden items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 sm:flex">
            
          </p>
          <ThemeToggle />
        </div>
        {/* Hero */}
        <section id="hero" className="relative pb-6">
          {/* Large background mic icon */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-start opacity-40 dark:opacity-15">
            <PodcastMicIcon className="h-[20rem] w-[20rem] text-[#042780] sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem] dark:text-[#d3ddff]" />
          </div>

          <div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] md:items-center">
            <div className="space-y-4 text-left">
              <p className="inline-flex rounded-full bg-[#042780]/10 px-3 py-1 text-xs font-medium text-[#042780] dark:bg-[#042780]/20 dark:text-[#d3ddff]">
                Podcast o życiu polskich specjalistów IT za granicą
              </p>
              <div className="space-y-3">
                <h1 className="font-heading text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                  Odkodowani –{" "}
                  <span className="bg-gradient-to-r from-[#042780] to-[#4f7bff] bg-clip-text text-transparent">
                    historie polskich specjalistów IT za granicą
                  </span>
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                  Krótkie, szczere rozmowy o pracy w IT, przeprowadzce i codzienności
                  w nowym kraju. Bez ściemy i bez poradników sukcesu – po prostu
                  prawdziwe historie.
                </p>
              </div>
            </div>

            <aside className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-[#020819]">
              <div className="relative w-full pt-[55%] md:pt-[50%]">
                <Image
                  src={EPISODE_ART_SRC}
                  alt="Okładka najnowszego odcinka"
                  fill
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="space-y-3 px-4 py-4 sm:px-5 sm:py-5">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#042780] dark:text-[#9fb5ff]">
                    Najnowszy odcinek
                  </p>
                  <h2 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-50 sm:text-base">
                    Marcin, Holandia (Amsterdam)
                  </h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                    Jak wygląda codzienność polskiego developera w Amsterdamie, co
                    zaskakuje w holenderskiej kulturze i za co można pokochać to
                    miasto.
                  </p>
                </div>
                <Link
                  href="/episodes/marcin-amsterdam"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#042780] to-[#111129] px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:brightness-110 sm:text-sm"
                >
                  Zobacz szczegóły odcinka
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="pb-10">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Słuchaj w ulubionej aplikacji
            </p>
            <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-4">
              <a
                href={SPOTIFY_SHOW_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-[#050816] dark:text-zinc-50 dark:hover:border-zinc-500"
              >
                <SpotifyIcon className="h-5 w-5 text-[#1DB954]" />
                <span>Spotify</span>
              </a>
              <a
                href="https://podcasts.apple.com"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-[#050816] dark:text-zinc-50 dark:hover:border-zinc-500"
              >
                <ApplePodcastsIcon className="h-5 w-5 text-[#A855F7]" />
                <span>Apple Podcasts</span>
              </a>
              <a
                href="https://overcast.fm"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-[#050816] dark:text-zinc-50 dark:hover:border-zinc-500"
              >
                <OvercastIcon className="h-5 w-5 text-[#f97316]" />
                <span>Overcast</span>
              </a>
              <a
                href="https://pocketcasts.com"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-[#050816] dark:text-zinc-50 dark:hover:border-zinc-500"
              >
                <PocketCastsIcon className="h-5 w-5 text-[#ef4444]" />
                <span>Pocket Casts</span>
              </a>
            </div>
          </div>
        </section>

        <EpisodesSection />

        {/* About & contact */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-zinc-200 pt-10 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="space-y-2">
              <h2
                id="about-heading"
                className="font-heading text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
              >
                O podcaście
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Odkodowani to rozmowy z polskimi specjalistami IT, którzy
                zdecydowali się wyjechać z Polski. Interesuje mnie nie tylko
                kariera, ale też codzienne życie – jak się mieszka, pracuje i
                układa swoje sprawy w nowym kraju.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-[#050816]/80 dark:text-zinc-200 sm:px-5 sm:py-5">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                O prowadzącym
              </h3>
              <p>
                Nazywam się Tomasz Piłat i na co dzień działam w branży IT. Ten
                podcast powstał z ciekawości – chciałem słuchać szczerych
                historii osób, które zdecydowały się przenieść swoje życie i
                karierę poza Polskę, a przy okazji podzielić się nimi z innymi.
              </p>
            </div>

            <div
              id="contact"
              aria-labelledby="contact-heading"
              className="space-y-2"
            >
              <h3
                id="contact-heading"
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
              >
                Chcesz zostać gościem albo porozmawiać o współpracy?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Napisz kilka słów o sobie i miejscu, w którym mieszkasz. Odezwę
                się w sprawie nagrania lub potencjalnej współpracy:
              </p>
              <a
                href="mailto:kontakt@odkodowani.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#042780] underline-offset-4 hover:text-[#111129] hover:underline dark:text-[#d3ddff] dark:hover:text-white"
              >
                kontakt@odkodowani.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#020617]">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Odkodowani. Wszystkie prawa zastrzeżone.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#1DB954] hover:opacity-80"
            >
              <SpotifyIcon className="h-6 w-6" />
              <span className="sr-only">Spotify</span>
            </a>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#A855F7] hover:opacity-80"
            >
              <ApplePodcastsIcon className="h-6 w-6" />
              <span className="sr-only">Apple Podcasts</span>
            </a>
            <a
              href="https://overcast.fm"
              target="_blank"
              rel="noreferrer"
              className="text-[#f97316] hover:opacity-80"
            >
              <OvercastIcon className="h-6 w-6" />
              <span className="sr-only">Overcast</span>
            </a>
            <a
              href="https://pocketcasts.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#ef4444] hover:opacity-80"
            >
              <PocketCastsIcon className="h-6 w-6" />
              <span className="sr-only">Pocket Casts</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


