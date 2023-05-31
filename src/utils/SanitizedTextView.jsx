import React from "react";
import { Box } from "@chakra-ui/react";
import sanitizeHtml from "sanitize-html";

const SanitizedTextView = ({ content, textColor }) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: ["p", "strong", "em", "img", "h1", "span", "h2", "ol", "ul", "li"],
    allowedAttributes: {
      img: ["src", "alt"],
      span: ["style"],
      li: ["style"]
    },
  });

  const spanStyle = `color: ${textColor}`;

  const injectStyles = (html) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const spans = wrapper.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      span.setAttribute("style", spanStyle);
    }
    return wrapper.innerHTML;
  };

  const sanitizedAndStyledContent = injectStyles(sanitizedContent);

  return (
    <Box className="sanitizedContent">
      <Box dangerouslySetInnerHTML={{ __html: sanitizedAndStyledContent }} />
    </Box>
  );
};

export default SanitizedTextView;
