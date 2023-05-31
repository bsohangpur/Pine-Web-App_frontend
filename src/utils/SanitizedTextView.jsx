
import React from "react";
import { Box } from "@chakra-ui/react";
import sanitizeHtml from "sanitize-html";

const SanitizedTextView = ({ content }) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: ["p", "strong", "em", "img", "h1", "span","h2", "ol","ul", "li"],
    allowedAttributes: {
      img: ["src", "alt"],
      span:["style"],
      li:["style"]
    },
  });

  return (
    <Box className="sanitizedContent">
      <Box dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </Box>
  );
};

export default SanitizedTextView;