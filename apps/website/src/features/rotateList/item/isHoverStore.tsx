// 一個給useSyncExternalStore使用的external-store
// state只有isHover，用來控制是否hover
// 只有二個事件，onHover 和 onLeave用來改變state
function createStore() {
  let isHover = false;
  const listeners = new Set<() => void>()
  const onHover = () => {
    isHover = true;
    listeners.forEach((listener) => listener())
  }
  const onLeave = () => {
    isHover = false;
    listeners.forEach((listener) => listener())
  }
  const subscribe = (listener: () => void) => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }
  const getSnapshot = () => isHover
  return {
    subscribes: {
      isHover: subscribe,
    },
    actions: {
      onHover,
      onLeave,
    },
    getSnapshots: {
      isHover: getSnapshot,
    }
  }
}
export default createStore()
