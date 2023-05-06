

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const takeToPreviousPage = () => {
      window.history.back();
    };
    const reloadPage = () => {
      window.location.reload();
    };
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h4>Sorry.. there was an error</h4>
          <button onClick={takeToPreviousPage}>Go Back</button>
          <span>or</span>
          <button onClick={reloadPage}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
