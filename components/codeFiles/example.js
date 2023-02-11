export const files = [
  {
    title: "index.js",
    lang: "jsx",
    code: `const Files = ({ files }: { files: File[] }) => {
    const [selected, setSelected] = useState(files[0]);
    
    return (
        <aside className="hidden lg:block max-w-[600px] w-[600px]">
            <div className="text-white sticky top-0 left-0 z-10 p-3 bg-[#3b425a]">
                {files.map((file) => (
                <span
                    className={\`cursor-pointer text-xs font-semibold px-3 py-1 mr-1 rounded-lg \${
                    selected.title === file.title ? "bg-black" : ""
                    } \`}
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
      `,
  },
  {
    title: "styles.css",
    lang: "css",
    code: `.example {
  background: black; 
}
      `,
  },
  {
    title: "index.html",
    lang: "markup",
    code: `<div>
    <h1>Hey pal</h1>
</div>`,
  },
];
