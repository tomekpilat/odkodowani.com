export type EpisodeType = "upcoming" | "live";

export type Episode = {
  id: string;
  guest: string;
  country: string;
  role: string;
  flag: string;
  type: EpisodeType;
  short: string;
  details: string;
};

export const EPISODES: Episode[] = [
  {
    id: "maja-kopenhaga",
    guest: "Maja",
    country: "Dania (Kopenhaga)",
    role: "Product Designerka w skandynawskiej firmie technologicznej",
    flag: "🇩🇰",
    type: "live",
    short:
      "O pracy w skandynawskiej firmie, hygge w biurze i spokojnym tempie życia w Kopenhadze.",
    details:
      "Rozmawiamy o tym, jak wygląda proces rekrutacyjny w Danii, czym różni się tamtejsze podejście do odpowiedzialności w zespole i jak kultura zaufania wpływa na codzienną pracę. Maja opowiada też o kosztach życia, duńskiej pogodzie oraz o tym, co w Kopenhadze zaskoczyło ją najbardziej."
  },
  {
    id: "piotr-barcelona",
    guest: "Piotr",
    country: "Hiszpania (Barcelona)",
    role: "Senior Software Engineer w międzynarodowym scale‑upie",
    flag: "🇪🇸",
    type: "live",
    short:
      "O pracy w międzynarodowym zespole, hiszpańskim podejściu do deadlinów i życiu nad morzem.",
    details:
      "Piotr opowiada o tym, jak wygląda dzień pracy w międzynarodowym scale‑upie z siedzibą w Barcelonie, jak układać współpracę z osobami z różnych kultur oraz czym różni się podejście do czasu i planowania projektów w Hiszpanii. Wchodzimy też w temat łączenia intensywnej pracy z życiem w mieście, które żyje do późna."
  },
  {
    id: "marcin-amsterdam",
    guest: "Marcin",
    country: "Holandia (Amsterdam)",
    role: "Developer w holenderskiej firmie technologicznej",
    flag: "🇳🇱",
    type: "live",
    short:
      "O codzienności polskiego developera w Amsterdamie i różnicach kulturowych w pracy.",
    details:
      "W odcinku z Marcinem rozmawiamy o tym, jak wygląda wejście na holenderski rynek pracy, jakie są oczekiwania wobec developerów oraz jak podchodzi się tam do feedbacku i work‑life balance. Zajrzymy też do tematu rowerowej infrastruktury, biurowych zwyczajów i pierwszych wrażeń po przeprowadzce."
  },
  {
    id: "mariusz-lipsk",
    guest: "Mariusz",
    country: "Niemcy (Lipsk)",
    role: "Engineer pracujący za zachodnią granicą",
    flag: "🇩🇪",
    type: "live",
    short:
      "O niemieckich stereotypach, piwie i karierze polskiego inżyniera w Niemczech.",
    details:
      "Z Mariuszem przyglądamy się temu, które stereotypy na temat Niemców są prawdziwe, a które zupełnie się nie sprawdziły. Mówimy o podejściu do dokładności w pracy, niemieckiej biurokracji oraz o tym, jak wygląda integracja z lokalną społecznością i innymi expatami."
  },
  {
    id: "michal-california",
    guest: "Michał",
    country: "USA, California (Los Gatos)",
    role: "Senior Engineer w Dolinie Krzemowej",
    flag: "🇺🇸",
    type: "live",
    short:
      "O drodze z Berlina do Kalifornii i pracy na Zachodnim Wybrzeżu USA.",
    details:
      "Michał opowiada, jak wyglądała jego droga z Berlina do pracy w Kalifornii, z czym wiąże się przeprowadzka do Stanów i czym różni się codzienność w Dolinie Krzemowej od obrazu znanego z mediów. Rozmawiamy o kulturze pracy, presji wyników oraz plusach i minusach życia w tym regionie."
  }
];


