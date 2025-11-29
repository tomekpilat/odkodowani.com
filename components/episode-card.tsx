type EpisodeStatus = "live" | "upcoming";

type EpisodeCardProps = {
  title: string;
  location: string;
  description: string;
  link?: string;
  status?: EpisodeStatus;
  badgeText?: string;
  dateLabel?: string;
};

export function EpisodeCard({
  title,
  location,
  description,
  link,
  status = "live",
  badgeText,
  dateLabel
}: EpisodeCardProps) {
  const isLive = status === "live";

  return (
    <article className="flex h-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 sm:text-sm">{location}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium sm:text-xs ${
              isLive
                ? "bg-[#042780]/10 text-[#042780]"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {badgeText ?? (isLive ? "Dostępny odcinek" : "W przygotowaniu")}
          </span>
          {dateLabel ? (
            <span className="text-[11px] text-zinc-500 sm:text-xs">
              {dateLabel}
            </span>
          ) : null}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-zinc-600">{description}</p>

      <div className="mt-auto pt-2">
        {isLive && link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#042780] hover:text-[#111129]"
          >
            <span>Słuchaj na Spotify</span>
            <span aria-hidden className="text-xs">
              ↗
            </span>
          </a>
        ) : !isLive ? (
          <p className="text-xs text-zinc-500">
            Zasubskrybuj, żeby nie przegapić premiery.
          </p>
        ) : null}
      </div>
    </article>
  );
}


