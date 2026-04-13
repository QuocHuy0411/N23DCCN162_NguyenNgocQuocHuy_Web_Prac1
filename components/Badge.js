export default function Badge({ label, color = "amber" }) {
  const styles = {
    amber: "bg-amber-100 text-amber-700 border border-amber-200",
    stone: "bg-stone-100 text-stone-600 border border-stone-200",
    indigo: "bg-indigo-100 text-indigo-700 border border-indigo-200",
    rose: "bg-rose-100 text-rose-700 border border-rose-200",
    teal: "bg-teal-100 text-teal-700 border border-teal-200",
  };

  const selectedStyle = styles[color] || styles.stone;

  return (
    <span
      className={`${selectedStyle} text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase`}
    >
      {label}
    </span>
  );
}
