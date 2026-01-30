export function VisualAccent({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <div className={`flex gap-[2.5px] sm:gap-1 w-fit ${className}`}>
      {variant === "primary" && (
        <div className="size-2 sm:size-3 rounded-b-[2.5px] sm:rounded-b-sm bg-primary-orange" />
      )}
      <div className="size-2 sm:size-3 rounded-b-[2.5px] sm:rounded-b-sm bg-primary-orange/75" />
      <div className="size-2 sm:size-3 rounded-b-[2.5px] sm:rounded-b-sm bg-primary-orange/50" />
    </div>
  );
}
