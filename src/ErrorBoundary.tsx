// Custom: ErrorBoundary

import * as React from 'react'

const changedArray = (
  prevArray: Array<unknown> = [],
  nextArray: Array<unknown> = []
) =>
  prevArray.length !== nextArray.length ||
  prevArray.some((item, index) => !Object.is(item, nextArray[index]))

interface ErrorBoundaryProps {
  onError?: (error: Error, info: { componentStack: string }) => void
  resetKeys?: Array<unknown>
  fallback?: React.ReactElement<
    unknown,
    string | React.FunctionComponent | typeof React.Component
  > | null
}

type ErrorBoundaryState = { error: Error | null }

const initialState: ErrorBoundaryState = { error: null }

class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  state = initialState

  resetErrorBoundary = () => {
    this.reset()
  }

  reset() {
    this.setState(initialState)
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info)
  }

  componentDidUpdate(
    prevProps: ErrorBoundaryProps,
    prevState: ErrorBoundaryState
  ) {
    const { error } = this.state
    const { resetKeys } = this.props

    if (
      error !== null &&
      prevState.error !== null &&
      changedArray(prevProps.resetKeys, resetKeys)
    ) {
      this.reset()
    }
  }

  render() {
    const { error } = this.state
    const { fallback, children } = this.props

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      }
      if (React.isValidElement(fallback)) {
        return fallback
      }
      props.resetErrorBoundary()
    }
    return children
  }
}

export { ErrorBoundary }
export type { ErrorBoundaryProps }
