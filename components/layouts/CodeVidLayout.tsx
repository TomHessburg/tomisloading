import React, { useState } from "react";
import { Code } from "components/code/Code";
import { placeholderResults } from "components/search/utils/placeholderResults";
import { langsToIcons } from "components/search/utils/langsToIcons";

interface File {
  title: string;
  code: string;
  lang: string;
}

interface Props {
  children: JSX.Element;
  files: File[];
  meta: typeof placeholderResults[0];
}
export const CodeVidLayout = ({ children, files }: Props) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start relative">
      <Content>{children}</Content>
      <h3 className="block lg:hidden font-semibold px-8 py-4 text-xl bg-black text-white w-full text-center">
        Complete code
      </h3>
      <Files files={files} />
    </div>
  );
};

const Content = ({ children }: { children: JSX.Element }) => {
  return <main className="col-span-8 w-full p-8">{children}</main>;
};

const Files = ({ files }: { files: File[] }) => {
  const [selected, setSelected] = useState(files[0]);

  return (
    <aside className="w-full m-0 lg:m-4 ml-0 max-w-full lg:max-w-[575px] lg:w-[575px] shrink-0 selection:bg-brand bg-[#292E3E] overflow-scroll sticky z-0 shadow-xl shadow-black/20 top-[calc(65px_+_16px)] h-[calc(100vh_-_65px)] lg:h-[calc(100vh_-_65px_-_32px)] rounded-none lg:rounded-lg">
      <div className="text-white sticky top-0 left-0 z-10 p-3 bg-[#3b425a]">
        {files.map((file) => (
          <span
            key={file.title}
            className={`cursor-pointer text-xs font-semibold px-3 py-1 mr-1 rounded-lg ${
              selected.title === file.title ? "bg-black" : ""
            } `}
            onClick={() => setSelected(file)}
          >
            {file.title}
          </span>
        ))}
      </div>
      <div className="p-3">
        <Code code={selected.code} lang={selected.lang} />
      </div>
    </aside>
  );
};
