import React from "react";

interface Props {
  children: JSX.Element;
}
export const CodeVidLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex items-start relative">
      <Content>{children}</Content>
      <Code />
    </div>
  );
};

const Content = ({ children }: Props) => {
  return <main className="col-span-8 w-full">{children}</main>;
};

const Code = () => {
  return (
    <aside className="w-[500px] flex-shrink-0 bg-light sticky z-0 top-[65px] h-[calc(100vh_-_65px)]">
      Code Goes Here
    </aside>
  );
};
