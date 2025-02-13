import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { theme } from './theme';

const Code = ({ children }) => {
  return(
    <SyntaxHighlighter language="json" style={duotoneSpace} showLineNumbers wrapLongLines>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code;