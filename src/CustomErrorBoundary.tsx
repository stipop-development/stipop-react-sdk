// CustomErrorBoundary

import React, {
  ComponentProps,
  CSSProperties,
  ReactNode,
  useState,
} from 'react'
import { ErrorBoundary } from './ErrorBoundary'

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>

interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  fallback?: ErrorBoundaryProps['fallback']
  isRefresh?: boolean
  style?: CSSProperties
  onError?: (error: Error, info: { componentStack: string }) => void
  children?: ReactNode
}

const RefreshButton = ({
  dispatch,
  style,
}: {
  dispatch: (flag: boolean) => void
  style?: CSSProperties
}): JSX.Element => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <button
        style={{ padding: '5px' }}
        onClick={() => {
          dispatch(false)
        }}
      >
        {'Refresh'}
      </button>
    </div>
  )
}

function CustomErrorBoundary({
  fallback,
  isRefresh,
  style,
  onError,
  children,
  ...errorBoundaryProps
}: Props): JSX.Element {
  const [refresh, setRefresh] = useState<boolean>(false)
  return (
    <ErrorBoundary
      fallback={fallback}
      resetKeys={[refresh]}
      onError={(error, info) => {
        isRefresh && setRefresh(true)
        onError && onError(error, info)
      }}
      {...errorBoundaryProps}
    >
      {!refresh ? (
        children
      ) : (
        <RefreshButton dispatch={flag => setRefresh(flag)} style={style} />
      )}
    </ErrorBoundary>
  )
}

export default CustomErrorBoundary
