import React, { useLayoutEffect, useRef } from "react";

interface SquareCardProps {
  children: React.ReactNode;
  onSizeMeasured: (size: number) => void;
  uniformSize?: number;
}

const SquareCard: React.FC<SquareCardProps> = ({
  children,
  onSizeMeasured,
  uniformSize,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const contentWidth = el.scrollWidth;
    const contentHeight = el.scrollHeight;
    const maxSize = Math.max(contentWidth, contentHeight);

    onSizeMeasured(maxSize);
  }, [onSizeMeasured]);

  return (
    <div
      ref={ref}
      style={{
        width: uniformSize ?? "auto",
        minHeight: uniformSize ?? "auto",
        display: "inline-block",
        overflow: "visible",
      }}
    >
      {children}
    </div>
  );
};

export default SquareCard;
