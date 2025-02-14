import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSpace } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ children }) => {
  return(
    <SyntaxHighlighter language="json" style={duotoneSpace} showLineNumbers wrapLongLines>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code;