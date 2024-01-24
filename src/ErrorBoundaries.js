import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error is caught with error:", error, errorInfo);
    this.setState({ hasError: true });
    this.props.onError && this.props.onError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Something went wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary};
