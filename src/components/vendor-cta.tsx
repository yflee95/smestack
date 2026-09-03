import { OutboundLink } from "@/components/outbound-link";
import type { SoftwareProduct } from "@/data/software";
import { vendorCta } from "@/lib/vendor-cta";

type Props = {
  product: SoftwareProduct;
  placement: string;
  className?: string;
  label?: string;
};

export function VendorCta({ product, placement, className, label }: Props) {
  const { href, isReferral } = vendorCta(product);

  return (
    <OutboundLink
      href={href}
      vendor={product.name}
      placement={placement}
      rel={isReferral ? "sponsored nofollow noopener" : "noopener noreferrer"}
      className={className}
    >
      {label ?? (isReferral ? "See current offer ↗" : "Visit vendor website ↗")}
    </OutboundLink>
  );
}
