import { langsToIcons } from "components/search/utils/langsToIcons";
import { placeholderResults } from "components/search/utils/placeholderResults";
import React from "react";

export function PrimaryHeader({
  meta,
}: {
  meta: typeof placeholderResults[0];
}) {
  return (
    <div>
      <span className="italic text-brand mb-2">{meta.created}</span>
      <h1 className="font-bold text-5xl mb-6 leading-tight">{meta.title}</h1>
      <div className="flex items-center mb-6">
        <div className="mr-12">
          <span className="font-bold block mb-2">Languages</span>
          <span>{langsToIcons(meta.langs)}</span>
        </div>
        <div>
          <span className="font-bold block mb-2">Tags</span>
          <span>{meta.tags.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
