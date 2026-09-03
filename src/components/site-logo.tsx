type Props = {
  className?: string;
};

export function SiteLogo({ className = "h-8 w-8" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="9" fill="#166534" />
      <rect x="7" y="8" width="18" height="4.2" rx="2.1" fill="#d8f16f" />
      <rect x="7" y="14" width="14" height="4.2" rx="2.1" fill="#f7f8f3" />
      <rect x="7" y="20" width="10" height="4.2" rx="2.1" fill="#f7f8f3" opacity="0.72" />
    </svg>
  );
}
