interface Props {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({ label, className = "", aspectRatio = "16/9" }: Props) => (
  <div
    className={`bg-muted flex items-center justify-center rounded-lg border border-border ${className}`}
    style={{ aspectRatio }}
  >
    <span className="text-sm text-muted-foreground text-center px-4">{label}</span>
  </div>
);

export default ImagePlaceholder;
