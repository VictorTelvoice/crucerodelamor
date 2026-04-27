import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md";

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sunset-gold text-lake-950 shadow-premium hover:-translate-y-0.5 hover:bg-sunset-amber",
  secondary:
    "border border-sunset-gold/70 bg-white/10 text-warm-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/15",
  ghost: "text-warm-white hover:text-sunset-gold",
  dark: "bg-lake-950 text-warm-white shadow-premium hover:-translate-y-0.5 hover:bg-lake-blue",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const classes = [
    "inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.22em] transition",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props) {
    const anchorProps = props as ButtonAsLink;
    const {
      href,
      children: _children,
      variant: _variant,
      size: _size,
      className: _className,
      ...restAnchorProps
    } = anchorProps;

    return (
      <a className={classes} href={href} {...restAnchorProps}>
        {children}
      </a>
    );
  }

  const buttonOnlyProps = props as ButtonAsButton;
  const {
    children: _children,
    variant: _variant,
    size: _size,
    className: _className,
    ...buttonProps
  } = buttonOnlyProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
