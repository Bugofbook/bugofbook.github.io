import React, { useSyncExternalStore, useEffect, useRef } from 'react'
import type { CSSProperties, PropsWithChildren } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import isHoverStore from './isHoverStore'
type Props = {
  initialRotationDegree: number
}
function customStyle ({ itemRadius, initialRotationDegree}: { itemRadius: number, initialRotationDegree?: number}): CSSProperties {
  return {
    ['--initial-rotating-degree' as string]: initialRotationDegree,
    ['--item-radius' as string]: itemRadius,
  }
}
function Component ({
  initialRotationDegree,
  children
}: PropsWithChildren<Props>): JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null)
  const isHover = useSyncExternalStore(
    isHoverStore.subscribes.isHover,
    isHoverStore.getSnapshots.isHover,
    // For server-side rendering, provide a stable snapshot (not hovered)
    () => false,
  )
  useEffect(() => {
    elementRef.current?.addEventListener('mouseenter', isHoverStore.actions.onHover)
    elementRef.current?.addEventListener('mouseleave', isHoverStore.actions.onLeave)
    return () => {
      elementRef.current?.removeEventListener('mouseenter', isHoverStore.actions.onHover)
      elementRef.current?.removeEventListener('mouseleave', isHoverStore.actions.onLeave)
      isHoverStore.actions.onLeave()
    }
  }, [])
  return (
    <div
      ref={elementRef}
      className={clsx(
        styles['rotating__item'],
        isHover ? styles['rotating__stop'] : styles['rotating__runner'],
        styles['rotating__clockwise'],
      )}
      style={customStyle({ itemRadius: 100, initialRotationDegree})}
    >
      <div
        className={clsx(
          styles['rotating__item__2'],
          isHover ? styles['rotating__stop'] : styles['rotating__runner'],
          styles['rotation__anticlockwise'],
        )}
      >
        {children}
      </div>
    </div>
  )
}
export default Component
