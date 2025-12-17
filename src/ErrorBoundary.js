import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("🔥 React Error Caught:", error);
    console.log("📘 Component Stack:", info.componentStack);

    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", color: "red", fontFamily: "monospace" }}>
          <h2>⚠️ A component crashed!</h2>
          <p><strong>Error:</strong> {this.state.error?.message}</p>
          <details>
            <summary>Component Stack</summary>
            <pre>{this.state.info?.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
