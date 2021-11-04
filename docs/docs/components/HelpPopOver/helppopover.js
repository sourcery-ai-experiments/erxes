import React from "react";
import HelpPopover from "erxes-ui/lib/components/HelpPopover";
import styles from "../../../src/components/styles.module.css";
import CodeBlock from "@theme/CodeBlock";
import { renderApiTable, stringify } from "../common.js";
import "erxes-icon/css/erxes.min.css";

export function HelpPopOverComponent(props) {
  const { triggerOf = [], type, table=[] } = props;
  const title = "Help title";
  const child = "Help information";

  const propDatas = (propName, trgger) => {
    const kind = {
      [propName]: trgger,
    };

    return kind;
  };

  const renderBlock = (propName) => {
    return (
      <>
        <div className={styles.styleSpinner}>
          {triggerOf.map((trgger) => {
            return (
              <div className={styles.spinner}>
                <HelpPopover title={title} {...propDatas(propName, trgger)}>
                  {child}
                </HelpPopover>
              </div>
            );
          })}
        </div>
        <CodeBlock className="language-jsx">
          {`<>${triggerOf.map((trgger) => {
            return `\n\t<HelpPopover title="${title}" ${stringify(propDatas(propName, trgger))}>${child}</HelpPopover>`;
          })}\n</>`}
        </CodeBlock>
      </>
    );
  };

  if (type === "APIhelppopover"){
    return renderApiTable("HelpPopover", table)
  }
  return renderBlock("trigger");
}
