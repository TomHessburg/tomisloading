import React, { useState } from "react";
import { Code } from "components/code/Code";

interface File {
  title: string;
  code: string;
  lang: string;
}

interface Props {
  children: JSX.Element;
  files: File[];
}
export const CodeVidLayout = ({ children, files }: Props) => {
  return (
    <div className="min-h-screen flex items-start relative">
      <Content>{children}</Content>
      <Files files={files} />
    </div>
  );
};

const Content = ({ children }: { children: JSX.Element }) => {
  return <main className="col-span-8 w-full">{children}</main>;
};

const Files = ({ files }: { files: File[] }) => {
  const [selected, setSelected] = useState(files[0]);

  return (
    <aside className="max-w-[600px] w-[600px] shrink-0 m-4 rounded-lg selection:bg-brand bg-[#292E3E] overflow-scroll sticky z-0 shadow top-[81px] h-[calc(100vh_-_65px_-_32px)]">
      <div className="text-white sticky top-0 left-0 z-10 p-3 bg-[#3b425a]">
        {files.map((file) => (
          <span
            className={`cursor-pointer text-xs font-bold px-3 py-1 mr-1 rounded-full ${
              selected.title === file.title ? "bg-brand" : ""
            } `}
            onClick={() => setSelected(file)}
          >
            {file.title}
          </span>
        ))}
      </div>
      <div className="p-2">
        <Code code={selected.code} lang={selected.lang} />
      </div>
    </aside>
  );
};
