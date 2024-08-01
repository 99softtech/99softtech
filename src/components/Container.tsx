import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`md:max-w-[1700px] w-full mx-auto px-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
