export function VisualAccent({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <div className={`flex gap-1 w-fit ${className}`}>
      {variant === "primary" && (
        <div className="size-3.5 rounded-b-sm bg-primary-orange" />
      )}
      <div className="size-3.5 rounded-b-sm bg-primary-orange/75" />
      <div className="size-3.5 rounded-b-sm bg-primary-orange/50" />
    </div>
  );
}
