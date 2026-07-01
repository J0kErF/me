const FONT_BY_LANG = {
  ar: "font-arabic",
  he: "font-hebrew",
  en: "font-sans",
} as const;

export default function ScriptLine({
  text,
  lang,
  className = "",
}: {
  text: string;
  lang: "ar" | "he" | "en";
  className?: string;
}) {
  return (
    <span
      dir={lang === "en" ? "ltr" : "rtl"}
      lang={lang}
      className={`${FONT_BY_LANG[lang]} ${className}`}
    >
      {text}
    </span>
  );
}
