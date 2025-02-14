import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ children }) => {
  return(
    <SyntaxHighlighter language="json" style={oneDark} showLineNumbers wrapLongLines>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code;