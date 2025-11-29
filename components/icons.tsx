type IconProps = {
  className?: string;
};

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M8.2 10.4c2.2-.6 4.2-.5 6.4.2.3.1.6-.1.7-.4.1-.3-.1-.6-.4-.7-2.4-.8-4.7-.9-7.1-.2-.3.1-.5.4-.4.7.1.3.4.5.8.4Zm.4 2.5c1.8-.5 3.4-.4 5.2.2.3.1.6 0 .7-.3.1-.3 0-.6-.3-.7-1.9-.7-3.8-.8-5.8-.2-.3.1-.5.4-.4.7.1.3.5.5.8.3Zm.5 2.4c1.4-.4 2.6-.3 4 .2.3.1.6 0 .7-.3.1-.3 0-.6-.3-.7-1.5-.6-3-.7-4.6-.2-.3.1-.5.4-.4.7.1.3.5.5.8.3Z"
        fill="#020617"
      />
    </svg>
  );
}

export function ApplePodcastsIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="2.4" fill="#020617" />
      <path
        d="M12 6.4a4 4 0 0 1 4 4c0 1.7-1.1 3.1-2.7 3.8l-.5-1.1A2.8 2.8 0 0 0 14.8 10a2.8 2.8 0 0 0-5.6 0c0 1.1.6 2.1 1.7 2.7l-.5 1.1A4 4 0 0 1 8 10a4 4 0 0 1 4-4Z"
        fill="#020617"
      />
      <path
        d="M10.7 14.7a1 1 0 0 1 .9-.7h.8c.4 0 .8.3.9.7l.7 3.1c.1.5-.3 1-1 1h-2.9c-.6 0-1.1-.5-1-1l.7-3.1Z"
        fill="#020617"
      />
    </svg>
  );
}

export function OvercastIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <circle cx="12" cy="12" r="4" fill="#020617" />
      <path
        d="M12 7.5a4.5 4.5 0 0 1 4.5 4.5"
        fill="none"
        stroke="#020617"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M12 9.2a2.8 2.8 0 0 1 2.8 2.8"
        fill="none"
        stroke="#020617"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PocketCastsIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="none"
        stroke="#020617"
        strokeWidth="1.6"
      />
      <path
        d="M12 9.2A2.8 2.8 0 0 1 14.8 12v3.2"
        fill="none"
        stroke="#020617"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PodcastMicIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="9" y="4" width="6" height="9" rx="3" fill="currentColor" />
      <path
        d="M8 11a4 4 0 0 0 8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 15v3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.5 18.5h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}



