import { writable, derived } from "svelte/store"

// export let store = writable();

export const prefix = writable("")

function createNotificationStore (timeout) {
  const _notifications = writable([])

  function send (message, type = "default", timeout) {
      _notifications.update(state => {
          return [...state, { id: id(), type, message, timeout }]
      })
  }

  let timers = []

  const notifications = derived(_notifications, ($_notifications, set) => {
      set($_notifications)
      if ($_notifications.length > 0) {
          const timer = setTimeout(() => {
              _notifications.update(state => {
                  state.shift()
                  return state
              })
          }, $_notifications[0].timeout)
          return () => {
              clearTimeout(timer)
          }
      }
  })
  const { subscribe } = notifications

  return {
      subscribe,
      send,
      default: (msg, timeout) => send(msg, "default", timeout),
      info: (msg, timeout) => send(msg, "info", timeout),
      success: (msg, timeout) => send(msg, "success", timeout),
      warning: (msg, timeout) => send(msg, "warning", timeout),
      error: (msg, timeout) => send(msg, "error", timeout),
  }
}

function id() {
  return '_' + Math.random().toString(36).slice(2, 9);
};

export const notifications = createNotificationStore()