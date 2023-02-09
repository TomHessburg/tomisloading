import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import palenight from "prism-react-renderer/themes/palenight";

export const Code = ({ code, lang }: { code: string; lang: string }) => {
  return (
    // @ts-ignore
    <Highlight {...defaultProps} theme={palenight} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} className="table-row">
              <span
                style={{ userSelect: "none" }}
                className="table-cell text-right pr-4 opacity-50"
              >
                {i + 1}
              </span>
              <div className="table-cell">
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
