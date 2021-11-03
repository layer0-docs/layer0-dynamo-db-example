import { Router } from "@layer0/core/router"
import listUsers from "./listUsers"

export default new Router().get("/", ({ compute, send, setResponseHeader }) => {
  compute(async (req, res) => {
    const users = await listUsers()
    setResponseHeader("content-type", "application/json")
    send(JSON.stringify(users), 200)
  })
})
