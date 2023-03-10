import { createSignal, createEffect, onCleanup } from "solid-js"
import Button from "@suid/material/Button"
import toast, { Toaster } from "solid-toast"

const popTimer = () =>
  toast.custom(
    (t) => {
      const [life, setLife] = createSignal(100)

      createEffect(() => {
        if (t.paused) return
        const interval = setInterval(() => {
          setLife((l) => l - 0.5)
        }, 10)

        onCleanup(() => clearInterval(interval))
      })

      return (
        <div class="bg-pink-100 shadow-md px-4 py-3 rounded overflow-hidden relative text-pink-700">
          <div
            style={{ width: `${life()}%` }}
            class="bg-pink-200 h-full absolute top-0 left-0"
          ></div>
          <span class="relative">Timer In The Background</span>
        </div>
      )
    },
    {
      duration: 2000,
      unmountDelay: 0,
    }
  )

const popSuccess = () => toast.success("Toast launched successfully!")

export default function App() {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          popSuccess()
          popTimer()
        }}
      >
        Hello world
      </Button>
      <Toaster position="top-center" />
    </>
  )
}
