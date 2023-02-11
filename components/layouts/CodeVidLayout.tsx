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
      <h3 className="block lg:hidden font-bold px-8 py-4 text-3xl bg-brand text-white w-full text-center">
        Complete Code
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
    <aside className="w-full max-w-full lg:max-w-[550px] lg:w-[550px] shrink-0 selection:bg-brand bg-[#292E3E] overflow-scroll sticky z-0 shadow top-[65px] h-[calc(100vh_-_65px)]">
      <div className="text-white sticky top-0 left-0 z-10 p-3 bg-[#3b425a]">
        {files.map((file) => (
          <span
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
